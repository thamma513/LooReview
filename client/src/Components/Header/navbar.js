import React, { Component } from 'react';
import {Navbar, NavItem, Button, SideNav, SideNavItem, Icon} from 'react-materialize';
import SignUpModal from '../Modal/SignUpModal';
import SignInModal from '../Modal/SignInModal';
import './navbar.css';
import logo from './img/golden-toilet.jpg';


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
                <Navbar style={{  background: '#80deea' }} brand='LooReview' right>
                    <NavItem>
                        <SignUpModal/>
                    </NavItem>
                    <NavItem>
                        <SignInModal/>
                    </NavItem>
                    <NavItem>
                        <SideNav
                            trigger={<Button style={{ height: '64px' }} className="sideNavButton"><Icon>menu</Icon></Button>}
                            options={{ closeOnClick: true }}>
                            <SideNavItem userView
                                user={{
                                background: logo,
                                image: 'https://scontent.fapa1-1.fna.fbcdn.net/v/t1.0-9/19904964_10213466963577435_2582372553199714267_n.jpg?_nc_cat=0&oh=73d1cb5ff0c1837dced802fe259d378b&oe=5BBCF013',
                                name: 'Tyler Zonies',
                                email: 'tylerzonies@gmail.com'
                                }}/>
                            <SideNavItem href='#' icon='face'>My Account</SideNavItem>
                            <SideNavItem divider />
                            <SideNavItem href='#' icon='favorite'>My Favorites</SideNavItem>
                            <SideNavItem divider />
                            <SideNavItem href='#' icon='build'>Admin Panel</SideNavItem>
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