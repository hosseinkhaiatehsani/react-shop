import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import './sign-up.styles.scss';

import { createUserWithEmailAndPassword } from "firebase/auth"; 
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            repeatPassword: ''
        }
    }

    handlleSubmit = async event => {
        event.preventDefault();
        const {displayName, email, password, repeatPassword} = this.state;

        if(password !== repeatPassword){
            alert('password and repeatPassword is not the same!')
            return;
        }

        // create a new user with email and password
        const { user }  = await createUserWithEmailAndPassword(auth, email, password);

        try { 
            await createUserProfileDocument(user, { displayName });

            this.setState({
                displayName: '',
                email: '',
                password: '',
                repeatPassword: ''
            });

        } catch (error) {
            console.log(error.message);
        }

    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
    }

    render() {
        const {displayName, email, password, repeatPassword} = this.state;
        return(
            <div className="sign-up">
                <h2 className='title'>I don't have an account</h2>
                <span className='subtitle'>Create an account</span>

                <form action="" onSubmit={this.handlleSubmit}>
                    <FormInput 
                        type="text"
                        name='displayName'
                        value={displayName}
                        handleChange={this.handleChange}
                        label={'Display Name'}
                    />

                    <FormInput 
                        type="email"
                        name='email'
                        value={email}
                        handleChange={this.handleChange}
                        label={'Email'}
                    />

                    <FormInput 
                        type="password"
                        name='password'
                        value={password}
                        handleChange={this.handleChange}
                        label={'Password'}
                    />

                    <FormInput 
                        type="password"
                        name='repeatPassword'
                        value={repeatPassword}
                        handleChange={this.handleChange}
                        label={'Repeat Password'}
                    />

                    <CustomButton type='submit'>SIGN UP</CustomButton>

                </form>
            </div>
        );
    }
}

export default SignUp;