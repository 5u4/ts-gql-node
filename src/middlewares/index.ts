import { validations } from "../validators/index";
import { exceptionHandler } from "./handler";

export const middlewares = [exceptionHandler, validations];
