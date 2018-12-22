import { GraphQLServer } from "graphql-yoga";
import * as morgan from "morgan";
import { config } from "../config/index";
import { middlewares } from "../middlewares";
import { resolvers } from "../utils/resolvers";
import { typeDefs } from "../utils/typedefs";

export const build = () => {
    const app = new GraphQLServer({
        typeDefs,
        resolvers,
        context: req => ({ ...req }),
        middlewares,
    });

    if (process.env.NODE_ENV === "local") {
        app.use(morgan("dev"));
    }

    return app;
};

export const serve = async () => {
    process.env.NODE_ENV = config.app.env;

    const app = build();

    const server = await app.start({
        port: config.app.port,
        endpoint: "/graphql",
        playground: config.app.playground,
    }, svr => {
        // tslint:disable-next-line:no-console
        console.log(`🚀 Server started\n`, svr);
    });

    return server;
};
