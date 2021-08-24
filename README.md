# movies-api

This example shows how to leverage [Okteto](https://github.com/okteto/okteto) to develop a Node.js + React Sample App directly in Kubernetes.

The Node + React Sample App is composed by the following components:

- A very simple Node.js API using [Express](https://expressjs.com). Deployed using a [Helm Chart](https://github.com/okteto/movies-api/tree/master/chart).
- A [MongoDB](https://www.mongodb.com) database. Deployed and initialized using a [Docker Compose](https://github.com/okteto/movies-api/blob/main/mongodb-compose.yml) file.
- A frontend in React, defined in a different [Github Repository]((https://github.com/okteto/movies-frontend)).

## Deploy

Deploy the app on Okteto Cloud by clicking the following button:

[![Develop on Okteto](https://okteto.com/develop-okteto.svg)](https://cloud.okteto.com/deploy?repository=https://github.com/okteto/movies-api)

Alternatively, you can clone this repo and run `okteto pipeline deploy`.

## Develop

Once your app is **Running**, execute the following command to activate your development container:

```command
$ okteto up
```

```
 ✓  Development container activated
 ✓  Files synchronized
    Namespace: cindy
    Name:      web
    Forward:   9229 -> 9229
               27017 -> mongodb:27017

Welcome to your development container. Happy coding!
cindy:api src>
```

Run the app by executing the following command:

```command
cindy:api src> yarn start
```

Start the app in debug mode by executing the following command:

```command
cindy:api src> yarn debug
```

