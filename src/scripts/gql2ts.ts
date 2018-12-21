import { generateNamespace } from "@gql2ts/from-schema";
import * as fs from "fs";
import { config } from "../config";

const types = generateNamespace("GQL", fs.readFileSync(config.graphql.schemas.merged_path, "utf8"));

fs.writeFile(config.graphql.schemas.ts_definition_path, types, err => {
    if (err) {
        // tslint:disable-next-line:no-console
        console.error(err);
    }
});
