import React, { useState } from 'react';

export const Navbar = ({ onCategoryChange, activeCategory, onSearch, onHome }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const categories = ['general', 'business', 'technology', 'sports', 'entertainment', 'health'];

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(searchTerm);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark " style="position: sticky;
  top: 0; z-index: 1000;"> 
            <div className="container-fluid">
                <a className="navbar-brand" href="#" onClick={onHome}>
                    <i className="fas fa-newspaper fa-lg me-2"></i>
                    News Hub
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <i className="fas fa-bars text-light"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto d-flex flex-row mt-3 mt-lg-0">
                        <li className="nav-item text-center mx-2 mx-lg-1">
                            <a className={`nav-link ${activeCategory === 'general' ? 'active' : ''}`} 
                               href="#" onClick={() => onCategoryChange('general')}>
                                <div>
                                    <i className="fas fa-home fa-lg mb-1"></i>
                                </div>
                                Home
                            </a>
                        </li>
                        {categories.filter(cat => cat !== 'general').map((category) => (
                            <li key={category} className="nav-item text-center mx-2 mx-lg-1">
                                <a className={`nav-link ${activeCategory === category ? 'active' : ''}`}
                                   href="#" onClick={() => onCategoryChange(category)}>
                                    <div>
                                        <i className={`fas fa-${getCategoryIcon(category)} fa-lg mb-1`}></i>
                                    </div>
                                    {category.charAt(0).toUpperCase() + category.slice(1)}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <form className="d-flex input-group w-auto ms-lg-3 my-3 my-lg-0" onSubmit={handleSubmit}>
                        <input 
                            type="search" 
                            className="form-control" 
                            placeholder="Search" 
                            aria-label="Search" 
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button className="btn " style="background-color: #481449; " type="submit" data-mdb-ripple-color="dark">
                            <i className="fas fa-search text-white" ></i>
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    );
};

// Helper function to get appropriate icon for each category
function getCategoryIcon(category) {
    switch(category) {
        case 'business': return 'briefcase';
        case 'technology': return 'microchip';
        case 'sports': return 'futbol';
        case 'entertainment': return 'film';
        case 'health': return 'heartbeat';
        default: return 'newspaper';
    }
}