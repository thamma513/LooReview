import React, { Component } from 'react';
import {Row, Col} from 'react-materialize';
// import logo from './logo.svg';
import './App.css';
import Navibar from './Components/Header/navbar';
// import PropTypes from 'prop-types'; 
import ModalLoo from './Components/Modal/modal';
import Footer from './Components/Footer/FooterLink/footer';
import MapG from './Components/Map/GoogleMap/map';


class App extends Component {
  render() {
    return (
      <div className="page">
        <Navibar />
        <ModalLoo />
        <Footer />
        <Row>
          <Col className="looInfo" s={6}>
            <div>
              Infoffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            </div>
          </Col>
          <Col  className="looMap" s={6}>
            <div>
              <MapG />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;

