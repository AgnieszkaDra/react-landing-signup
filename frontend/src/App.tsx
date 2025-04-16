import { useState } from 'react';
import './App.css';
import '../src/styles/globals.scss'
import Header from './components/Header';
import Main from './components/Main';
import LoginForm from './components/Form/LoginForm';
import AuthWrapper from './components/Form/AuthWrapper';
import Panel from './components/Panel';

function App() {
  const [form, setForm] = useState(<LoginForm className='main__form'/>);
  
  return (
    <>
      <Header />
      <Main>
        <Panel className='main__panel'/>
        {form}
        {/* <AuthWrapper changeForm={setForm} />  optional to change setForm*/}
      </Main>
    </>
  );
}

export default App;