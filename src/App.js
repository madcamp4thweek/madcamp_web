import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Main from './page/Main';
import Intro from './page/Intro';
import Exp from './page/Exp';
import Faq from './page/Notice';
import Apply from './page/Apply';
import Notice from './page/Notice';
import Navbar from './component/Navbar';

import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path='/' component = {Main}/>
          <Route exact path='/intro' component = {Intro}/>
          <Route exact path='/exp' component = {Exp}/>
          <Route exact path='/faq' component = {Faq}/>
          <Route exact path='/notice' component = {Notice}/>
          <Route exact path='/apply' component = {Apply}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
