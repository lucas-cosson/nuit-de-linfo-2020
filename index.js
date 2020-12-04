require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const mysql = require("mysql");

app.use(express.static("client"));

app.get("index.html", (_, res) => {
  res.sendFile("client/index.html");
});

app.get("/api/user/connect", (_, res) => {
  const connection = mysql.createConnection({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "",
    password: process.env.DB_PWD || "",
    database: process.env.DB_DATABASE || "",
  });

  console.log(connection);

  connection.connect();

  connection.query("SELECT * FROM user", (err, res, fields) => {
    if (err) throw err;
    console.log(res, fields);
  });

  res.json("Coucou");
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
