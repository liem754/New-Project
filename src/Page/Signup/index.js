import { useEffect, useState, useHistory } from "react";

import { Link, useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
// const uiConfig = {
//   // Popup signin flow rather than redirect flow.
//   signInFlow: "redirect",
//   // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
//   signInSuccessUrl: "/blog",
//   // We will display Google and Facebook as auth providers.
//   signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
// };
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app, auth, db } from "../Firebase/config";

function Signup() {
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");

  const Signup = () => {
    // const history = useNavigate();
    createUserWithEmailAndPassword(auth, signupEmail, signupPassword)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        if (user) {
          db.collection("users").add({
            displayName: user.email,
            email: user.email,
            password: signupPassword,
            uid: user.displayName,
          });
        }

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };
  // useEffect(() => {
  //   const unregisterAuthObserver = firebase
  //     .auth()
  //     .onAuthStateChanged((user) => {
  //       if (!user) {
  //         return;
  //       }
  //     });
  //   return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  // }, []);
  return (
    <div className="login">
      <div className="content">
        <div className="khung">
          <div className="khung-logo ko">
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="text-purple-500"
            >
              <title lang="en">Stark logo</title>
              <rect width="64" height="64" rx="32" fill="currentColor"></rect>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M31.0399 47.9701V43.1582C34.3333 43.4448 37.5845 42.2588 39.9196 39.919C43.6395 36.1988 44.2697 30.3917 41.4344 25.9603L25.9596 41.4337L22.5097 44.8833C21.8636 44.406 21.254 43.881 20.6862 43.3128C14.4379 37.0651 14.4379 26.9352 20.6862 20.6871C23.92 17.4463 28.39 15.7502 32.9599 16.0298V20.8418C29.6666 20.5552 26.4154 21.7412 24.0803 24.0809C20.3604 27.8011 19.7302 33.6082 22.5655 38.0397L38.0402 22.5665L41.4903 19.1169C42.1364 19.5942 42.746 20.1192 43.3138 20.6874C49.5621 26.9351 49.5621 37.065 43.3138 43.3131C40.0799 46.5539 35.6099 48.2499 31.0399 47.9701Z"
                fill="white"
              ></path>
            </svg>
          </div>
          <p className="khung-p ko">
            Create a free account or sign in to get started using Stark
          </p>

          <form action="" className="khung-form">
            <p>Email or username</p>
            <input
              type="email"
              value={signupEmail}
              onChange={(e) => setSignupEmail(e.target.value)}
            />
          </form>
          <form action="" className="khung-formm">
            <p>Password</p>
            <input
              type="password"
              value={signupPassword}
              onChange={(e) => setSignupPassword(e.target.value)}
            />
          </form>

          <button className="input2" onClick={Signup}>
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
