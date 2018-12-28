import { Node, Record } from "neo4j-driver/types/v1";

const collection = (records: Record[]) => {
    return records.map(result => {
        const props: DBMovie = (result.get("m") as Node).properties as DBMovie;

        return {
            ...props,
            released: props.released === undefined ? undefined : props.released.low,
        } as GQL.IMovie;
    });
};

const transform = (record: Record[]) => {
    const result = collection(record);

    return result ? result[0] : result;
};

export const movies = {
    transform,
    collection,
};
