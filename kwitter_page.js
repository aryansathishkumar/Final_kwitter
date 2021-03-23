//YOUR FIREBASE LINKS
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyARFMD2atTXMpLyjghhsxf8stDkZJBDtgQ",
      authDomain: "kwitter1-40793.firebaseapp.com",
      databaseURL: "https://kwitter1-40793-default-rtdb.firebaseio.com",
      projectId: "kwitter1-40793",
      storageBucket: "kwitter1-40793.appspot.com",
      messagingSenderId: "197448607022",
      appId: "1:197448607022:web:5c7cb75de49abd867bc6bf"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//fire base links ends here

var recent_room = localStorage.getItem("room-name");
var user_name = localStorage.getItem("user_name");

function send()
{
     var msg = document.getElementById("message").value;

      firebase.database().ref(recent_room).push({
            username : user_name, likes : 0, message : msg
      });
}


function getData() { firebase.database().ref("/"+recent_room).on('value', function(snapshot) { document.getElementById("msg_display").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
var name_1 = message_data["username"];
var message_1 = message_data["message"];
var like_1 = message_data["likes"]

var name_tag = "<h4>"+name_1+"<img class='user_tick' src='tick.png'></h4>";
var message_tag = "<h4>"+message_1+"</h4>";
var button_tag = "<button class='btn btn-danger' id="+firebase_message_id+" value="+like_1+" onclick='update(this.id)'>";
var like_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+like_1+"</span></button><hr>";

row = name_tag + message_tag + button_tag + like_tag;
document.getElementById("msg_display").innerHTML += row;
//End code
      } });  }); }
getData();

function update(message_id)
{
      btn_id = message_id;
      likes_1 = document.getElementById(btn_id).value;
      likes_1 = Number(likes_1);
      likes_1++;
      firebase.database().ref(recent_room).child(btn_id).update({
       likes : likes_1
      });
}

function Logout()
{
      localStorage.removeItem("room-name");
      localStorage.removeItem("user_name");
      window.location ="index.html";
}