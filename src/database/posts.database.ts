import { query } from "../utils/mysql";

const getAllPosts = async (limit: number | null | undefined, offset: number | null | undefined): Promise<any[]> => {
    return await query(`SELECT * FROM posts LIMIT ? OFFSET ?;`, [limit, offset]) as any[];
};

const storePost = async (content: string): Promise<any> => {
    await query(`INSERT INTO posts (content, created_at) VALUES (?, ?);`, [content, Date.now() / 1000 | 0]);

    return (await query(`SELECT * FROM posts ORDER BY id DESC LIMIT 1;`) as any[])[0];
};

export const posts = {
    getAllPosts,
    storePost,
};
