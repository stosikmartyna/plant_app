import React from 'react';
import firebase from 'firebase'
import { withRouter } from 'react-router';
import { ROUTES } from '../../helpers/routes'; 
import { InputTextIcon } from '../_library/Inputs';
import { Button } from '../_library/Buttons';
import { envelopeO } from 'react-icons-kit/fa/envelopeO';
import { lock } from 'react-icons-kit/fa/lock'
import { Col, SignContainer } from '../_library/Containers';
import { Link } from '../_library/Link';
import { Header } from '../_library/Headers';

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
        <SignContainer>
            <Header size={1} marginBottom={1}>Zarejestruj się</Header>
            <form onSubmit={handleSubmit}>
                <Col>
                    <InputTextIcon type={'text'} placeholder={'Email'} name={'email'} icon={envelopeO} />
                    <InputTextIcon type={'password'} placeholder={'Hasło'} name={'password'} icon={lock} />
                    <Button text={'Zarejestruj'} type={'submit'} marginBottom={1} justify={'center'}/>
                    <Link to={ROUTES.SIGN_IN} justify={'center'}>Mam już konto</Link>
                </Col>
            </form>
        </SignContainer>
    )
}

export default withRouter(SignUp) 