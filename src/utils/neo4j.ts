import { v1 } from "neo4j-driver";

export const db = v1.driver("bolt://localhost", v1.auth.basic("neo4j", "abcd"), {
    disableLosslessIntegers: true,
});

export const query = async (q: string, params = {}, mode: "READ" | "WRITE" = "READ") => {
    const session = db.session(mode);

    const results = await session.run(q, params);

    session.close();

    return results;
};
