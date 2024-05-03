const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const connectMongo = require("./config/connectMongo");
const {
  getAllImages,
  getOneImage,
} = require("./controllers/cloudinaryControllers");
const { getAllDeeds, getOneDeed } = require("./controllers/mongoControllers");
const { getIndexPage, get404Page } = require("./controllers/staticControllers");

const app = express();
app.use(cors());
connectMongo();

app.get("/", getIndexPage);
app.get("/img/all", getAllImages);
app.get("/img/one", getOneImage);
app.get("/deeds/all", getAllDeeds);
app.get("/deeds/one", getOneDeed);
app.get("/*", get404Page);

mongoose.connection.once("open", () => {
  console.log("connected to Mongo...");
  app.listen(5000, console.log("server up and running..."));
});
