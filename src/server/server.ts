import dotenv from "dotenv";
import express from "express";
import { engine } from "express-handlebars";
import path from "path";
import { getRootDir } from "../utilities/util";

dotenv.config({
  path: process.cwd() + "\\.env",
});

const initApp = () => {
  const app = express();

  const port: number = 8080;

  app.set("view engine", "handlebars");

  app.engine("handlebars", engine());

  app.set("views", path.join(getRootDir, "\\views"));

  app.get("/", (req, res) => {
    res.render("index", {
      title: "My Website",
      name: "Hoang Minh",
    });
  });

  app.listen(port, () => {
    console.log("Listening on port", parseInt(process.env.PORT || "3000"));
  });
};

export default initApp;
