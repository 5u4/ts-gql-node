import { services } from "../services";
import { ResolverMap } from "../types/graphql.type";

const resolvers: ResolverMap = {
    Query: {
        hello: (_, args: GQL.IHelloOnQueryArguments) => services.hello(args.name),
    },
};

export default resolvers;
