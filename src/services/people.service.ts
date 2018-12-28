import { getAllPeople } from "../database/people.database";
import { transformers } from "../transformers/index";

const index = async () => {
    const results = await getAllPeople();

    return transformers.people.collection(results.records);
};

export const people = {
    people: index,
};
