import React, { useState, useEffect } from 'react';
import './News.css';
import Header from '../components/Header';
import NewsBox from './Newsbox';
import quora from '../../../assets/news1.jpg'
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
  const style = {
    paddingTop: '30px',
    backgroundImage: `url(${quora})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize:'cover',
    backgroundAttachment:'fixed'
 
  };

  return (
    <div style={style} className="news-main-container">
    <div className="news-container">
      <div className="news-header">
      <h2 style={{color: "white", backgroundColor: "#1e3a8a", padding: "10px 20px", borderRadius: "8px", textAlign: "center", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", fontSize: "24px", fontWeight: "bold"}} className="news-title">Financial News</h2>

       
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
