import React from 'react';
import './Header.css';

function Header({isDarkMode}) {
  return (
      <header className={ isDarkMode ? "darkmode" : "bg-header"}>
        <div>
            <h4 className="title-header">
                My Projects
            </h4>
        </div>
      </header>
  );
}

export default Header;
