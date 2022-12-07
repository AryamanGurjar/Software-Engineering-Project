const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC44NyhleygJpZM6JS7jdcGgb2utJbP5Ic",
    authDomain: "medidoc-4b4c6.firebaseapp.com",
    projectId: "medidoc-4b4c6",
    storageBucket: "medidoc-4b4c6.appspot.com",
    messagingSenderId: "1028116359025",
    appId: "1:1028116359025:web:ea15c043f39769eec1b8d0"
 });

const database = firebaseApp.firestore();
const auth = firebaseApp.auth();

const register = () =>{
    email = document.getElementById("emailS");
    password = document.getElementById("passwordS");

    console.log("FIRE", email, password);
    auth.createUserWithEmailAndPassword(email, password)
    .then( (response) => {
        console.log(response);
    })
    .catch( (e) => {
        console.log(e.message);
    });
}