import 'modern-normalize/modern-normalize.css';
import './styles/fonts.scss';
import './styles/global.scss';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { AuthProvider } from './context/AuthContext';
import { LoginForm, Pricing, RegisterForm } from './components';
import App from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppProvider>
      <AuthProvider>
        <Router>
        <Routes>
  <Route path="/" element={<App />}>
    <Route index element={<LoginForm className="main__form" />} />
    <Route path="register" element={<RegisterForm className="main__form" />} />
  </Route>
  <Route path="/pricing" element={<Pricing />} />
</Routes>
        </Router>
      </AuthProvider>
    </AppProvider>
  </StrictMode>
);