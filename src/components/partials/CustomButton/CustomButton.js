import React from 'react'

// styles 
import './CustomButton.scss';

const CustomButton = ({children, isGoogleSignIn, inverted, ...otherProps}) => (
        <button className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'isGoogleSignIn' : ''} custom-button`} {...otherProps}>
            {children}
        </button>
    )

export default CustomButton;
