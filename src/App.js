import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop-page/shop-page.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.component';
import Header from './components/header/header.component';

import { auth } from './firebase/firebase.utils'; 

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount = () =>{
    // onAuthStateChanged is an open subscription
    // and always will be open
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })

      console.log(user);
    })
  }

  componentWillUnmount = () => {
    // invoke this attribute make subscription close 
    // and prevent data to leake into dom
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div >
        <Header currentUser={this.state.currentUser}/>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route path='/shop' element={<ShopPage />} />
          <Route path='/signin' element={<SignInAndSignUpPage />} />
        </Routes>
      </div>
    );
  }
}

export default App;
