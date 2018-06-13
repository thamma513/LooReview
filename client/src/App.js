import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Navibar from './Components/Header/navbar';
// import PropTypes from 'prop-types'; 
import ModalLoo from './Components/Modal/modal';
import Footer from './Components/Footer/FooterLink/footer';
import Map from './Components/Map/GoogleMap/map';


class App extends Component {
  render() {
    return (
      <div className="page">
        <Navibar />
        <ModalLoo />
        <Footer />
        <Map />
      </div>
    );
  }
}

export default App;

