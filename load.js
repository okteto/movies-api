const { MongoClient } = require("mongodb");

async function insert(collection, data) {
  const d = require(data);
  d.results.forEach((doc) => {
    doc._id = doc.id;
  });
  try {
    await collection.insertMany(d.results, { ordered: false });
  } catch (err) {
    // 11000: the documents were already loaded
    if (err.code != 11000) {
      throw err;
    }
  }
}

async function connectWithRetry() {
  const client = new MongoClient(process.env.MONGODB_URL, {
    serverSelectionTimeoutMS: 300,
  });
  for (;;) {
    try {
      await client.connect();
      return client;
    } catch (err) {
      console.error(`Error connecting, retrying in 300 msec: ${err}`);
      await new Promise((resolve) => setTimeout(resolve, 300));
    }
  }
}

async function load() {
  const client = await connectWithRetry();
  const db = client.db();
  try {
    await Promise.all([
      insert(db.collection("movies"), "./data/movies.json"),
      insert(db.collection("watching"), "./data/watching.json"),
    ]);
    console.log("all loaded");
    process.exit(0);
  } catch (err) {
    console.error(`fail to load: ${err}`);
    process.exit(1);
  }
}

load();
