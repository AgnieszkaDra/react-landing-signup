import React, { useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import { Header, Main, Panel, RegisterForm, LoginForm } from './components';
import './App.css';
import '../src/styles/index.scss';

function App() {
  const { isLoggedIn } = useAuth();

  return (
    <div className="container">
      <Header />
      <Main>
        <Panel className="main__panel" />
        <Outlet />
      </Main>
      {isLoggedIn && <Navigate to="/pricing" />}
    </div>
  );
}

export default App;