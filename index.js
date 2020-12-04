require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const mysql = require("mysql");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("client"));

app.get("index.html", (_, res) => {
  res.sendFile("client/index.html");
});

app.post("/api/user/register", (req, res) => {
  console.log("hey");

  const connection = mysql.createConnection({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "",
    password: process.env.DB_PWD || "",
    database: process.env.DB_DATABASE || "",
  });

  connection.connect();

  const user = req.body.user;
  const password = req.body.password;

  connection.query(
    `INSERT INTO user (us_name, us_password) VALUES ('${user}', '${password}')`,
    (err, res) => {
      if (err) throw err;
      console.log(res);
    }
  );

  res.status(200);
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
