import React, { Component } from 'react';
import {Modal, NavItem} from 'react-materialize';
import SignUpForm from '../Forms/SignUpForm';

class SignUpModal extends Component {

    render(){

        return(

            <div className='modalLoo'>
                <Modal
                    trigger={<NavItem>Sign Up</NavItem>}>
                    <SignUpForm />
                </Modal>
            </div>

        );
    }
}


export default SignUpModal;