import React from 'react';

export const FullArticle = ({ article, onClose }) => {
    if (!article) return null;

    return (
        <div className="container mt-4">
            <button className="btn btn-primary mb-3" onClick={onClose}>
                <i className="fas fa-arrow-left me-2"></i>Back to News
            </button>
            <h1 className="mb-3">{article.title}</h1>
            {article.urlToImage && (
                <img 
                    src={article.urlToImage} 
                    alt={article.title} 
                    className="img-fluid mb-3"
                    style={{ maxHeight: '400px', width: '100%', objectFit: 'cover' }}
                />
            )}
            <p className="lead">{article.description}</p>
            <p>{article.content || "Full content not available. Please visit the original source for more information."}</p>
            <p>
                <strong>Source: </strong> 
                {article.source?.name || "Unknown"}
            </p>
            <p>
                <strong>Published at: </strong> 
                {new Date(article.publishedAt).toLocaleString()}
            </p>
            <a href={article.url} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                Read Original Article
            </a>
        </div>
    );
};