import { services } from "../services/index";
import { ResolverMap } from "../types/graphql.type";

const resolvers: ResolverMap = {
    Query: {
        posts: async (_, args: GQL.IPostsOnQueryArguments): Promise<GQL.IPost[]> => {
            return services.posts.index(args.page || 1, args.perPage || 20);
        },
    },
    Mutation: {
        createPost: async (_, args: GQL.ICreatePostOnMutationArguments): Promise<GQL.IPost> => {
            return services.posts.store(args.content);
        },
    },
};

export default resolvers;
