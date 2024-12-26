import React from 'react';

export const NewsItem = ({ article, onSelect }) => {
    const { title, description, urlToImage, url } = article;

    return (
        <div className="card h-100 shadow-sm border-0" style={{ transition: 'transform 0.3s ease', cursor: 'pointer' }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
            <div className="position-relative">
                <img
                    src={urlToImage || 'https://via.placeholder.com/345x180?text=No+Image+Available'}
                    className="card-img-top"
                    alt={title || 'News Image'}
                    onError={(e) => e.target.src = 'https://via.placeholder.com/345x180?text=Image+Not+Available'}
                    style={{ height: '200px', objectFit: 'cover', borderTopLeftRadius: '8px', borderTopRightRadius: '8px' }}
                />
                <div className="position-absolute top-0 end-0 text-white px-2 py-1 m-2 rounded-pill" style={{ backgroundColor: '#0C1728' }}>
                    News
                </div>
            </div>
            <div className="card-body d-flex flex-column p-3" style={{ backgroundColor: '#F5F5F7', borderBottomLeftRadius: '8px', borderBottomRightRadius: '8px' }}>
                <h5 className="card-title text-truncate" style={{ fontWeight: 'bold', color: '#333' }}>
                    {title || 'No Title'}
                </h5>
                <p className="card-text flex-grow-1" style={{ color: '#555', height: '4.5em', overflow: 'hidden' }}>
                    {description || 'No Description'}
                </p>
                <button 
                    onClick={() => onSelect(article)} 
                    className="btn mt-auto text-white" 
                    style={{ backgroundColor: '#481449', boxShadow: '0px 0px 4px rgba(0,0,0,0.2)', transition: 'background-color 0.2s ease' }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#6E185D'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = '#481449'}>
                    Read More
                </button>
            </div>
        </div>
    );
};
