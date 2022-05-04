namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: string;
    MY_VARIABLE: string;
    PORT: string;
    MONGO_CONNECTION_STRING: string;
  }
}

export type EnvName = keyof NodeJS.ProcessEnv;
