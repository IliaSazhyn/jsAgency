import firebase from "firebase";

var firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyAASZ8soPWMeNMWQZL59MeB4H1oUwsYqN8",
  authDomain: "jsagency-283b1.firebaseapp.com",
  databaseURL: "https://jsagency-283b1.firebaseio.com",
  projectId: "jsagency-283b1",
  storageBucket: "jsagency-283b1.appspot.com",
  messagingSenderId: "130344315847",
  appId: "1:130344315847:web:5bc2bbe806b4348ee187e2",
  measurementId: "G-1KF45QDE53",
});
// Initialize Firebase
const db = firebaseConfig.firestore();
const storage = firebaseConfig.storage();
firebase.analytics();

export { db, storage };
