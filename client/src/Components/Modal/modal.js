import React, { Component } from 'react';
import {Modal} from 'react-materialize';


class _Modal extends Component {

    render(){

        return(

            <div className='modal'>
                <Modal
                    open
                    id='foo'
                    header='Modal Header'>
                    Lorem ipsum dolor sit amet
                </Modal>
            </div>

        );
    }
}


export default _Modal;