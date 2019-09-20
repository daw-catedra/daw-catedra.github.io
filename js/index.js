firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    var user = firebase.auth().currentUser;
    if (user != null) {
      var email_id = user.email;
      document.getElementById("user").innerHTML = "Bienvenido: " + email_id;
    }
  }
});

function login() {
  var userEmail = document.getElementById("correo").value;
  var userPass = document.getElementById("contra").value;
  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).then(user => {
    window.location = "home.html";
  }).catch(error => {
    var errorCode = error.code;
    var errorMessage = error.message;
    window.alert("Error : " + errorMessage);
  })
}

function logout() {
  firebase.auth().signOut();
  window.location = "index.html";
}

function guardar() {
  var ejemplo = document.getElementById("texto");
  var basededatos = firebase.database().ref();
  var ejemplo_text = ejemplo.value;
  basededatos.child("EJEMPLO").set(ejemplo_text);

}

