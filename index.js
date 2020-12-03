const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('client'));

app.get('index.html', (_, res) => {
  res.sendFile('client/index.html');
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
})