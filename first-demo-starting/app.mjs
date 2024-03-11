import express from 'express';

import connectToDatabase from './helpers.mjs'

const app = express();

app.get('/', (req, res) => {
  res.send('<h2>Hi there!</h2>');
});

await connectToDatabase();

// applying comment to check pull request rule, again
app.listen(3000);