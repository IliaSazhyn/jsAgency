import React, { useState, useEffect } from "react";
import classes from "./Login.module.css";
import { GoogleIcon } from "./SigninElements";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";

// firebase.initializeApp({
//   apiKey: "AIzaSyAASZ8soPWMeNMWQZL59MeB4H1oUwsYqN8",
//   authDomain: "jsagency-283b1.firebaseapp.com",
//   databaseURL: "https://jsagency-283b1.firebaseio.com",
//   projectId: "jsagency-283b1",
//   storageBucket: "jsagency-283b1.appspot.com",
//   messagingSenderId: "130344315847",
//   appId: "1:130344315847:web:5bc2bbe806b4348ee187e2",
//   measurementId: "G-1KF45QDE53",
// });

const Login = () => {
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [isLogged, setIsLogged] = useState(false);

  const onSubmit = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // var token = result.credential.accessToken;
        // The signed-in user info.
        // var user = result.user;
        // ...
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const onLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        localStorage.removeItem("user");
        // Sign-out successful.
      })
      .catch(function (error) {
        console.log(error);
      });
    setIsLogged(false);
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
        setIsLogged(true);
        setName(user.displayName);
        setPhoto(user.photoURL);
      } else {
        // No user is signed in.
      }
    });
  }, []);

  return (
    <>
      {isLogged ? (
        <div className={classes.formContent}>
          <div className={classes.user}>
            <img src={photo} alt="avatar" className={classes.userImg} />
          </div>
          <div className={classes.userName}>
            <h5>{name}</h5>
          </div>
          <button
            onClick={onLogout}
            type="button"
            className={classes.formButton}
          >
            Logout
          </button>
        </div>
      ) : (
        <div className={classes.formContent}>
          <GoogleIcon />
          <h1 className={classes.formHeader}>Sign in to your account</h1>

          <button
            onClick={onSubmit}
            type="button"
            className={classes.formButton}
          >
            Continue with Google
          </button>
        </div>
      )}
    </>
  );
};

export default Login;
