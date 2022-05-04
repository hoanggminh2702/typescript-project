export {};

namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: string;
    MY_VARIABLE: string;
    PORT: number;
    MONGO_CONNECTION_STRING: string;
  }
}

declare global {
  type EnvName = keyof NodeJS.ProcessEnv;
  type ProcessEnv = NodeJS.ProcessEnv;
}
