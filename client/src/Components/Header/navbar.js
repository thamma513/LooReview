import React, { Component } from 'react';
import {Navbar, NavItem, Button, SideNav, SideNavItem} from 'react-materialize';
// import PropTypes from 'prop-types';
import './navbar.css';


class Navibar extends Component {

    render(){

        return(
            <div className='navBar'>
                <Navbar brand='LooReview' right>
                    <NavItem onClick={() => console.log('test click')}>Getting started</NavItem>
                    <NavItem>Sign Up</NavItem>
                    <NavItem style={{ marginTop: '5%' }}>
                    <SideNav
                        trigger={<Button className="sideNavButton">Test Button</Button>}
                        options={{ closeOnClick: true }}>
                        <SideNavItem userView
                            user={{
                            background: 'img/golden-toilet.jpg',
                            name: 'Walker Radez',
                            email: 'walkerradez@gmail.com'
                            }}/>
                        <SideNavItem href='#' icon='cloud'>My Account</SideNavItem>
                        <SideNavItem divider />
                        <SideNavItem href='#'>My Favorites</SideNavItem>
                        <SideNavItem divider />
                        <SideNavItem href='http://northwestdivest.org/img/toys-05-03-01.jpg'>Admin Panel</SideNavItem>
                    </SideNav>
                    </NavItem>
                </Navbar>
            
            </div>


        );
    }
}

//prop-types example
// Navbar.propTypes = {
//     optionalArray: PropTypes.arrays
// }

export default Navibar;