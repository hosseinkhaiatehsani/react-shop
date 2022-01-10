import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop-page/shop-page.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.component';
import Header from './components/header/header.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { onSnapshot } from 'firebase/firestore';

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
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // check to user is not signed out
      if(userAuth) {
        const docRef = await createUserProfileDocument(userAuth);
        // const docSnap = await getDoc(docRef);

        // check for the latest changes of user(onSnapshot) and call setState
        onSnapshot( docRef, (snapshot) => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          })
        })
        
      } else {
        // if user signed out set the state to null
        this.setState({ currentUser: userAuth })
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
