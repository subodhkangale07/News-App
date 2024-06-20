import React from 'react';
import './ArticleDetail.css';

const ArticleDetail = ({ article, onClose }) => {
  return (
    <div className="article-detail">
      <button onClick={onClose}>Back</button>
      <h1>{article.title}</h1>
      <img src={article.urlToImage} alt={article.title} />
      <p>{article.content}</p>
    </div>
  );
};

export default ArticleDetail;
