const index = (page: number | null | undefined, perPage: number | null | undefined): GQL.IPost[] => {
    // Fetch posts
    return [
        { __typename: "Post", id: 1, content: "dummy", createdAt: Date.now() / 1000 | 0 },
    ];
};

const store = (content: string): GQL.IPost => {
    // Store post
    return { __typename: "Post", id: 1, content, createdAt: Date.now() / 1000 | 0 };
};

export const posts = {
    index,
    store,
};
