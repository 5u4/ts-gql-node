import { services } from "../services";
import { ResolverMap } from "../types/graphql.type";

const resolvers: ResolverMap = {
    Query: {
        people: async (_, args: GQL.IPeopleOnQueryArguments): Promise<GQL.IPerson[]> => {
            return services.people.people(args.pagination);
        },
    },
};

export default resolvers;
