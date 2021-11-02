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
Username=localStorage.getItem("user_name");
document.getElementById("username").innerHTML="welcome "+Username+"!";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - "+ Room_names);
      row="<div class='room_name' id="+ Room_names+" onclick='redirectToRoomName(this.id)'> $ "+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row; 
      //End code
      });});}
getData();
function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({            
      purpose : "adding room name"
      });
      localStorage.setItem("room_name",room_name)
      window.location="kwitter_page.html"
}
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")
      window.location="kwitter.html"
}
