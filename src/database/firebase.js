import * as firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyD9oHiopkHi5IxebU_aBuw6uJHPtwjEp68",
    authDomain: "app-react-b63d4.firebaseapp.com",
    projectId: "app-react-b63d4",
    storageBucket: "app-react-b63d4.appspot.com",
    messagingSenderId: "938802716739",
    appId: "1:938802716739:web:4766cc63d941e2f453f4f6"
  };


let fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref()