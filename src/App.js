import React from 'react';
import {Route, Switch} from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SigninAndSignup from "./pages/signin-and-signup/signin-and-signup.component";

import './App.css';


function App() {
  return (
      <div>
          <Header />
          <Switch>
              <Route exact path='/' component={HomePage} />
              <Route path='/signin' component={SigninAndSignup} />
              <Route path='/shop' component={ShopPage} />
          </Switch>
      </div>
  );
}

export default App;
