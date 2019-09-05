import firebase from "firebase/app";
import "firebase/auth";

var config = {
  apiKey: "AIzaSyDeIfDDnE-hyWCV13CFU0BfrG1m1M3GUwo",
  authDomain: "battle-manager-1b721.firebaseapp.com",
  databaseURL: "https://battle-manager-1b721.firebaseio.com",
  projectId: "battle-manager-1b721",
  storageBucket: "",
  messagingSenderId: "936393960074",
  appId: "1:936393960074:web:162fc69307e902a1"
};

firebase.initializeApp(config);

export default firebase.auth();
