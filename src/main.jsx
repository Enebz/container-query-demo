import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './index.css';

import Home from './pages/Home';
import Demo from './pages/Demo';
import NotFound from './pages/NotFound';

import Header from './structure/Header';
import Body from './structure/Body';
import Footer from './structure/Footer';

const supportsContainerQueries = "container" in document.documentElement.style;
if (!supportsContainerQueries) {
  import("container-query-polyfill");
}

function App() {
  return (
    <BrowserRouter>
      <div className='wrapper'>
        <Header />
        <div className='scrollable-wrapper'>
          <Body>
            <Routes>
              <Route path='/'>
                <Route index element={ <Home /> } />
                <Route path='demo'>
                  <Route index element={ <Demo /> } />
                </Route>
                <Route path='*' element={<NotFound />} />
              </Route>
            </Routes>
          </Body>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  )
}

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
