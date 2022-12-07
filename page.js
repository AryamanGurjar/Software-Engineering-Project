const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC44NyhleygJpZM6JS7jdcGgb2utJbP5Ic",
    authDomain: "medidoc-4b4c6.firebaseapp.com",
    projectId: "medidoc-4b4c6",
    storageBucket: "medidoc-4b4c6.appspot.com",
    messagingSenderId: "1028116359025",
    appId: "1:1028116359025:web:ea15c043f39769eec1b8d0"
 });

const database = firebaseApp.firestore();


    database.collection("userData").get().then((response) => {
        response.forEach((doc) => {
            console.log("Patient name: " + doc.data().name + "\nDate: " + doc.data().date + "\nHaving symptoms: " + doc.data().symptoms);
            document.getElementById("text").innerText+=  doc.data().name;
        });
    });


