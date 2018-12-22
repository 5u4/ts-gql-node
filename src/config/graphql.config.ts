import * as path from "path";

export const graphql = {
    schemas: {
        definitions_path: path.join(__dirname, "../schemas/**/!(schema.merged.graphql)"),

        merged_path: path.join(__dirname, "../schemas/schema.merged.graphql"),

        ts_definition_path: path.join(__dirname, "../types/schema.d.ts"),
    },

    resolvers: {
        definitions_path: path.join(__dirname, "../resolvers"),
    },
};
