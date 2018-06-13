import React, { Component } from 'react';
import {Modal} from 'react-materialize';
import SignUpForm from '../Tyler-test/SignUpForm';


class ModalLoo extends Component {

    render(){

        return(

            <div className='modal'>
                <Modal
                    open
                    id='foo'
                    header='LooReview'>
                    <SignUpForm />
                </Modal>
            </div>

        );
    }
}


export default ModalLoo;