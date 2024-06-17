import React, { useState, useEffect } from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';
import NewsBox from './Newsbox'; // Adjust the path as necessary
import './News.css';
import Header from '../components/Header';

function News() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchNews() {
      try {
        let response = await fetch(
          'https://newsapi.org/v2/everything?q=financial&pageSize=30&apiKey=f73ced8d863347dc9f4dfc6deef5f863'
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        let result = await response.json();
        if (result.articles) {
          // Filter out articles without necessary data
          const validArticles = result.articles.filter(article => 
            article.urlToImage && article.title && article.description
          );
          setArticles(validArticles);
        } else {
          setError('No articles found in the response.');
        }
      } catch (error) {
        setError(`Fetch error: ${error.message}`);
      } finally {
        setLoading(false);
      }
    }

    fetchNews();
  }, []);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <Typography variant="h5" color="error">{error}</Typography>
      </Box>
    );
  }

  return (
    <Box m="20px">
      <Box alignItems="center" mb="20px">
      <h2 style={{color:"black",fontWeight:"900"}}>Financial News</h2>
            <hr style={{ color: "black", backgroundColor: "black", height: "2px", border: "none" }} />
      </Box>
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {articles.length > 0 ? articles.map((article, index) => (
          <Box
            key={index}
            gridColumn="span 4"
            gridRow="span 2"
            backgroundColor="white"
            p="20px"
            borderRadius="10px"
          >
            <NewsBox
              image={article.urlToImage}
              title={article.title}
              description={article.description}
              link={article.url}
            />
          </Box>
        )) : (
          <Typography variant="h5">No articles found</Typography>
        )}
      </Box>
    </Box>
  );
}

export default News;
