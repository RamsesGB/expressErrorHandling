const express = require("express");
const path = require("path");

const server = express();

server.get("/download", (req, res, next) => {
  const filePath = path.join(__dirname, "index.html");
  res.sendFile(filePath, (err) => {
    if (err) {
      next(err);
    } else {
      console.log("File sent successully.");
    }
  });
});

server.use((err, req, res, next) => {
  //error handling middleware, takes in ERROR
  console.log(err);
  res
    .status(500)
    .json({
      message: "There was an error performing the required operation",
      error: err,
    });
});

module.exports = server;
