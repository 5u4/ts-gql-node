import { GraphQLServer } from "graphql-yoga";
import * as morgan from "morgan";
import { resolvers } from "../utils/resolvers";
import { typeDefs } from "../utils/typedefs";

export const build = () => {
    const app = new GraphQLServer({ typeDefs, resolvers });

    if (process.env.NODE_ENV === "local") {
        app.use(morgan("dev"));
    }

    return app;
};

export const serve = async () => {
    const app = build();

    const server = await app.start(svr => {
        // tslint:disable-next-line:no-console
        console.log(`🚀 Server started\n`, svr);
    });

    return server;
};
