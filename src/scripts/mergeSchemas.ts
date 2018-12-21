import * as fs from "fs";
import { fileLoader, mergeTypes } from "merge-graphql-schemas";
import { config } from "../config";

const schemas = fileLoader(config.graphql.schemas.definitions_path);

const mergedSchemas = mergeTypes(schemas, { all: true });

fs.writeFileSync(config.graphql.schemas.merged_path, mergedSchemas);
