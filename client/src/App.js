import React, { Component } from 'react';
import {Card, Row, Col} from 'react-materialize';
// import logo from './logo.svg';
import './App.css';
import Navibar from './Components/Header/navbar';
import Footer from './Components/Footer/FooterLink/footer';
import MapG from './Components/Map/GoogleMap/map';
import CollapsibleSearchBar from './Components/Collapsible/SearchBar';


class App extends Component {
  render() {
    return (
      <div className="page">
        <Navibar />
        <CollapsibleSearchBar />
        <Footer />
        <Row>
          <Col className="looInfo" s={6}>
            <div>
            <Col m={6} s={12}>
            <Card className='blue-grey darken-1' textClassName='white-text' title='Card title'>
            </Card>
            </Col>
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

