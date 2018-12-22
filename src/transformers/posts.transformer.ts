const transform = (post: any): GQL.IPost => {
    return {
        __typename: "Post",
        ...post,
        createdAt: post.created_at,
    } as GQL.IPost;
};

export const posts = {
    transform,
};
