import React, { Component } from 'react';
import {Row, Col, Preloader} from 'react-materialize';
// import logo from './logo.svg';
import Navibar from './Components/Header/navbar';

// import HomePage from './Components/Home/homePage'
import MapG from './Components/Map/GoogleMap/map';
import CollapsibleSearchBar from './Components/Collapsible/SearchBar';

class MapPage extends Component {

  render(){

    return (
      
      <CollapsibleSearchBar />
      <Row className="clearfix">
        <Col className="looInfo" s={3}>
          <div>
          <Col m={6} s={12}>
          <Card className='blue-grey darken-1' textClassName='white-text' title='Card title'>
          {/* <MapArray/> */}
          </Card>
          
          </Col>
          </div>
        </Col>
        <Col  className="looMap" s={8}>
          <div className="googleMap">
            <MapG />
        
          </div>
        </Col>
      </Row>

    );
  }

}
