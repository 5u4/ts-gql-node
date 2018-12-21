import { hello } from "../services/hello.service";
import { ResolverMap } from "../types/graphql.type";

const resolvers: ResolverMap = {
    Query: {
        hello: (_, args: GQL.IHelloOnQueryArguments) => hello(args.name),
    },
};

export default resolvers;
