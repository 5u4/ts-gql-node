import { database } from "../database";
import { transformers } from "../transformers/index";

const index = async (page: number, perPage: number): Promise<GQL.IPost[]> => {
    const posts = await database.posts.getAllPosts(perPage, (page - 1) * perPage);

    return posts.map(post => transformers.posts.transform(post));
};

const store = async (content: string): Promise<GQL.IPost> => {
    const post = await database.posts.storePost(content);

    return transformers.posts.transform(post);
};

export const posts = {
    index,
    store,
};
