import { query } from "../utils/mysql";

const up1 = async () => {
    return query(`CREATE TABLE \`posts\` (
        \`id\` int(11) unsigned NOT NULL AUTO_INCREMENT,
        \`content\` varchar(180) NOT NULL DEFAULT '',
        \`created_at\` int(11) NOT NULL,
        PRIMARY KEY (\`id\`)
        ) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;
    `);
};

export const posts = {
    up1,
};
