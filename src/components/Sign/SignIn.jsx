import React, { useCallback, useContext } from 'react';
import firebase from 'firebase';
import { withRouter } from 'react-router';
import { ROUTES } from '../../helpers/routes'; 
import { AuthContext } from '../Auth/Auth';

const SignIn = ({history}) => {
    const {user} = useContext(AuthContext);

    const handleSignIn = useCallback(
        async event => {
            event.preventDefault();

            const { email, password } = event.target.elements;
            
            try {
                await firebase
                    .auth()
                    .signInWithEmailAndPassword(email.value, password.value);
                    history.push(ROUTES.MY_GARDEN);
            } 
            catch (error) {
                console.warn(error)
            }
        }, [history]
    )

    if (user) history.push(ROUTES.HOME)

    return (
        <div>
            <h1>Zaloguj się</h1>
            <form onSubmit={handleSignIn}>
                <label>
                    email
                    <input name='email' placeholder='email'/>
                </label>
                <label>
                    hasło
                    <input name='password' type='password' placeholder='password'/>
                </label>
                <button type='submit'>Zaloguj</button>

                <span onClick={() => history.push(ROUTES.SIGN_UP)}>
                    Nie masz jeszcze konta? Zarejestruj się!
                </span>
            </form>
        </div>
    )
}

export default withRouter(SignIn)