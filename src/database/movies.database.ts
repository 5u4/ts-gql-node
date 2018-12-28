import { query } from "../utils/neo4j";

export const MOVIES_DEFAULT_OFFSET = 0;
export const MOVIES_DEFAULT_LIMIT = 25;

const getAllMovies = async (limit = MOVIES_DEFAULT_LIMIT, offset = MOVIES_DEFAULT_OFFSET) => {
    return query(`MATCH (m:Movie) RETURN m SKIP {offset} LIMIT {limit}`, { limit, offset });
};

export const movies = {
    getAllMovies,
};
