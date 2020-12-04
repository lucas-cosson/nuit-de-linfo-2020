require("dotenv").config();
const mariadb = require("mariadb");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("client"));

app.get("index.html", (_, res) => {
  res.sendFile("client/index.html");
});

app.post("/api/form/insert", async (req, res) => {
  console.log("Reçu : POST /database/");
  res.setHeader("Content-type", "application/json");
  let connection = null;
  try {
    connection = await mariadb.createConnection({
      port: 3306,
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      database: process.env.DB_DATABASE,
      password: process.env.DB_PWD,
    });
  } catch (error) {
    console.error(error);
  }

  console.log(req.body);
  /*
  connection
    .query("INSERT INTO data VALUES (?, ?, ?)", [
      1,
      Buffer.from("c327a97374", "hex"),
      "mariadb",
    ])
    .then()
    .catch();
  */
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
