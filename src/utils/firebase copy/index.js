import firebase from "firebase";

// var firebaseConfig = {
//   apiKey: "AIzaSyBxjl03Hk-b67D5mRmzBs8Ti_MkGpOZbuQ",
//   authDomain: "demorokkhi.firebaseapp.com",
//   databaseURL: "https://demorokkhi.firebaseio.com",
//   projectId: "demorokkhi",
//   storageBucket: "demorokkhi.appspot.com",
//   messagingSenderId: "419408335722",
//   appId: "1:419408335722:web:99b1c93e43cb56e2234b13",
//   measurementId: "G-T9K9LELVES"
// };


var firebaseConfig = {
  apiKey: "AIzaSyATDIA8VFjpbLpz80AlPt0TWq8cjusQd9Y",
  authDomain: "rokkhi-f7514.firebaseapp.com",
  databaseURL: "https://rokkhi-f7514.firebaseio.com",
  projectId: "rokkhi-f7514",
  storageBucket: "rokkhi-f7514.appspot.com",
  messagingSenderId: "1098122328211",
  appId: "1:1098122328211:web:58bdc89ae68a8b94"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
