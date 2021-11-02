var firebaseConfig = {
    apiKey: "AIzaSyAKC2gAZDIg5OOsnAxHH5q03s97vhenCRI",
    authDomain: "kwitter-9e590.firebaseapp.com",
    databaseURL: "https://kwitter-9e590-default-rtdb.firebaseio.com",
    projectId: "kwitter-9e590",
    storageBucket: "kwitter-9e590.appspot.com",
    messagingSenderId: "584054594048",
    appId: "1:584054594048:web:263f642d6f1ed4d9bf56e5",
    measurementId: "G-25QX8BEQ7F"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS
function adduser(){
    username=document.getElementById("adduser").value;
    firebase.database().ref("/").child(username).update({
        purpose:"adduser"
    });

}