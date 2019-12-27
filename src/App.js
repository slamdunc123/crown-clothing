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
import { auth } from './firebase/firebase.utils';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    auth.onAuthStateChanged(user => {
    this.setState({
      currentUser: user
    });
    console.log(user)
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
