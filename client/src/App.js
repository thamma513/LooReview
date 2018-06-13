import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Navibar from './Components/Header/navbar';
// import PropTypes from 'prop-types'; 
import SignUpForm from './Components/Tyler-test/SignUpForm';
import _Modal from './Components/Modal/modal';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Navibar />
        <SignUpForm />
        <_Modal />
      </div>
    );
  }
}

export default App;
