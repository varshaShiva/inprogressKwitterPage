function loginButton()
{
    user_name=document.getElementById("login_input").value;
    localStorage.setItem("user_name",user_name);
    window.location="kwitter_room.html";
}

