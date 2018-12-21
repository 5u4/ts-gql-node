import * as path from "path";

export const graphql = {
    schemas: {
        definitions_path: path.join(__dirname, "../schemas"),

        merged_path: path.join(__dirname, "../schema.graphql"),

        ts_definition_path: path.join(__dirname, "../types/schema.d.ts"),
    },

    resolvers: {
        definitions_path: path.join(__dirname, "../resolvers"),
    },
};
