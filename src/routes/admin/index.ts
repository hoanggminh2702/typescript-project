import express from "express";
import { MongoClient } from "mongodb";
import { getDb } from "../../common/db";
import { config } from "../../config";

const router = express.Router();

router.get("/", (req, res) => {
  const url = config.mongoConnectionString;

  if (url) {
    MongoClient.connect(url, function (err, db) {
      if (err) throw err;
      if (db) {
        const dbo = getDb();
        const myObj = { name: "Company Inc", address: "Highway 37" };
        if (dbo) {
          dbo.collection("customers").insertOne(myObj, function (err, resp) {
            if (err) throw err;
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
        } else {
          throw new Error("Dont have db");
        }
      }
    });
  } else {
    res.render("index", {
      title: req.query.title || "Cannot connect to db",
      showTitle: false,
      showNav: false,
    });
  }
});

export default router;
