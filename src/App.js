import React, { useState } from 'react';
import Header from './layout/Header';
import Content from './layout/Content';
import Footer from './layout/Footer';
import "./App.css";
import ButtonToggleDarkMode from './components/ButtonToggleDarkMode';

function App() {
  const [isDarkMode , setIsDarkMode] = useState(false);

  const setIsDarkModeFunc = () => setIsDarkMode(!isDarkMode);

  return (
    <div className={ isDarkMode ? "darkmode-app" : "app" }>
      <Header isDarkMode={ isDarkMode }></Header>
      <Content isDarkMode={ isDarkMode }></Content>
      <Footer isDarkMode={ isDarkMode }></Footer>
      <ButtonToggleDarkMode setIsDarkModeFunc={ setIsDarkModeFunc } isDarkMode={ isDarkMode }></ButtonToggleDarkMode>
    </div>
  );
}

export default App;
