const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();

async function connectWithRetry() {
  const client = new MongoClient(process.env.MONGODB_URL, {
    serverSelectionTimeoutMS: 1000,
  });
  for (;;) {
    try {
      await client.connect();
      return client.db();
    } catch (err) {
      console.error(`Error connecting, retrying in 1 sec: ${err}`);
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  }
}

async function start() {
  const db = await connectWithRetry();

  app.get("/api/healthz", (req, res) => {
    res.sendStatus(200);
  });

  app.get("/api/movies", async (req, res) => {
    console.log(`GET /api/movies`);
    try {
      res.json(await db.collection("movies").find().toArray());
    } catch (err) {
      console.log(`failed to query movies: ${err}`);
      res.json([]);
    }
  });

  app.get("/api/watching", async (req, res) => {
    console.log(`GET /api/watching`);
    try {
      res.json(await db.collection("movies").find().toArray());
    } catch (err) {
      console.log(`failed to query watching: ${err}`);
      res.json([]);
    }
  });

  app.listen(8080, () => {
    console.log("Server running on port 8080.");
  });
}

start();
