require("dotenv").config();
const bodyParser = require("body-parser");
const mariadb = require("mariadb");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(express.static("client"));

app.get("index.html", (_, res) => {
  res.sendFile("client/index.html");
});

app.post("/api/form/insert/", async (req, res) => {
  res.setHeader("Content-type", "application/json");
  console.log("Reçu : POST /database/");
  let connection = null;
  try {
    connection = await mariadb.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      database: process.env.DB_DATABASE,
      password: process.env.DB_PWD,
    });
  } catch (error) {
    console.error(error);
  }
  try {
    await connection.query(
      "INSERT INTO form (lieu, date_session,waterman,time,pollution) VALUES (?, ?, ?, ?, ?)",
      [
        req.body.lieu,
        req.body.date_session,
        req.body.waterman,
        req.body.time,
        req.body.pollution,
      ]
    );
  } catch (error) {
    console.error(error);
  }
  try {
    await connection.end();
  } catch (error) {
    console.error(error);
  }

  res.json({ status: 0 });
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
