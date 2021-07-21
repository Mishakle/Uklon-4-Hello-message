const express = require('express');

const greetingsMessage = require('./routes/hello');

const app = express();

app.use(express.json());

app.use(greetingsMessage);

app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json({ message: err.message });
});

app.listen(3001, () => {
  console.log('Server started');
});
