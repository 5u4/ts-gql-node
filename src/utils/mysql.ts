import * as mysql from "mysql";
import { config } from "../config";

export const db = mysql.createConnection({
    host: config.database.host,
    port: config.database.port,
    user: config.database.user,
    password: config.database.password,
    database: config.database.database,
});
