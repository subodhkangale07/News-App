import React from 'react';
import './ArticleList.css';

const ArticleList = ({ articles, onArticleSelect }) => {
  return (
    <div className="article-list">
      {articles.map((article) => (
        <div key={article.url} className="article">
          <img src={article.image || 'placeholder_image_url'} alt={article.title} onError={(e) => e.target.src = 'placeholder_image_url'} />
          <div className="article-content">
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer" className="read-more">
              Read More
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArticleList;
