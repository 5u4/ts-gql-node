import { database } from "../database/index";
import { MOVIES_DEFAULT_LIMIT, MOVIES_DEFAULT_OFFSET } from "../database/movies.database";
import { transformers } from "../transformers/index";

const index = async (pagination: GQL.IPaginationInput | null | undefined) => {
    const limit = pagination ? pagination.perPage : MOVIES_DEFAULT_LIMIT;
    const offset = pagination ? (pagination.page - 1) * limit : MOVIES_DEFAULT_OFFSET;

    const results = await database.movies.getAllMovies(limit, offset);

    return transformers.movies.collection(results.records);
};

export const movies = {
    movies: index,
};
