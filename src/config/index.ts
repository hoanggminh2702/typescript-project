import dotenv from "dotenv";
import { EnvName } from "../@types/global";
dotenv.config({
  path: process.cwd() + "\\.env",
});

export function getEnvName(name: EnvName) {
  return process.env[name];
}

export const config = {
  port: getEnvName("PORT"),
  mongoConnectionString: getEnvName("MONGO_CONNECTION_STRING"),
};
