import Bottleneck from "bottleneck";
import { config } from "../config/index";

const limiter = new Bottleneck({
    minTime: config.ratelimit.minTime,
});

export const ratelimit = async (resolve: any, _: any, __: any, ctx: any) => {
    return limiter.schedule(() => resolve());
};
