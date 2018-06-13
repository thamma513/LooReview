import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Navibar from './Components/Header/navbar';
// import PropTypes from 'prop-types'; 
import ModalLoo from './Components/Modal/modal';
import Footer from './Components/Footer/FooterLink/footer';

class App extends Component {
  render() {
    return (
      <div className="page">
        <Navibar />
        <ModalLoo />
        <Footer />
      </div>
    );
  }
}

export default App;
