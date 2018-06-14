import React, { Component } from 'react';
import {Row, Col} from 'react-materialize';
// import logo from './logo.svg';
import './App.css';
import Navibar from './Components/Header/navbar';
import Footer from './Components/Footer/FooterLink/footer';
import MapG from './Components/Map/GoogleMap/map';
import CollapsibleSearchBar from './Components/Collapsible/SearchBar';


class App extends Component {
  render() {
    return (
      <div className="page clearfix">
        <Navibar />
        <CollapsibleSearchBar />
        <Row className="clearfix">
          <Col className="looInfo" s={3}>
            <div>
              Info
            </div>
          </Col>
          <Col  className="looMap" s={8}>
            <div className="googleMap">
              <MapG />
            </div>
          </Col>
        </Row>
        <Footer />
      </div>
    );
  }
}

export default App;

