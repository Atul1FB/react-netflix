import React from 'react';
import './App.scss';

import Header from "./newcomponents/Header"; 
import HomeBanner from './newcomponents/HomeBanner';
import Login from './newcomponents/Login';
import Banner from './newcomponents/Banner';
import List from './newcomponents/List';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';


const AppRoutes = () => {
  const location = useLocation();
  const hideHeader = location.pathname === '/login';

  return (
    <>
      {!hideHeader && <Header />}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <HomeBanner />
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <Login page= {true}  />
            </>
          }
        />
        <Route
          path="/register"
          element={
            <>
            <Login page={false} />
            </>
          }
        />
        <Route
          path="/dashboard"
          element={
            <>
              <Banner />
              <List title ="Netflix Origanals" />
              <List title ="Trending Now" />
            </>
          }
        />
      </Routes>
    </>
  );
};


function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}


export default App;
