import './App.css';
import { Route,Routes } from "react-router-dom"
import EmailPage from './components/RegisterPages/EmailPage';
import RegisterPage from './components/RegisterPages/RegisterPage';
import StartPage from './components/StartPage/StartPage';
import HomePage from './components/HomePage/HomePage';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<StartPage/>}/>
        <Route path="/email" element={<EmailPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/home" element={<HomePage/>}/>            
      </Routes>
    </div>
  );
}

export default App;
