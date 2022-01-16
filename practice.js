const firebaseConfig = {
    apiKey: "AIzaSyBhkgkAKP8FV4dJH8cGpoL3sLqytTTqkgw",
    authDomain: "for-hp-fcdb3.firebaseapp.com",
    databaseURL: "https://for-hp-fcdb3-default-rtdb.firebaseio.com",
    projectId: "for-hp-fcdb3",
    storageBucket: "for-hp-fcdb3.appspot.com",
    messagingSenderId: "826055087146",
    appId: "1:826055087146:web:a0428c8718e85e17939f53"
  };
  
firebase.initializeApp(firebaseConfig);

function addUser(){
    user_name = document.getElementById("userName").value;
    firebase.database().ref("/").child(user_name).update({
    purpose:"adding user"
    });
}
