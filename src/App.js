import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.component';
import MapPage from './pages/map/map.component';
import AboutPage from './pages/about/about.component';
import './App.css';

// npm install react-particles-js
import Particles from 'react-particles-js';
import 'tachyons';
import 'font-awesome/css/font-awesome.min.css';


//Working with the background
const particleOptions = {
  particles: {
    number:{
      value:100,
      density:{
        enable:true,
        value_area: 500
      }
    },
    color:{
      value: "#AA8939"
    },
    line_linked:{
      enable: true,
      color: "#AA8939"
    }
  },
  interactivity:{
    detect_on: "window",
    events:{
      onhover:{
        enable: true,
        mode: 'repulse'
      }
    }

  }
}

function App() {
  return (
    <div>
      <Particles className='particles' params={particleOptions}/>
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
