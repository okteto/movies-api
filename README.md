# Movies API

This example shows how to leverage [Okteto](https://github.com/okteto/okteto) to develop the Movies App in Okteto.

The [Movies App](https://github.com/okteto/movies-multi-repo) is composed by the following components:

- A very simple Node.js API using [Express](https://expressjs.com). Deployed using a [Helm Chart](https://github.com/okteto/movies-api/tree/master/chart).
- A [MongoDB](https://www.mongodb.com) database, defined in a different [GitHub repository](https://github.com/okteto/mongodb).
- A frontend in React, defined in a different [GitHub repository](https://github.com/okteto/movies-frontend).

## Deploy

Deploy the Movies App from the [movies-multi-repo](https://github.com/okteto/movies-multi-repo) repository. Its Okteto Manifest deploys this repository as a dependency, with the connection string of the MongoDB database in the `MONGODB_URL` variable.

## Develop

Execute the following command to activate your development container:

```command
$ okteto up
```

```
 ✓  Files synchronized
    Namespace: cindy
    Name:      api
    Forward:   9229 -> 9229
               27017 -> mongodb:27017

Server running on port 8080.
```

`node --watch` restarts the API when you change a file, and the Node.js debugger listens on port 9229.
