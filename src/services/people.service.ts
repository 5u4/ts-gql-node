import { database } from "../database/index";
import { PEOPLE_DEFAULT_LIMIT, PEOPLE_DEFAULT_OFFSET } from "../database/people.database";
import { transformers } from "../transformers/index";

const index = async (pagination: GQL.IPaginationInput | null | undefined) => {
    const limit = pagination ? pagination.perPage : PEOPLE_DEFAULT_LIMIT;
    const offset = pagination ? (pagination.page - 1) * limit : PEOPLE_DEFAULT_OFFSET;

    const results = await database.people.getAllPeople(limit, offset);

    return transformers.people.collection(results.records);
};

export const people = {
    people: index,
};
