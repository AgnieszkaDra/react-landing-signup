import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import { Header, LoginForm, Main, Panel, RegisterForm } from './components';
import './App.css';
import '../src/styles/index.scss';
import { useState } from 'react';

function App() {
  const { isLoggedIn } = useAuth();
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="container">
      <Header />
      <Main>
        <Panel className="main__panel" />
        {isSignUp ? (
          <RegisterForm className="main__form" />
        ) : (
          <LoginForm className="main__form" setIsSignUp={setIsSignUp} />
        )}
      </Main>
      {isLoggedIn && <Navigate to="/pricing" />}
    </div>
  );
}

export default App;