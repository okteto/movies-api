# Movies API

This example shows how to leverage [Okteto](https://github.com/okteto/okteto) to develop the Movies App in Okteto.

The [Movies App](https://github.com/okteto/movies-multi-repo) is composed by the following components:

- A very simple Node.js API using [Express](https://expressjs.com). Deployed using a [Helm Chart](https://github.com/okteto/movies-api/tree/master/chart).
- A [MongoDB](https://www.mongodb.com) database.  Deployed using a public [Helm Chart](https://docs.bitnami.com/kubernetes/infrastructure/mongodb/get-started/install/)
- A frontend in React, defined in a different [Github Repository]((https://github.com/okteto/movies-frontend)).

## Develop

Execute the following command to activate your development container:

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

