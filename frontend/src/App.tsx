import { useState } from 'react';
import { Header, Main, Panel, LoginForm } from './components';
import { useAuth } from './context/AuthContext';
import { Navigate } from 'react-router-dom';
import './App.css';
import '../src/styles/index.scss'

function App() {
  const [form] = useState(<LoginForm className='main__form' />);
  const { isLoggedIn } = useAuth();
 
  return (
    <>
      <Header />
      <Main>
        <Panel className='main__panel'/>
        {form}
      </Main>
      {isLoggedIn ? <Navigate to="/pricing" /> : '' }
    </>
  );
}

export default App;