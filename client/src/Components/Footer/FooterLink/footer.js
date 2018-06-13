import React, { Component } from 'react';
import {Footer,} from 'react-materialize'


class FooterLink extends Component {
    render(){
        return(

    <Footer copyrights="&copy 2015 Copyright Text"
  moreLinks={
    <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
  }>
</Footer>
        );
    }
}

export default FooterLink;

