import React, { useState} from 'react';
import HomeContainer from './containers/homeContainer';
import HeaderConatiner from './shared/containers/headerContainer';
import FooterContainer from './shared/containers/footerContainer';
import Error404 from './components/error404.js';

import {
  Box,
  CssBaseline,
  // ThemeProvider,
} from '@mui/material';
// import theme from './shared/assets/theme';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


const App = () => {
  return (
        <Router>
          <CssBaseline />
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <HeaderConatiner />
                    <HomeContainer />
                    <FooterContainer />
                  </>
                }
              />
              <Route
                path="*"
                element={
                  <Error404 />
                }
              />
            </Routes>
        </Router>
  )
}

export default App

