import React from 'react';
import './ButtonToggleDarkMode.css';

function ButtonToggleDarkMode({setIsDarkModeFunc , isDarkMode }) {
    return (
        <div onClick={ setIsDarkModeFunc } className={
            isDarkMode ? "darkmode-button bg-footer" : "darkmode-button darkmode"
        }>
            { isDarkMode ? (<i class="fas fa-sun"></i>) :(<i class="fas fa-moon"></i>) }      
        </div>     
    );
}

export default ButtonToggleDarkMode;
