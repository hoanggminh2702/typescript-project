import dotenv from "dotenv";
import express from "express";
import { create } from "express-handlebars";
import { getSourceDir } from "../utilities/util";

dotenv.config({
  path: process.cwd() + "\\.env",
});

const initApp = () => {
  const app = express();

  const handlebars = create({
    helpers: {
      uppercase(keyword: string) {
        return keyword.toUpperCase();
      },
    },
    defaultLayout: "main",
    extname: ".hbs",
    layoutsDir: getSourceDir + "\\views\\layouts",
    partialsDir: getSourceDir + "\\views\\partials",
  });

  const port = Number(process.env.PORT);

  app.engine(".hbs", handlebars.engine);

  app.set("view engine", ".hbs");

  app.set("views", getSourceDir + "\\views");

  app.get("/", (req, res) => {
    res.render("index", {
      title: req.query.title || "My Website",
      name: "Hoang Minh",
      person: {
        firstname: "Hoàng",
        lastname: "Minh",
      },
      showTitle: true,
      showNav: true,
    });
  });

  app.listen(port, () => {
    console.log("Listening on port", port);
  });
};

export default initApp;
