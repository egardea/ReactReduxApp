import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';

import Home from './Components/Home/Home'



function App() {
  return (
    <div>
      <Home />
    </div>
  );
}

export default App;
