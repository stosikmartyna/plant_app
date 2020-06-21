import React, { useCallback } from 'react';
import { withRouter } from 'react-router';
import firebase from 'firebase'

const SignUp = ({ history }) => {
    const handleSignUp = useCallback(async event => {
        event.preventDefault();

        const { email, password } = event.target.elements;

        try {
            await firebase
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value)
            history.push('/')
        } 
        catch (error) {
            console.warn(error)
        }
    }, [history]);

    return (
        <div>
            <h1>Zarejestruj się</h1>
            <form onSubmit={handleSignUp}>
                <label>
                    email
                    <input name='email' placeholder='email'/>
                </label>
                <label>
                    password
                    <input name='password' type='password' placeholder='password'/>
                </label>
                <button type='submit'>Zarejestruj</button>
            </form>
        </div>
    )
}

export default withRouter(SignUp) 