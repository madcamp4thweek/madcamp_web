import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Main from './page/Main';
import Intro from './page/Intro.js';
import Exp from './page/Exp';
import FAQ from './page/Faq.js';
import Apply from './page/Apply';
import Notice from './page/Notice';
import Navbar from './component/Navbar';

import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
        {/* <div className='main_structure'> */}
        <Navbar/>
        <Routes>
          <Route exact path='/' element = {<Main />}/>
          <Route exact path='/intro' element = {<Intro />} />
          <Route exact path='/exp' element = {<Exp />} />

          <Route exact path='/faq' element = {<Faq />} />
          <Route  exact path='/notice/*' element = {<Notice/>}/>
          <Route exact path='/apply' element = {<Apply/>}/>
        </Routes>
        {/* </div> */}
      </Router>
      
    </div>
  );
}

export default App;
