
//ADD YOUR FIREBASE LINKS HERE
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

function Addroom()
{
      var room_name = document.getElementById("room_name").value;

      localStorage.setItem("room-name", room_name)


      firebase.database().ref("/").child(room_name).update({
            participants : "1+", purpose : "adding the user"
      });

      window.location = "kwitter_page.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("recent_trendings").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
var row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>"+Room_names+"</div><hr>";
document.getElementById("recent_trendings").innerHTML += row;
      //End code
      });});}
getData();

document.getElementById("user_name").innerHTML= "welcome"+" "+ localStorage.getItem("user_name") +"!";

function redirectToRoomName(recent_room)
{
      console.log(recent_room);
      localStorage.setItem("room-name", recent_room);
      window.location = "kwitter_page.html";
}

function Logout()
{
      localStorage.removeItem("room-name");
      localStorage.removeItem("user_name");
      window.location ="index.html";
}
