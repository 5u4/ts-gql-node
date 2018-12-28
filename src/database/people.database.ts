import { query } from "../utils/neo4j";

export const PEOPLE_DEFAULT_OFFSET = 0;
export const PEOPLE_DEFAULT_LIMIT = 25;

export const getAllPeople = async (limit = PEOPLE_DEFAULT_LIMIT, offset = PEOPLE_DEFAULT_OFFSET) => {
    return query(`MATCH (p:Person) RETURN p SKIP {offset} LIMIT {limit}`, { limit, offset });
};
