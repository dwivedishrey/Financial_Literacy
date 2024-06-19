import React, { useState, useEffect } from 'react';
import './News.css';
import Header from '../components/Header';
import NewsBox from './Newsbox';

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
      <div className="loading-container">
        <div className="loader"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <h5 className="error-message">{error}</h5>
      </div>
    );
  }

  return (
    <div>
    <div className="news-container">
      <div className="news-header">
        <h2 style={{color:"black"}} className="news-title">Financial News</h2>
        <hr className="header-line" />
      </div>
      <div className="news-grid">
        {articles.length > 0 ? articles.map((article, index) => (
          <div key={index} className="news-item">
            <NewsBox
              image={article.urlToImage}
              title={article.title}
              description={article.description}
              link={article.url}
            />
          </div>
        )) : (
          <h5 className="no-articles">No articles found</h5>
        )}
      </div>
    </div>
    </div>
  );
}

export default News;
