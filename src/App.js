import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
//import ArticleDetail from './component/ArticleDetail';
import ArticleList from './component/ArticleList';
import Pagination from './component/Pagination';

const API_KEY = 'd207cdcfd48972b81075ab0a34a89a80'; // Replace with your GNews API key
const BASE_URL = 'https://gnews.io/api/v4/top-headlines';

function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [category, setCategory] = useState('');

  const fetchArticles = async (page = 1, category = '') => {
    setLoading(true);
    setError(false);
    try {
      const response = await axios.get(BASE_URL, {
        params: {
          token: API_KEY,
          lang: 'en',
          page: page,
          max: 10,
          topic: category,
        },
      });
      console.log('API Response:', response.data); // Log the response data
      setArticles(response.data.articles);
      setTotalResults(response.data.totalArticles);
    } catch (error) {
      console.error('Error fetching articles:', error);
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchArticles(currentPage, category);
  }, [currentPage, category]);

  return (
    <div className="App">
      <header>
        <h1>News Portal</h1>
        <div className="category-filter">
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">All</option>
            <option value="business">Business</option>
            <option value="technology">Technology</option>
            <option value="entertainment">Entertainment</option>
          </select>
        </div>
      </header>
      {loading && <p>Loading...</p>}
      {error && <p>Something went wrong. Please try again later.</p>}
      {!loading && !error && (
        <>
          <ArticleList articles={articles} />
          <Pagination
            currentPage={currentPage}
            totalResults={totalResults}
            onPageChange={setCurrentPage}
          />
        </>
      )}
    </div>
  );
}

export default App;
