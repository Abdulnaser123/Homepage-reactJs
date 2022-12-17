import React from 'react';
import Homepage from './pages/Homepage';
import Apparels from './pages/Apparels';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Login from './login/login';
import Logout from './logout';
import {Context} from './cartContext';
import {useState} from 'react';

function Router() {
  const cart = [];
  const handleClick = (item) => {
    cart.push(item);
    console.log(item.id);
  };
  return (
    <div>
      <Context.Provider value={[cart, handleClick]}>
        <BrowserRouter>
          <Header />
          <Routes>
            {localStorage.password && <Route index element={<Homepage />} />}{' '}
            {localStorage.password && (
              <Route path="/Apparels" element={<Apparels />} />
            )}
            <Route path="/login-page" element={<Login />} />
            <Route path="/logout-page" element={<Logout />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}

export default Router;
