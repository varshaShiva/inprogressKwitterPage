
const firebaseConfig = {
      apiKey: "AIzaSyCdCVQYKjoVJ4WBypCKeLBAnzJk4_fX8ag",
      authDomain: "kwitterupdatedbase.firebaseapp.com",
      databaseURL: "https://kwitterupdatedbase-default-rtdb.firebaseio.com",
      projectId: "kwitterupdatedbase",
      storageBucket: "kwitterupdatedbase.appspot.com",
      messagingSenderId: "1033384483708",
      appId: "1:1033384483708:web:a903bd6ed27bafd7c962f9"
    };

firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("username").innerHTML="Welcome "+user_name+"!";

function addRoom()
{
      roomName=document.getElementById("room_name").value;
      firebase.database().ref("/").child(roomName).update({
            purpose:"adding room name"
      });
      localStorage.setItem("roomName", roomName);
      window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name - "+ Room_names);
      row="<div class='room_name'id="+Room_names+" onclick='redirecttoroomname(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      });});}
getData();

function redirecttoroomname(name)
{
      console.log(name);
      localStorage.setItem("roomName",name);
      window.location="kwitter_page.html";
}
function logOut()
{
      localStorage.removeItem("user_name");
      window.location="index.html";
}
