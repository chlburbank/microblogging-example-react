import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Route } from 'react-router-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

import Signin from './components/Signin';
import Signup from './components/Signup';
import Home from './components/Home';
import HeaderApp from './components/HeaderApp';

const header = ReactDOM.createRoot(document.getElementById('header'));
const root = ReactDOM.createRoot(document.getElementById('root'));

header.render(<HeaderApp/>);
root.render(
 <HashRouter>
  <div>
    <Route  exact path="/" Component={Signin}/>
    <Route  path="/signup" Component={Signup}/>
    <Route  path="/home" Component={Home}/>
  </div>
 </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
