import React from 'react';
import './Header.css';

function Header({isDarkMode}) {
  return (
      <header className={ isDarkMode ? "darkmode" : "bg-header"}>
        <div>
            <h4 className="title-header">
                Những dự án cá nhân của Pơ Híp 
            </h4>
        </div>
      </header>
  );
}

export default Header;
