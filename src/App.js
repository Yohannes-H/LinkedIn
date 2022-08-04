import React from "react";
import Header from "./Header";
//import { Counter } from "./features/counter/Counter";
import "./App.css";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import { useSelector } from "react-redux";
import { logout, selectUser } from "./features/userSlice";
import Login from "./Login";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";
import Widgets from "./Widgets";

function App() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // const uid = user.uid;
        console.log("inside on Auth state change", user);
        dispatch(
          login({
            displayName: user.displayName,
            uid: user.uid,
            photoUrl: user.photoURL,
            email: user.email,
          })
        );
      } else {
        // User is signed out
        // ...
        dispatch(logout());
      }
    });
  }, []);

  const user = useSelector(selectUser);
  return (
    <div className="app">
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Sidebar />

          <Feed />
          <Widgets />
        </div>
      )}
    </div>
  );
}

export default App;
