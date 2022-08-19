import 'react-calendar-heatmap/dist/styles.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import Profile from './Components/Profile'
import Repo from './Components/Repo'
import Header from './Components/Header'
import Grid from './Components/Grid';
import Footer from './Components/Footer'
import {ThemeProvider} from 'styled-components'
import { ThemeName, themes } from './styles/themes';

function App() {
const [themeName,setThemeName] = useState<ThemeName>('dark');
const currentTheme = themes[themeName]
console.log("APP " + themeName)
  return (    
    <ThemeProvider theme={currentTheme}>
    <BrowserRouter> 
    <Header themeName={themeName} setThemeName={setThemeName} />
    <Routes>
      <Route path='/' element={<Profile/>}/>
      <Route path='/:username' element={<Profile/>}/>
      <Route path='/:username/:repo' element={<Repo/>}/>
      <Route path='/grid' element={<Grid/>}/>
      </Routes> 
      <Footer/>
    <GlobalStyles/>
    </BrowserRouter>
   </ThemeProvider>
    
  );
}

export default App;
