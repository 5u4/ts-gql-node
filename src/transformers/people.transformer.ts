import { Node, Record } from "neo4j-driver/types/v1";

const collection = (records: Record[]) => {
    return records.map(result => {
        const props: DBPerson = (result.get("p") as Node).properties as DBPerson;

        return {
            ...props,
            born: props.born === undefined ? undefined : props.born.low,
        } as GQL.IPerson;
    });
};

const transform = (record: Record[]) => {
    const result = collection(record);

    return result ? result[0] : result;
};

export const people = {
    transform,
    collection,
};
