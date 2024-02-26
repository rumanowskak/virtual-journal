import React from 'react';
import './App.css';
import EmailPage from './components/RegisterPages/EmailPage';
import RegisterPage from './components/RegisterPages/RegisterPage';
import StartPage from './components/StartPage/StartPage';

function App() {
  return (
    <div className="app">
      <StartPage/>
      {/* <EmailPage/> */}
      {/* <RegisterPage/> */}
    </div>
  );
}

export default App;
