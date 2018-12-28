import { Node, Record } from "neo4j-driver/types/v1";

const collection = (records: Record[]) => {
    return records.map(result => {
        const node = result.get("p") as Node;

        return {
            identity: node.identity as unknown as string,
            ...node.properties,
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
