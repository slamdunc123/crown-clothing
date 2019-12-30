import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

// redux 
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/userActions';

// components 
import HomePage from './components/pages/HomePage/HomePage';
import ShopPage from './components/pages/Shop/ShopPage';
import SignInSignUp from './components/pages/SignInSignUp/SignInSignUp';

// partials 
import Header from './components/partials/Header/Header';

// authentication 
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount(){
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    // this.setState({
    //   currentUser: user
    // });
    if (userAuth) {
      const userRef = await createUserProfileDocument(userAuth);

      userRef.onSnapshot(snapShot => {
        // console.log(snapShot.data())
       setCurrentUser({
        id: snapShot.id,
        ...snapShot.data()
       });
      })
    } else {
      setCurrentUser({
        userAuth
      })
    }

  })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        {/* {this.state.currentUser.email} */}
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInSignUp} />
        </Switch>
      </div>
    );
  }
  
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
