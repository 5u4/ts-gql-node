import { exceptionHandler } from "./handler";
import { validations } from "./validations";

export const middlewares = [exceptionHandler, validations];
