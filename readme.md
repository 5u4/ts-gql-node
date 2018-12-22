# TypeScript + GraphQL + Node.js

![Travis (.org)](https://img.shields.io/travis/senhungwong/ts-gql-node.svg?style=flat-square)
![MIT License](https://img.shields.io/github/license/senhungwong/ts-gql-node.svg?style=flat-square)
![GitHub tag](https://img.shields.io/github/tag/senhungwong/ts-gql-node.svg?style=flat-square)

A clean template combining TypeScript, GraphQL and Node.js together.

## How to use

1. Clone/fork repository

```
git clone https://github.com/senhungwong/ts-gql-node.git
```

2. Install dependency

```
cd ts-gql-node && npm install  # OR yarn
```

3. Set app environment

```
cp .env.example .env
```

4. Start server

```
npm start  # OR yarn serve
```

## General development process

1. GraphQL schema

    - Create GraphQL schema file and store them into `./src/schemas/`

    - Merge schemas

        ```
        # For modularization, schemas are defined in multiple files
        # The following script merges them into one schema
        npm run merge-schemas  # OR yarn merge-schemas
        ```

    - Generate TypeScript definition

        ```
        # We can generate TypeScript type definition by using the schema
        npm run gql2ts  # OR yarn gql2ts
        ```

2. GraphQL resolver

    - Create service in `./src/services/`. All complex logics should be here

    - Map field services to resolvers in `./src/resolvers/`

    - Write service tests in `./tests/` and test

        ```
        npm run test  # OR yarn test
        ```

    - Validate arguments in `./src/validators/` and map them in `./src/validators/index.ts`
