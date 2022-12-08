const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC44NyhleygJpZM6JS7jdcGgb2utJbP5Ic",
    authDomain: "medidoc-4b4c6.firebaseapp.com",
    projectId: "medidoc-4b4c6",
    storageBucket: "medidoc-4b4c6.appspot.com",
    messagingSenderId: "1028116359025",
    appId: "1:1028116359025:web:ea15c043f39769eec1b8d0"
 });

const database = firebaseApp.firestore();


    database.collection("DocData").get().then((response) => {
        document.getElementById("text").innerText+=  "Doctor on duty \t \t \t Date";
        response.forEach((doc) => {
            console.log("Doctor name: " + doc.data().name + "\nDate: " + doc.data().date);
            document.getElementById("text").innerText += "\n " +  doc.data().name;
            document.getElementById("text").innerText+= "\t\t " + doc.data().date;
        });
    });


