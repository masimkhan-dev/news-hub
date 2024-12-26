import React from 'react';

export const Home = ({ onGetStarted }) => {
    return (
        <div className="jumbotron text-white text-center py-5" style="background-color: #383D76;">
            <h1 className="display-4">Welcome to News Hub</h1>
            <p className="lead">Stay informed with the latest news from around the world.</p>
          
            <p>Explore top headlines or search for specific topics.</p>
            <button className="btn btn-light btn-lg" onClick={onGetStarted}>
                Get Started
            </button>
        </div>
    );
};