import { query } from "../utils/neo4j";
import { MOVIES_DEFAULT_LIMIT, MOVIES_DEFAULT_OFFSET } from "./movies.database";

export const PEOPLE_DEFAULT_OFFSET = 0;
export const PEOPLE_DEFAULT_LIMIT = 25;

const getAllPeople = async (limit = PEOPLE_DEFAULT_LIMIT, offset = PEOPLE_DEFAULT_OFFSET) => {
    return query(`MATCH (p:Person) RETURN p SKIP {offset} LIMIT {limit}`, { limit, offset });
};

const getPersonMovies = async (
    id: number,
    relation: GQL.PersonMovieRelation = GQL.PersonMovieRelation.ALL,
    limit = MOVIES_DEFAULT_LIMIT,
    offset = MOVIES_DEFAULT_OFFSET
) => {
    const relationship = relation === GQL.PersonMovieRelation.ALL
        ? `-[r]-`
        : `-[r:${relation.toString()}]-`;

    return query(`
        MATCH (p:Person) WHERE ID(p) = {id}
        MATCH (p)${relationship}(m:Movie)
        RETURN m, type(r) AS relation SKIP {offset} LIMIT {limit}
    `, { id, offset, limit });
};

export const people = {
    getAllPeople,
    getPersonMovies,
};
