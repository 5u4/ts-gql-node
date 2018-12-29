import { Node, Record } from "neo4j-driver/types/v1";
import { services } from "../services/index";

const collection = (records: Record[]) => {
    return records.map(result => {
        const node = result.get("p") as Node;

        const identity = node.identity as unknown as string;

        const movies = async (args: GQL.IMoviesOnPersonArguments) => {
            return services.people.movies(identity, args.direction || undefined, args.pagination);
        };

        return {
            identity,
            ...node.properties,
            movies: movies as unknown, // TODO: Fix type here
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
