import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

// components 
import HomePage from './components/pages/HomePage/HomePage';
import ShopPage from './components/pages/Shop/ShopPage';
import SignInSignUp from './components/pages/SignInSignUp/SignInSignUp';

// partials 
import Header from './components/partials/Header/Header';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInSignUp} />
      </Switch>
    </div>
  );
}

export default App;
