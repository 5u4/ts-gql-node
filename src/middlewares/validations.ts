import { validators } from "../validators/index";

export const validations = {
    Query: {
        hello: validators.hello.hello,
        posts: validators.posts.index,
    },
    Mutation: {
        createPost: validators.posts.store,
    },
};
