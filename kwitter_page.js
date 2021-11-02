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
    firebase.initializeApp(firebaseConfig)
    username=localStorage.getItem("user_name");
    roomname=localStorage.getItem("room_name");
    function send(){
          msg=document.getElementById("write").value;
          firebase.database().ref(roomname).push({
                name:username,
                message:msg,
                like:0
          });
          document.getElementById("write").value = "";
    }
//YOUR FIREBASE LINKS

function getData() { firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_tag = "<h4>"+ name +"<img src='tick.png'class='user_tick'></h4>";
message_tag = "<h4 class='message_h4'>"+ message + "</h4>";
like_button = "<button class='btn btn-warning'id = "+ firebase_message_id + "value="+ like +"onclick='updatelike(this.id)'";
span_tag = "<span class='glyphicon glyphicon-thumbs-up'>like:" + like +"</span></button><hr>";
row = name_tag + message_tag + like_button + span_tag;
document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();
function updatelike(message_id){
      console.log('clicked on the like button'+ message_id);
      button_id = message_id;
      lick = document.getElementById(button_id).value;
      update_like =  Number(lick) + 1;
      console.log(update_like);
      firebase.database().ref(roomname).child(message_id).update({
            like:update_like
      });
}
function logout(){
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")
      window.location="kwitter.html"
}
