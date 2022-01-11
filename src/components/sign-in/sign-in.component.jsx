import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-in.styles.scss';

import { signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';
import { auth, provider } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await signInWithEmailAndPassword(auth, email, password);
            
            this.setState({
                email: '',
                password: ''
            });
        } catch (error) {
            console.log(error.message)
        }

    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
    }

    signInWithGoogle = () =>{
        signInWithPopup(auth, provider);
    }

    render() {
        return (
            <div className='sign-in'>
                <h2 className='title'>I already have an account</h2>
                <span className='subtitle'>Sign in with Usernam and Password</span>

                <form action="" onSubmit={this.handleSubmit}>
                    <FormInput
                     type="email" 
                     name='email'
                     handleChange={this.handleChange}
                     label={'Email'}
                     value={this.state.email} required />

                    <FormInput 
                    type="password"
                    name='password'
                    handleChange={this.handleChange}
                    label={'Password'}
                    value={this.state.password} required />

                    <div className='sign-in-button-container'>
                        <CustomButton type='submit'>Sign In</CustomButton>
                        <CustomButton onClick={this.signInWithGoogle} isGoogleBtn >Sign In With Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;