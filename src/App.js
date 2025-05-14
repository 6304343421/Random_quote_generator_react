import React, { useState } from 'react';
import axios from 'axios';
import './App.css'
import {
  Box,
  Container,
  Typography,
  Button,
  CircularProgress,
  Paper,
} from '@mui/material';

// const apiUrl = "http://localhost:5000/api/quotes";
// const apiUrl='http://127.0.0.1:8000/api/quotes';

let quotations =[
    "Life is what happens when you're busy making other plans. – John Lennon",
    "Get busy living or get busy dying. – Stephen King",
    "You only live once, but if you do it right, once is enough. – Mae West",
    "In three words I can sum up everything I've learned about life: it goes on. – Robert Frost",
    "To live is the rarest thing in the world. Most people exist, that is all. – Oscar Wilde",
    "Good friends, good books, and a sleepy conscience: this is the ideal life. – Mark Twain",

  ]
function App() {
let [quote, setQuote] = useState('');
  const [loading, setLoading] = useState(false);

  const handleQuoteGenerate = async () => {
    try {
      setLoading(true);
      // const response = await axios.get(apiUrl);
      // console.log(response.data)
      const randomQuote = Math.floor(Math.random() * quotations.length);
      console.log(quotations[randomQuote]);
      setQuote(quotations[randomQuote]);
      console.log(quote);
    } catch (error) {
      console.error("Error fetching quotes:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Quote Generator</h1>
      <section className="quote-container">
        <p>{quote}</p>
      </section>
      <button className="default-btn" onClick={handleQuoteGenerate}>
        Give me a Quote
      </button>
    </div>
  );
};

export default App;
