import express from "express";
import { engine } from "express-handlebars";
const app = express();

const port: number = 8080;

app.set("view engine", "handlebars");

app.engine("handlebars", engine());

app.set("views", __dirname + "\\views");

app.get("/", (req, res) => {
  res.render("index", {
    title: "My Website",
    name: "Hoang Minh",
  });
});

app.listen(port, () => {
  console.log("Listening on port", port);
});
