import React, { useState } from 'react';
import Header from './layout/Header';
import Content from './layout/Content';
import Footer from './layout/Footer';
import "./App.css";
import ButtonToggleDarkMode from './components/ButtonToggleDarkMode';
import ButtonShowTemperature from './components/ButtonShowTemperature';
import ButtonFilterProject from './components/ButtonFilterProject';

function App() {
  const [isDarkMode , setIsDarkMode] = useState(false);
  const [filter , setFilter] = useState({
    state:-1, // -1 : all , 0 : handmake , 1 : clone
    techid:-1,  // -1:all , 0:ASP.Net , 1:ReactJS , 2:NodeJS
    favorite:false
  });

  const setIsDarkModeFunc = () => setIsDarkMode(!isDarkMode);

  return (
    <div className={ isDarkMode ? "darkmode-app" : "app" }>
      <Header isDarkMode={ isDarkMode }></Header>
      <Content filter={ filter } setFilter={ setFilter }></Content>
      <Footer isDarkMode={ isDarkMode }></Footer>
      <ButtonToggleDarkMode setIsDarkModeFunc={ setIsDarkModeFunc } isDarkMode={ isDarkMode }></ButtonToggleDarkMode>
      <ButtonShowTemperature></ButtonShowTemperature>
      <ButtonFilterProject setFilter={ setFilter } filter={ filter }></ButtonFilterProject>
    </div>
  );
}

export default App;
