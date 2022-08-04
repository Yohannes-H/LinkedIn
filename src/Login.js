import React from "react";
import "./Login.css";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";
import { auth } from "./firebase.js";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
function Login() {
  const dispatch = useDispatch();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const [profilePic, setProfilePic] = React.useState("");

  const loginToApp = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        console.log("login info: ", userCredential.user); // no need to reset the user state values blc it will be set either way inside onAuthStateChanged function b/c signing in a user is a authentication change
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Error Info: ", errorCode, errorMessage);
      });
  };
  const register = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        //const user = userCredential.user;
        console.log(userCredential);
        // ...dispatch method
        dispatch(
          login({
            displayName: name,
            email: userCredential.user.email,
            uid: userCredential.user.uid,
            photoUrl: profilePic,
          })
        );
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: profilePic,
        })
          .then(() => {
            // Profile updated!
            console.log("profile updated");
          })
          .catch((error) => {
            // An error occurred
            // ...
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        console.log("error creating a user", errorCode, errorMessage);
      });
  };

  return (
    <div className="login">
      <img
        src="https://www.technipages.com/wp-content/uploads/2020/09/LinkedIn-Does-Not-Load-Images-fix.jpg"
        alt=""
      />
      <form>
        <input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          type="text"
          placeholder="Full Name (required if registering)"
        />
        <input
          value={profilePic}
          onChange={(e) => {
            setProfilePic(e.target.value);
          }}
          type="text"
          placeholder="Profile pic URL (optional)"
        />
        <input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="email"
          placeholder="Email"
        />
        <input
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
          placeholder="Password"
        />

        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>
      <p>
        Not a member?{"  "}
        <span className="login__register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;
