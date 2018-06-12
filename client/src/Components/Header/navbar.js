import React, { Component } from 'react';
import {Navbar, NavItem} from 'react-materialize'


class NavBar extends Component {
    render(){
        return(

    <Navbar  right>
        <NavItem onClick={() => console.log('test click')}>Getting started</NavItem>
        <NavItem href='components.html'>Components</NavItem>
    </Navbar>


        );
    }
}

export default NavBar;