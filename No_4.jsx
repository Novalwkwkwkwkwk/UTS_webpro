import React, { useState } from 'react';

const HomePage = () => (
  <div>
    <h1>Welcome to the Home Page</h1>
  </div>
);

const AboutPage = () => (
  <div>
    <h1>This is the About Page</h1>
  </div>
);

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <nav>
        <button onClick={() => handleNavigation('home')}>Home</button>
        <button onClick={() => handleNavigation('about')}>About</button>
      </nav>

      {currentPage === 'home' ? <HomePage /> : <AboutPage />}
    </div>
  );
};

export default App;