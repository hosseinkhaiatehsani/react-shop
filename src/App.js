import React from 'react';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { createStructuredSelector } from 'reselect';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop-page/shop-page.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.component';
import CheckoutPage from './pages/checkout/checkout.component';

import Header from './components/header/header.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { onSnapshot } from 'firebase/firestore';
import { selectCurrentUser } from './redux/user/user.selectors';

class App extends React.Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     currentUser: null
  //   }
  // }

  unsubscribeFromAuth = null;

  componentDidMount = () =>{
    const { setCurrentUser } = this.props;
    // onAuthStateChanged is an open subscription
    // and always will be open
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // check to user is not signed out
      if(userAuth) {
        const docRef = await createUserProfileDocument(userAuth);
        // const docSnap = await getDoc(docRef);

        // check for the latest changes of user(onSnapshot) and call setState
        onSnapshot( docRef, (snapshot) => {
          setCurrentUser({
              id: snapshot.id,
              ...snapshot.data()
            })
        })
        
      } else {
        // if user signed out set the state to null
        setCurrentUser(userAuth)
      }

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
        <Header />
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route path='/shop/*' element={<ShopPage />} />
          <Route exact path='/signin' element={
             this.props.currentUser ? (<Navigate replace to='/' />) : (<SignInAndSignUpPage />)
            } />
          <Route exact path='/checkout' element={<CheckoutPage />} />
        </Routes>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
