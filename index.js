const express = require('express');
const os = require('os');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const hostname = os.hostname();
  res.send(`This pod's IP is ${hostname}\n`);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

