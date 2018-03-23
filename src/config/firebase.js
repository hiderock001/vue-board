import firebase from "firebase"


var config = {
    apiKey: "AIzaSyC0rcd73VZHt45yOfzd4E1fcXs82XT5lOY",
    authDomain: "board-f94d3.firebaseapp.com",
    databaseURL: "https://board-f94d3.firebaseio.com",
    projectId: "board-f94d3",
    storageBucket: "board-f94d3.appspot.com",
    messagingSenderId: "576905419731"
};

var app = firebase.initializeApp(config);

export var db = app.database();
export var boardRefs = db.ref('board');