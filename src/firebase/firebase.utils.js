// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// import 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { doc, getFirestore, getDoc, setDoc, collection, writeBatch } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjTBo1bf7RxMHD9rf63tSor3AdZ8iSTpA",
  authDomain: "react-shop-9c67b.firebaseapp.com",
  projectId: "react-shop-9c67b",
  storageBucket: "react-shop-9c67b.appspot.com",
  messagingSenderId: "398738014061",
  appId: "1:398738014061:web:733fd323930b4461e72464",
  measurementId: "G-6NRYL9ECK8"
};


export const createUserProfileDocument = async (authUser, aditionalData) => {
  // check if user is signed in with google
  if(!authUser) return;

  // create a pointer to firestore database
  const db = getFirestore();
  // create a ref with pointer , collection name and unique id
  const docRef = doc(db, "users", authUser.uid);
  // create a snapshot with ref to check data 
  const docSnap = await getDoc(docRef);

  // if data is not exist in collection add it to collection
  if (! docSnap.exists()) {
    // console.log("Document data:", docSnap.data());
    const { uid, displayName, email} = authUser;
    // create an instance of time in epoch
    const createdAt = Date.now();

    // add doc to collection with specific fileds
    try{
      await setDoc(doc(db, "users", uid), {
        // uid: uid,
        // displayName: displayName,
        // email: email,
        // phoneNumber: phoneNumber,
        // createdAt: createdAt
        displayName,
        email,
        createdAt,
        ...aditionalData
      });
    } catch (error){
      console.log('error creating user', error.message)
    }
  } 

  return docRef;
}

export const createCollectionAndDocuments = async (collectionKey, objectToAdd) => {
  const db = getFirestore();
  const batch = writeBatch(db);

  objectToAdd.forEach( obj => {
    let collectionRef = doc(collection(db, collectionKey))
    batch.set(collectionRef, obj)
  })

  return await batch.commit()
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

// export const auth = app.auth();
export const provider = new GoogleAuthProvider();
export const auth = getAuth();


