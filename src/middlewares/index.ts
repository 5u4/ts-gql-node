import { exceptionHandler } from "./handler";
import { ratelimit } from "./ratelimit";
import { validations } from "./validations";

export const middlewares = [ratelimit, validations, exceptionHandler];
