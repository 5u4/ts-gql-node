import { services } from "../services";
import { ResolverMap } from "../types/graphql.type";

const resolvers: ResolverMap = {
    Query: {
        people: async (): Promise<GQL.IPerson[]> => services.people.people(),
    },
};

export default resolvers;
