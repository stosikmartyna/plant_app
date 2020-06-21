import React from 'react';
import { withRouter } from 'react-router';
import firebase from 'firebase'

const SignUp = ({ history }) => {
    const handleSubmit = (event => {
        event.preventDefault();
        const { email, password } = event.target.elements;

        firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
            .then(value => {
                firebase.database().ref(`users/${value.user.uid}`)
                    .set({
                        email: value.user.email,
                        uid: value.user.uid
                    })
                    history.push('/')
                })
            .catch(err => console.warn(err))
    })

    return (
        <div>
            <h1>Zarejestruj się</h1>
            <form onSubmit={handleSubmit}>
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