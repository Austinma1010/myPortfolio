import { useState } from 'react';
import NavBar from './navbar';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';
import Footer from './Footer';
export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

 
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Work') {
      return <Work />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
      <main className="mx-3">{renderPage()}</main>
      <Footer/>
    </div>
  );
}