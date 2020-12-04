require("dotenv").config();
const mariadb = require("mariadb");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("client"));

app.get("index.html", (_, res) => {
  res.sendFile("client/index.html");
});

app.get("/database", (req, res) => {
  console.log("Reçu : GET /database/");
  res.setHeader("Content-type", "application/json");

  const connection = mariadb
    .createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      database: process.env.DB_DATABASE,
      password: process.env.DB_PWD,
    })
    .then((conn) => {
      console.log("connected ! connection id is " + conn.threadId);
    })
    .catch((err) => {
      console.log("not connected due to error: " + err);
    });

  connection
    .end()
    .then(() => {
      //connection has ended properly
    })
    .catch((err) => {
      console.log(err);
    });
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});



