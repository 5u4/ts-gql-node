const env = process.env;

const playground: string | undefined | false = env.APP_PLAYGROUND || false;

export const app = {
    name: env.APP_NAME || "ts-gql-node",
    env: env.APP_ENV || "production",
    url: env.APP_URL || "http://localhost",
    port: env.APP_PORT || 3000,
    playground,
};
