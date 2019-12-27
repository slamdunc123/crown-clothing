import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

// components 
import HomePage from './components/pages/HomePage/HomePage';
import ShopPage from './components/pages/Shop/ShopPage';
import SignInSignUp from './components/pages/SignInSignUp/SignInSignUp';

// partials 
import Header from './components/partials/Header/Header';

// authentication 
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    // this.setState({
    //   currentUser: user
    // });
    if (userAuth) {
      const userRef = await createUserProfileDocument(userAuth);

      userRef.onSnapshot(snapShot => {
        // console.log(snapShot.data())
        this.setState({
          currentUser: {
            id: snapShot.id,
            ...snapShot.data()
          }
        }, () => {
          console.log(this.state)
        })
      })
    } else {
      this.setState({
        currentUser: userAuth
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
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInSignUp} />
        </Switch>
      </div>
    );
  }
  
}

export default App;
