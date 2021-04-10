export type TEnv = ".env.development.local" | ".env.test.local";

export const getEnvFileName = (): TEnv => {
    const env = process.env.NODE_ENV;
    let selected: TEnv;

    switch (env) {
        case "test":
            selected = ".env.test.local";
            break;
        default:
            selected = ".env.development.local";
    }

    return selected;
};
