import { useState } from 'react';
import './App.css';
import '../src/styles/index.scss'
import Header from './components/Header';
import Main from './components/Main';
import LoginForm from './components/Form/LoginForm';
import AuthWrapper from './components/Form/AuthWrapper';
import Panel from './components/Panel';
import { Toaster } from 'react-hot-toast';


function App() {
  const [form, setForm] = useState(<LoginForm className='main__form'/>);
  
  return (
    <>
 {/* <Toaster position="top-right" toastOptions={{ duration: 3000 }} >
 {() => null} */}
      <Header />
      <Main>
        <Panel className='main__panel'/>
        {form}
        {/* <AuthWrapper changeForm={setForm} />  optional to change setForm*/}
      </Main>
{/* </></Toaster> */}
    </>
  );
}

export default App;