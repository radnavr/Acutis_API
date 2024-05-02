const path = require("path");

// GET index
const getIndexPage = (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "../", "views", "index.html"));
};

// GET 404
const get404Page = (req, res) => {
  res.status(404).sendFile(path.join(__dirname, "../", "views", "404.html"));
};

module.exports = { getIndexPage, get404Page };
