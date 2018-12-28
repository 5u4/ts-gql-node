import { query } from "../utils/neo4j";

export const getAllPeople = async () => query(`MATCH (p:Person) RETURN p`);
