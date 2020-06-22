import React from 'react';
import SignIn from '../components/Sign/SignIn';
import { ViewContainer } from '../components/_library/Containers';

export const SignInView = () => {
    return (
        <ViewContainer background={'./sign/sign-in.jpg'} justifyHorizontally>
            <SignIn />
        </ViewContainer>
    )
}