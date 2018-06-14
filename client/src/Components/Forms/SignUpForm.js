import React, { Component } from 'react';
import {Row, Col, Input, Button} from 'react-materialize';
// import PropTypes from 'prop-types';


class SignUpForm extends Component {

    constructor(){
        super();
        this.state = {
            signUpUsername: '',
            signUpEmail: '',
            signUpPassword: '',
            signUpGender: '',
        };

        this.onTextboxChangeSignUpUsername = this.onTextboxChangeSignUpUsername.bind(this);
        this.onTextboxChangeSignUpEmail = this.onTextboxChangeSignUpEmail.bind(this);
        this.onTextboxChangeSignUpPassword = this.onTextboxChangeSignUpPassword.bind(this);
        this.onTextboxChangeSignUpGender = this.onTextboxChangeSignUpGender.bind(this);

        this.onSignUp = this.onSignUp.bind(this);
    }

    onSignUp() {
        // Grab state
        const {signUpUsername, signUpEmail, signUpPassword, signUpGender} = this.state;
        
        console.log(signUpUsername, signUpEmail, signUpPassword, signUpGender);
        // Post request to backend
        fetch('/account/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username: signUpUsername,
            email: signUpEmail,
            password: signUpPassword,
            gender: signUpGender,
          }),
        }).then(res => {
            console.log('Response:', res);
            if (res.success) {
              this.setState({
                signUpUsername: '',
                signUpEmail: '',
                signUpPassword: '',
                signUpGender: ''
              });
            } else {
              this.setState({
                signUpError: res.message,
              });
            }
          });
      }
    

    onTextboxChangeSignUpUsername(event) {
        this.setState({
            signUpUsername: event.target.value,
        });
    }

    onTextboxChangeSignUpEmail(event) {
        this.setState({
            signUpEmail: event.target.value,
        });
    }
    
    onTextboxChangeSignUpPassword(event) {
        this.setState({
            signUpPassword: event.target.value,
        });
    }

    onTextboxChangeSignUpGender(event) {
        this.setState({
            signUpGender: event.target.value,
        });
    }

    render(){
        const {
            signUpUsername,
            signUpEmail,
            signUpPassword,
            signUpGender,
          } = this.state;
      
        return(
            <div className="account-creation-form" >
                <br/>
                <br/>
                <br/>
                <Row>
                    <Col offset="s3" s={6}>
                    <h3>Create an account</h3>
                        <Input type="text" ref="username" label="Username" value={signUpUsername} onChange={this.onTextboxChangeSignUpUsername} s={12} />
                        <Input type="email" ref="email" label="Email" value={signUpEmail} onChange={this.onTextboxChangeSignUpEmail} s={12} />
                        <Input type="password" ref="password" label="Password" value={signUpPassword} onChange={this.onTextboxChangeSignUpPassword} s={12} />
                        <Input type="select" ref="gender" label="Gender" value={signUpGender} onChange={this.onTextboxChangeSignUpGender} s={12} >
                            <option value="" selected disabled>Select your gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </Input>
                        <Button type="submit" waves="purple" onClick={this.onSignUp} >Create Account</Button>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default SignUpForm;