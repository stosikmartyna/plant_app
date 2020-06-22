import React, { useCallback, useContext } from 'react';
import firebase from 'firebase';
import { withRouter } from 'react-router';
import { ROUTES } from '../../helpers/routes'; 
import { AuthContext } from '../Auth/Auth';
import { InputTextIcon } from '../_library/Inputs';
import { Button } from '../_library/Buttons';
import { envelopeO } from 'react-icons-kit/fa/envelopeO';
import { lock } from 'react-icons-kit/fa/lock'
import { Col, SignContainer } from '../_library/Containers';
import { Link } from '../_library/Link';
import { Header } from '../_library/Headers';
const SignIn = ({history}) => {
    const {user} = useContext(AuthContext);

    const handleSubmit = useCallback(
        async event => {
            event.preventDefault();
            const { email, password } = event.target.elements;
            
            try {
                await firebase
                    .auth()
                    .signInWithEmailAndPassword(email.value, password.value);
                    history.push(ROUTES.HOME);
            } 
            catch (error) {
                console.warn(error)
            }
        }, [history]
    )

    if (user) history.push(ROUTES.HOME)

    return (
        <SignContainer>
            <Header size={1} marginBottom={1}>Zaloguj się</Header>
            <form onSubmit={handleSubmit}>
                <Col>
                    <InputTextIcon type={'text'} placeholder={'Email'} name={'email'} icon={envelopeO} />
                    <InputTextIcon type={'password'} placeholder={'Hasło'} name={'password'} icon={lock} />
                    <Button text={'Zaloguj'} type={'submit'} marginBottom={1} justify={'center'}/>
                    <Link to={ROUTES.SIGN_UP} justify={'center'}>Nie masz jeszcze konta? Zarejestruj się!</Link>
                </Col>
            </form>
        </SignContainer>
    )
}

export default withRouter(SignIn)