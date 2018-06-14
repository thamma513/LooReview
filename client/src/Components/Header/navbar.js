import React, { Component } from 'react';
import {Navbar, NavItem, Button, SideNav, SideNavItem, Icon, Modal} from 'react-materialize';
import SignUpModal from '../Modal/SignUpModal';
import SignInModal from '../Modal/SignInModal';
import './navbar.css';


class Navibar extends Component {

    constructor(){
        super();
        this.state = {
            currentPage: "SignUp"
        }
    }

    handlePageChange = page => {
        this.setState({ currentPage: page });
      };

    render(){

        return(
            <div className='navBar'>
                <Navbar brand='LooReview' right>
                    <NavItem>
                        <SignUpModal/>
                    </NavItem>
                    <NavItem>
                        <SignInModal/>
                    </NavItem>
                    <NavItem style={{ marginTop: '4%' }}>
                        <SideNav
                            trigger={<Button className="sideNavButton">Test Button</Button>}
                            options={{ closeOnClick: true }}>
                            <SideNavItem userView
                                user={{
                                background: './img/golden-toilet.jpg',
                                name: 'Walker Radez',
                                email: 'walkerradez@gmail.com'
                                }}/>
                            <SideNavItem href='#' icon='cloud'>My Account</SideNavItem>
                            <SideNavItem divider />
                            <SideNavItem href='#'>My Favorites</SideNavItem>
                            <SideNavItem divider />
                            <SideNavItem href='#'>Admin Panel</SideNavItem>
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