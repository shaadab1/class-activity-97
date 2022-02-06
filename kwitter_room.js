
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyBy9opJMArqUAM5uqNs1OaX0w4n0mSNMnI",
      authDomain: "kwitter-ae388.firebaseapp.com",
      databaseURL: "https://kwitter-ae388-default-rtdb.firebaseio.com",
      projectId: "kwitter-ae388",
      storageBucket: "kwitter-ae388.appspot.com",
      messagingSenderId: "241106036029",
      appId: "1:241106036029:web:2a0cbce9ea615b42ec1154"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);

     userName = localStorage.getItem("user_name");
     document.getElementById("User_name").innerHTML = "Welcome " + userName + "!";


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      
      console.log("room_name" + Room_names);
      row = "<div class='roomName' id = "+Room_names+" onclick='redirecttoroomname(this.id)'>#" + Room_names + "</div><hr> ";
      document.getElementById("output").innerHTML += row; 

      });});}
getData();

function add_room() {

      roomName =  document.getElementById("room_name").value; 
      firebase.database().ref("/").child(roomName).update({
            purpose : "adding room name"
      });
      localStorage.setItem("roomName" , roomName);
      window.location = "kwitter_page.html";

}

function redirecttoroomname(name)
{
      console.log(name);
      localStorage.setItem("roomName" , name);
      window.location = "kwitter_page.html";
}

function logout() 
{

      localStorage.removeItem("user_name");
      localStorage.removeItem("roomName");
      window.location = "index.html";
}
