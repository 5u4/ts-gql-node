import { config } from "dotenv";
config();

import { serve } from "./bootstrap/app";

export const server = serve();
