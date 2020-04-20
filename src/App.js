import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.component';
import MapPage from './pages/map/map.component';
import AboutPage from './pages/about/about.component';

import './App.css';



function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/map' component={MapPage} />
        <Route exact path='/about' component={AboutPage} />
      </Switch>
    </div>
  );
}

export default App;
