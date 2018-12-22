import { services } from "../services/index";
import { ResolverMap } from "../types/graphql.type";

const resolvers: ResolverMap = {
    Query: {
        posts: (_, args: GQL.IPostsOnQueryArguments): GQL.IPost[] => services.posts.index(args.page, args.perPage),
    },
    Mutation: {
        createPost: (_, args: GQL.ICreatePostOnMutationArguments): GQL.IPost => services.posts.store(args.content),
    },
};

export default resolvers;
