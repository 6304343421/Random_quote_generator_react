import React, { useState } from 'react';
import axios from 'axios';
import {
  Box,
  Container,
  Typography,
  Button,
  CircularProgress,
  Paper,
} from '@mui/material';

const apiUrl = "http://localhost:5000/api/quotes";

function App() {
  const [quote, setQuote] = useState({
    text: 'Please click the button to get a quote!',
    author: ''
  });
  const [loading, setLoading] = useState(false);

  const handleQuoteGenerate = async () => {
    try {
      setLoading(true);
      const response = await axios.get(apiUrl);
      const randomQuote = response.data[Math.floor(Math.random() * response.data.length)];
      setQuote(randomQuote);
    } catch (error) {
      console.error("Error fetching quotes:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundImage: 'url(https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1000&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        py: 6,
      }}
    >
      <Container maxWidth="sm">
        {/* Title */}
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{
            fontFamily: '"Playfair Display", serif',
            color: 'white',
            textShadow: '2px 2px 4px rgba(14, 13, 13, 0.75)',
            mb: 4,
          }}
        >
          Random Quote Generator
        </Typography>

        <Paper elevation={5} sx={{ overflow: 'hidden', borderRadius: 3 }}>
          {/* Quote Area */}
          <Box
            sx={{
              position: 'relative',
              height: 350,
              backgroundColor: 'rgba(248, 193, 64, 0.6)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              px: 3,
              textAlign: 'center',
            }}
          >
            {/* Decorative Image */}
            <Box sx={{ zIndex: 2, mb: 2 }}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png"
                alt="quote-icon"
                width={60}
                style={{ opacity: 0.8 }}
              />
            </Box>

            <Box sx={{ zIndex: 2 }}>
              {loading ? (
                <CircularProgress sx={{ color: 'white' }} />
              ) : (
                <>
                  <Typography variant="h6" sx={{ fontStyle: 'italic' }}>
                    "{quote.text}"
                  </Typography>
                  {quote.author && (
                    <Typography variant="subtitle1" sx={{ mt: 1 }}>
                      — {quote.author}
                    </Typography>
                  )}
                </>
              )}
            </Box>
          </Box>

          {/* Button */}
          <Box sx={{ p: 3, textAlign: 'center' }}>
            <Button
              variant="contained"
              onClick={handleQuoteGenerate}
              disabled={loading}  // Disable button when loading
            >
              Give me a Quote
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}

export default App;
