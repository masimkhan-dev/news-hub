import React from 'react';
import { NewsItem } from './NewsItem';

export const NewsBoard = ({ articles, loading, category, searchTerm, onSelectArticle }) => {
    return (
        <div className="container mt-4">
            <h2 className='text-center mb-4'>
    {searchTerm ? (
        `Search Results for "${searchTerm}"`
    ) : (
        <>
            Latest <span className="badge bg-dark">
                {category.charAt(0).toUpperCase() + category.slice(1)}
            </span> News
        </>
    )}
</h2>

            {loading ? (
                <div className="text-center">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            ) : (
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    {articles.map((article, index) => (
                        <div className="col" key={index}>
                            <NewsItem
                                article={article}
                                onSelect={onSelectArticle}
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
