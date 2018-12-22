import * as mysql from "mysql";
import { config } from "../config";

const db = mysql.createConnection({
    host: config.database.host,
    port: config.database.port,
    user: config.database.user,
    password: config.database.password,
    database: config.database.database,
});

db.connect();

export { db };

export const query = (q: string, variables: any[] = []) => new Promise((resolve, reject) => {
    db.query(q, variables, (err, results) => {
        if (err) {
            return reject(err);
        }

        resolve(results);
    });
});
