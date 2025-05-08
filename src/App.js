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
const apiUrl='http://127.0.0.1:8000/api/quotes';

function App() {
  const [quote, setQuote] = useState({
    name: 'Please click the button to get a quote!'
  });
  const [loading, setLoading] = useState(false);

  const handleQuoteGenerate = async () => {
    try {
      setLoading(true);
      const response = await axios.get(apiUrl);
      console.log(response.data)
      const randomQuote = response.data[Math.floor(Math.random() * response.data.length)];
      setQuote(randomQuote);
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
        <p>{quote.name}</p>
      </section>
      <button className="default-btn" onClick={handleQuoteGenerate}>
        Give me a Quote
      </button>
    </div>
  );
};

export default App;
