const env = process.env;

export const ratelimit = {
    minTime: +(env.RATELIMIT_MIN_TIME || 1000),
};
