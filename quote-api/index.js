const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());

const quotes = [
  { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
  { text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", author: "Albert Einstein" },
  { text: "So many books, so little time.", author: "Frank Zappa" }
];

app.get('/api/quotes', (req, res) => {
  res.json(quotes);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
