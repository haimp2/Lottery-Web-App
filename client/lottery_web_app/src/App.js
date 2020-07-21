import React from 'react';
import './App.css'
import LoginPage from './pages/login-page/login-page.component.jsx';
import MainPage from './pages/main-page/main-page.component.jsx';


function App() {

  let name = localStorage.getItem('name');
  let lgClass = 'gone';
  let mpClass = '';
  if(name === null){
    lgClass = '';
    mpClass = 'gone';
  }

  return (
    <div className="App">
      <LoginPage display = {lgClass}/>
      <MainPage display = {mpClass} />
      
    </div>
  );
}

export default App;
