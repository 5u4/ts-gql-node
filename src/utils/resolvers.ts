import { fileLoader, mergeResolvers } from "merge-graphql-schemas";
import { config } from "../config";

export const resolvers = mergeResolvers(fileLoader(config.graphql.resolvers.definitions_path));
