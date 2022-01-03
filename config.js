import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyB8RoGYw43PcFQam6bN69rv3eU3Lbuyh8U",
  authDomain: "pro-71-ride.firebaseapp.com",
  databaseURL: "https://pro-71-ride-default-rtdb.firebaseio.com",
  projectId: "pro-71-ride",
  storageBucket: "pro-71-ride.appspot.com",
  messagingSenderId: "694055829691",
  appId: "1:694055829691:web:f47d85aa468ffdd6ffe99e"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
