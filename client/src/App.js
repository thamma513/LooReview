import React, { Component } from 'react';
import {Row, Col, Preloader} from 'react-materialize';
// import logo from './logo.svg';
import { getFromStorage, setInStorage } from './utils/storage';
import './App.css';
import Navibar from './Components/Header/navbar';
import Footer from './Components/Footer/FooterLink/footer';
import HomePage from './Components/Home/homePage'
// import MapG from './Components/Map/GoogleMap/map';
// import CollapsibleSearchBar from './Components/Collapsible/SearchBar';


class App extends Component {
  constructor(){
    super();
    this.state = {
      verifyLoading: false,
      searchTerms: '',
      searchResponse: {},
      isLoggedIn: false
    };

  }
  
  componentWillMount() {
    const session = getFromStorage('user_session')
    if(session && session.token){
      fetch('/account/verify?token=' + session.token, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => {
          if(res.success){
            this.setState({
              isLoggedIn: true
            });
          } else {
            console.log(res.message);
          }
        })
    }

  }

  render() {
    return (
      <div className="page clearfix">
        <Navibar loggedIn={this.isLoggedIn}/>
          <HomePage />
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;

