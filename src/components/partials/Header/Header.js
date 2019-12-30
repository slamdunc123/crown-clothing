import React from 'react'

import { connect } from 'react-redux';

// styles 
import './Header.scss'

// routing 
import { Link } from 'react-router-dom';

// svg
import { ReactComponent as Logo} from '../../../assets/crown.svg';

import { auth } from '../../../firebase/firebase.utils';

const Header = ({ currentUser }) => {
    console.log(currentUser)
    return (
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo' />
            </Link>
            <div className='options'>
                <Link className='option' to='./shop'>SHOP</Link>
                <Link className='option' to='./contact'>CONTACT</Link>
                {
                    currentUser 
                    ?
                    <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                    :
                    <Link className='option' to='/signin'>SIGN IN</Link>
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser // state which is the rootReducer - then rootreducer > user value which is the userReducer - then userreducer > currentUser value
})

export default connect(mapStateToProps)(Header);
