import React, { Component } from 'react';
import FirstDivision from './header/firstdiv';
import Footer from './footer/footer';
import HyperLinks from './header/hyperlinks';
import './App.css';
import SocialLinks from './header/social';

class App extends Component {
  render() {
    return (
      <div>
      <HyperLinks/>
      <FirstDivision/>
      <SocialLinks/>
      <Footer/>
      </div>
    );
  }
}

export default App;
