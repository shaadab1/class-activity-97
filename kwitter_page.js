//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyBy9opJMArqUAM5uqNs1OaX0w4n0mSNMnI",
      authDomain: "kwitter-ae388.firebaseapp.com",
      databaseURL: "https://kwitter-ae388-default-rtdb.firebaseio.com",
      projectId: "kwitter-ae388",
      storageBucket: "kwitter-ae388.appspot.com",
      messagingSenderId: "241106036029",
      appId: "1:241106036029:web:2a0cbce9ea615b42ec1154"
    };

    username = localStorage.getItem("user_name");
    roomname = localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
message_with_tag = "<h4 class='message_h4'>"+message+"</h4>";
like_button = "<button class='btn btn-warning' id="+firebase_message_id+" value = "+like+" onclick = 'updatelike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like:"+like+"</span></button><hr>";
row = name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").value += row; 

//End code
      } });  }); }
getData();

function send() 
{

      msg = document.getElementById("Message").value;
      firebase.database().ref(roomname).push({
            name:userName,
            Message:msg,
            like:0
      });
      document.getElementById("Message").value="";
}

function updatelike(message_id) {

      console.log("clicked on like button-"+message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updatedlike = Number(likes)+1;
      console.log(updatedlike);
      firebase.database().ref(roomname).child(message_id).update({
            like : updatedlike
      });
}

function logout() 
{

      localStorage.removeItem("user_name");
      localStorage.removeItem("roomName");
      window.location = "index.html";
}
