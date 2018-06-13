import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Header/navbar';
import Footer from './Components/Footer/FooterLink/footer';

class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
      <div className='turd'>
    <div>  
    <Navbar />
    </div>
    <div>
       <Footer />
    </div>   
    </div>
    );
  }
}

export default App;
