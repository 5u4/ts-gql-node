import { services } from "../services";
import { ResolverMap } from "../types/graphql.type";

const resolvers: ResolverMap = {
    Query: {
        movies: async (_, args: GQL.IMoviesOnQueryArguments): Promise<GQL.IMovie[]> => {
            return services.movies.movies(args.pagination);
        },
    },
};

export default resolvers;
