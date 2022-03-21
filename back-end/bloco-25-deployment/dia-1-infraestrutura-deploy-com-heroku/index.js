const express = require('express');

const app = express();

app.get('/', (_req, res) => {
  res.status(200).send('Está vivo!!!')
});

const PORT = process.env.PORT || 3000;

app.listen(3000);