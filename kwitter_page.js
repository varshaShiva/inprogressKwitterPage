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
room_name=localStorage.getItem("roomName");
function getData() 
{ 
      firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
      firebase_message_id = childKey;
      console.log("testss");
      message_data = childData;
      console.log("message id:"+firebase_message_id+"message data:"+message_data);
      name=message_data['name'];
      message=message_data['message'];
      like=message_data['like'];
      name_with_tag="<h4>"+name+"<img class='user_tick' src='tick.png'</h4>";
      message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
      like_button="<button class='btn btn-warning' id="+firebase_message_id+"value="+like+"onclick='update_like(this.id)'>";
      span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>like : "+like+"</span></button><hr>";
      row=name_with_tag+message_with_tag+like_button+span_with_tag;
      document.getElementById("output").innerHTML+=row;
      } });  });
 }

getData();

function send()
{
      msg=document.getElementById("msg").value;
      console.log("message"+msg);
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      console.log("message2"+msg);
      document.getElementById("msg").value="";
}
function logOut()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("roomName");
      window.location.replace("index.html");
}
console.log("hello");
function update_like(message_id)
{
      console.log("clicked on the like button: "+message_id);
      button_id=message_id;
      console.log("hello2");
      likes=document.getElementById(button_id).value;
      updatedlikes=Number(likes)+1;
      console.log(updatedlikes);
      firebase.database().ref(room_name).child(message_id).update({
            like:updatedlikes
      });
}