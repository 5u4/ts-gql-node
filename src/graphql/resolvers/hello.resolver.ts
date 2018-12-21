import { ResolverMap } from "../../types/graphql.type";

export const hello = (name: string | undefined = undefined) => `Hello ${name || "World"}`;

export const resolvers: ResolverMap = {
    Query: {
        hello: (_, { name }) => hello(name),
    },
};
