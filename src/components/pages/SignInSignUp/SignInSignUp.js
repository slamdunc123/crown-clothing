import React from 'react'

// styles 
import './SignInSignUp.scss';

// partials 
import SignIn from '../../partials/SignIn/SignIn';
import SignUp from '../../partials/SignUp/SignUp';

const SignInSignUp = () => {
    return (
        <div className='sign-in-and-sign-up'>
            <SignIn />
            <SignUp />
        </div>
    )
}

export default SignInSignUp;
