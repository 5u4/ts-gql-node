import { GraphQLServer } from "graphql-yoga";
import { resolvers } from "../graphql/resolvers/hello.resolver";
import * as morgan from "morgan";

export const build = () => {
    const typeDefs = `
        type Query {
            hello(name: String): String!
        }
    `;

    const app = new GraphQLServer({ typeDefs, resolvers });

    if (process.env.NODE_ENV === "local") {
        app.use(morgan("dev"));
    }

    return app;
};

export const serve = async () => {
    const app = build();

    const server = await app.start();

    return server;
};
