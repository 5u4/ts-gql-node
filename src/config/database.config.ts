const env = process.env;

export const database = {
    host: env.DB_HOST || "localhost",
    port: +(env.DB_PORT || 3306),
    user: env.DB_USER || "root",
    password: env.DB_PASSWORD || "root",
    database: env.DB_DATABASE || "treehole",
};
