import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import { AppProvider } from './context/AppContext';
import { AuthProvider } from './context/AuthContext';
import { Pricing } from './components';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppProvider>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/pricing" element={<Pricing />} />
          </Routes>
        </Router>
      </AuthProvider>
    </AppProvider>
  </StrictMode>
);