import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';

import Home from './Components/Home/Home';
import SearchResults from './Components/SearchResults/SearchResults';
import MediaDetails from './Components/MediaDetails/MediaDetails';



function App() {
  return (
    <div>
      <MediaDetails />
    </div>
  );
}

export default App;
