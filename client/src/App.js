import React, { Component } from 'react';
<<<<<<< HEAD
import {Row, Col} from 'react-materialize';
// import logo from './logo.svg';
=======
>>>>>>> 441bf3fa27916acd289c0654d44a7cda59428a06
import './App.css';
import Navibar from './Components/Header/navbar';
import ModalLoo from './Components/Modal/modal';
import Footer from './Components/Footer/FooterLink/footer';
import MapG from './Components/Map/GoogleMap/map';
<<<<<<< HEAD
=======
import CollapsibleSearchBar from './Components/Collapsible/SearchBar';
>>>>>>> 441bf3fa27916acd289c0654d44a7cda59428a06


class App extends Component {
  render() {
    return (
      <div className="page">
        <Navibar />
        <CollapsibleSearchBar />
        <ModalLoo />
        <Footer />
<<<<<<< HEAD
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
=======
        <MapG />
>>>>>>> 441bf3fa27916acd289c0654d44a7cda59428a06
      </div>
    );
  }
}

export default App;

