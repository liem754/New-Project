import { useEffect, useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";

import firebase from "../Firebase/config";
import { auth, db } from "../Firebase/config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
const ggprovider = new firebase.auth.GoogleAuthProvider();

function Login() {
  const [signinEmail, setSigninEmail] = useState("");
  const [signinPassword, setSigninPassword] = useState("");

  const signwithGoogle = async () => {
    const { additionalUserInfo, user } = await auth.signInWithPopup(ggprovider);

    if (additionalUserInfo?.isNewUser) {
      db.collection("users").add({
        displayName: user.displayName,
        email: user.email,
        photo: user.photoURL,
        uid: user.displayName,
        providerId: additionalUserInfo.providerId,
      });
    }
  };

  const Signin = async () => {
    signInWithEmailAndPassword(auth, signinEmail, signinPassword)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("Không tìm thấy tài khoản!!!! dume sai email hoặc mật khâu");
        // ..
      });
  };

  return (
    <div className="login">
      <div className="content">
        <div className="khung">
          <div className="khung-logo">
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
          <p className="khung-p">
            Create a free account or sign in to get started using Stark
          </p>
          <button className="khung-btn dau" onClick={signwithGoogle}>
            <svg
              className="sc"
              width="15"
              height="19"
              viewBox="0 0 15 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.2181 3.03804C10.7891 2.32753 11.1935 1.35977 11.1935 0.379755C11.1935 0.245003 11.1816 0.110251 11.1578 0C10.23 0.0367505 9.11182 0.637008 8.44568 1.44552C7.92228 2.05803 7.43458 3.03804 7.43458 4.01805C7.43458 4.16505 7.45837 4.31206 7.47026 4.36106C7.52974 4.37331 7.6249 4.38556 7.72006 4.38556C8.55274 4.38556 9.59952 3.8098 10.2181 3.03804ZM10.8723 4.59381C9.48057 4.59381 8.35052 5.46357 7.6249 5.46357C6.85171 5.46357 5.8406 4.64281 4.62728 4.64281C2.33148 4.64281 0 6.60284 0 10.2901C0 12.5932 0.856463 15.0187 1.92704 16.5867C2.84298 17.9097 3.63997 19 4.79381 19C5.93577 19 6.43537 18.216 7.85091 18.216C9.29025 18.216 9.61142 18.9755 10.8723 18.9755C12.1213 18.9755 12.954 17.7995 13.7391 16.6357C14.6193 15.3005 14.9881 14.0019 15 13.9407C14.9286 13.9162 12.5377 12.9117 12.5377 10.0941C12.5377 7.65635 14.4171 6.56609 14.5242 6.48034C13.2871 4.64281 11.3957 4.59381 10.8723 4.59381Z"
                fill="white"
              ></path>
            </svg>
            Continue with Google
          </button>

          <form action="" className="khung-form">
            <p>Email or username</p>
            <input
              type="text"
              onChange={(e) => setSigninEmail(e.target.value)}
            />
          </form>
          <form action="" className="khung-formm">
            <p>Password</p>
            <input
              type="text"
              onChange={(e) => setSigninPassword(e.target.value)}
            />
          </form>
          <Link className="input1" to="/signup">
            Sign up
          </Link>
          <button className="input2" onClick={Signin}>
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
