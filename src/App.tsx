import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import SEO from './components/SEO';
import Home from './pages/Home';
import Books from './pages/Books';
import About from './pages/About';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import { books } from './data/books';
import { pageMeta, generateStructuredData } from './utils/seo';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [scrollTrigger, setScrollTrigger] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const bookData = currentPage === 'books' ? books.filter(b => b.available) : undefined;
    const structuredData = generateStructuredData(currentPage, bookData);
    let script = document.getElementById('structured-data');

    if (!script) {
      script = document.createElement('script');
      script.id = 'structured-data';
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }

    script.textContent = JSON.stringify(structuredData);
  }, [currentPage, scrollTrigger]);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    setScrollTrigger(prev => prev + 1);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home books={books} onNavigate={handleNavigate} />;
      case 'books':
        return <Books books={books} />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      case 'privacy':
        return <Privacy />;
      case 'terms':
        return <Terms />;
      default:
        return <Home books={books} onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO meta={pageMeta[currentPage]} />
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
