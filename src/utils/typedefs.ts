import { importSchema } from "graphql-import";
import { config } from "../config";

export const typeDefs = importSchema(config.graphql.schemas.merged_path);
