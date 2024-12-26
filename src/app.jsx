import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { NewsBoard } from './components/NewsBoard';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { FullArticle } from './components/FullArticle';

function App() {
  const [category, setCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [showHome, setShowHome] = useState(true);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);

  useEffect(() => {
    if (category || searchTerm) {
      fetchNews();
    }
  }, [category, searchTerm]);

  const fetchNews = async () => {
    setLoading(true);
    try {
      let url;
      if (searchTerm) {
        url = `https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=${import.meta.env.VITE_API_KEY}`;
      } else {
        url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
      }
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setArticles(data.articles);
    } catch (error) {
      console.error('Fetch error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    setSearchTerm('');
    setShowHome(false);
    setSelectedArticle(null);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    setCategory('');
    setShowHome(false);
    setSelectedArticle(null);
  };

  const handleHome = () => {
    setShowHome(true);
    setCategory('');
    setSearchTerm('');
    setSelectedArticle(null);
  };

  const handleGetStarted = () => {
    setCategory('general');
    setShowHome(false);
  };

  const handleSelectArticle = (article) => {
    setSelectedArticle(article);
  };

  const handleCloseArticle = () => {
    setSelectedArticle(null);
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar 
        onCategoryChange={handleCategoryChange} 
        activeCategory={category} 
        onSearch={handleSearch}
        onHome={handleHome}
      />
      <main className="flex-grow-1">
        {showHome ? (
          <Home onGetStarted={handleGetStarted} />
        ) : selectedArticle ? (
          <FullArticle article={selectedArticle} onClose={handleCloseArticle} />
        ) : (
          <NewsBoard 
            articles={articles} 
            loading={loading}
            category={category} 
            searchTerm={searchTerm}
            onSelectArticle={handleSelectArticle}
          />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;