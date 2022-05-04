import { Db, MongoClient } from "mongodb";
import { config } from "../config";

let db: Db;

export const initDb = async () => {
  const url = config.mongoConnectionString;
  if (url) {
    const client = new MongoClient(url);
    try {
      await client.connect();
      db = client.db();
    } catch (err: any) {
      throw new Error(err.message);
    }
  }
};

export const getDb = () => {
  if (!db) throw new Error("Db Exception");
  else return db;
};
