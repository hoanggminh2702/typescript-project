import express from "express";
import { create } from "express-handlebars";
import { initDb } from "../common/db";
import { config } from "../config";
import { engineConfigOptions } from "../config/EngineConfig";
import admin from "../routes/admin";
import { getSourceDir } from "../utilities/util";

const initApp = async () => {
  try {
    // init db
    await initDb();

    const app = express();

    const handlebars = create(engineConfigOptions);

    const port = Number(config.port);

    app.engine(".hbs", handlebars.engine);

    app.set("view engine", ".hbs");

    app.set("views", getSourceDir + "\\views");

    app.use("/", admin);

    app.listen(port, () => {
      console.log("Listening on port", port);
    });
  } catch (err) {
    console.log(err);
  }
};

export default initApp;
