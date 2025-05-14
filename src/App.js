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
     "The purpose of our lives is to be happy. – Dalai Lama",
    "Life is short, and it is up to you to make it sweet. – Sarah Louise Delany",
    "Life doesn't require that we be the best, only that we try our best. – H. Jackson Brown Jr.",
    "Turn your wounds into wisdom. – Oprah Winfrey",
    "The biggest adventure you can take is to live the life of your dreams. – Oprah Winfrey",
    "Life is about making an impact, not making an income. – Kevin Kruse",
    "Your time is limited, so don’t waste it living someone else’s life. – Steve Jobs",
    "Success is how high you bounce when you hit bottom. – George S. Patton",
    "Life is not measured by the number of breaths we take, but by the moments that take our breath away. – Maya Angelou",
    "Do not go where the path may lead, go instead where there is no path and leave a trail. – Ralph Waldo Emerson",
    "The good life is one inspired by love and guided by knowledge. – Bertrand Russell",
    "Act as if what you do makes a difference. It does. – William James",
    "Life is trying things to see if they work. – Ray Bradbury",
    "A life is not important except in the impact it has on other lives. – Jackie Robinson",
    "Don’t count the days, make the days count. – Muhammad Ali",
    "He who has a why to live can bear almost any how. – Friedrich Nietzsche"
  

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
