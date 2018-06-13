import React, { Component } from 'react';
import './App.css';
import Navibar from './Components/Header/navbar';
import ModalLoo from './Components/Modal/modal';
import Footer from './Components/Footer/FooterLink/footer';
import MapG from './Components/Map/GoogleMap/map';
import CollapsibleSearchBar from './Components/Collapsible/SearchBar';


class App extends Component {
  render() {
    return (
      <div className="page">
        <Navibar />
        <CollapsibleSearchBar />
        <ModalLoo />
        <Footer />
        <MapG />
      </div>
    );
  }
}

export default App;

