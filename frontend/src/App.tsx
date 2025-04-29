import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import { Header, Main, Panel } from './components';
import '../src/styles/index.scss';

function App() {
  const { isRegistered } = useAuth();

  return (
    <div className="container">
      <Header />
      <Main>
        <Panel className="main__panel" />
        <Outlet />
      </Main>
      {isRegistered && <Navigate to="/pricing" />}
    </div>
  );
}

export default App;