import React from 'react';
import SignUp from '../components/Sign/SignUp';
import { ViewContainer } from '../components/_library/Containers';

export const SignUpView = () => {
    return (
        <ViewContainer background={'./sign/sign-in.jpg'} justifyHorizontally>
            <SignUp />
        </ViewContainer>
    )
}