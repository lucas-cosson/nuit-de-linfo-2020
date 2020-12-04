require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const mysql = require("mysql");
const bodyParser = require("body-parser");
const bcryptjs = require("bcryptjs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("client"));

app.get("index.html", (_, res) => {
  res.sendFile("client/index.html");
});

app.post("/api/user/register", (req, res) => {
  if (!req.body.user || !req.body.password) {
    console.log("erreur");
    res.send({
      answer: false,
      message: "Vous devez saisir un nom d'utilisateur et un mot de passe.",
    });
    return;
  }

  const connection = mysql.createConnection({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "",
    password: process.env.DB_PWD || "",
    database: process.env.DB_DATABASE || "",
  });

  connection.connect();

  const user = req.body.user;
  const password = bcryptjs.hashSync(req.body.password, 10);

  connection.query(
    `INSERT INTO user (us_name, us_password) VALUES ('${user}', '${password}')`,
    (err, _) => {
      if (err) throw err;
    }
  );

  console.log("ok");
  res.send({
    answer: true,
  });
});

app.post("/api/user/connect", (req, res) => {
  const connection = mysql.createConnection({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "",
    password: process.env.DB_PWD || "",
    database: process.env.DB_DATABASE || "",
  });

  connection.connect();

  const user = req.body.user;
  let password;

  connection.query(
    `SELECT us_password FROM user WHERE us_name='${user}'`,
    (error, result) => {
      if (error) throw err;
      if (result === []) {
        res.send({
          answer: false,
          message: "Mauvais mot de passe ou utilisateur.",
        });
        console.log("error");
        return;
      }

      password = result[0].us_password;
      const auth = bcryptjs.compareSync(req.body.password, password);

      if (auth) {
        res.send({
          answer: true,
        });
        console.log("ok");
      } else {
        console.log("error 2");
        res.send({
          answer: false,
          message: "Mauvais mot de passe ou utilisateur.",
        });
        return;
      }
    }
  );
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
