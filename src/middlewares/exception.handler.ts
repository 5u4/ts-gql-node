import { HttpException } from "@senhung/http-exceptions";
import { ApolloError } from "apollo-server";

// TODO: Add args types
export const exceptionHandler = (resolve: any, _: any, __: any, ctx: any) => {
    try {
        return resolve();
    } catch (err) {
        if (err instanceof HttpException) {
            ctx.response.status(err.statusCode);
            throw new ApolloError(err.message);
        }
    }
};
