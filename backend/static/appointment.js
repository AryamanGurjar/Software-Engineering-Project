const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC44NyhleygJpZM6JS7jdcGgb2utJbP5Ic",
    authDomain: "medidoc-4b4c6.firebaseapp.com",
    projectId: "medidoc-4b4c6",
    storageBucket: "medidoc-4b4c6.appspot.com",
    messagingSenderId: "1028116359025",
    appId: "1:1028116359025:web:ea15c043f39769eec1b8d0"
 });

const database = firebaseApp.firestore();
// const auth = firebaseApp.auth();

const signUp = () => {
    const name = document.getElementById("name").value;
    const date = document.getElementById("date").value;
    const symptoms = document.getElementById("symptoms").value;
    const time = document.getElementById("date").value;
    const duration = document.getElementById("duration").value;

    const obj = {
        name: name,
        date: date,
        symptoms: symptoms,
        time: time,
        duration: duration
    };

    database.collection("userData").add(obj).then((response)=>{
        console.log(response.id);
    }).catch((e)=>{
        console.log(e);
        console.log(e.message);
    });

}

const fetch = () => {
    database.collection("userData").get().then((response) => {
        response.forEach((doc) => {
            console.log("Patient name: " + doc.data().name + "\nDate: " + doc.data().date + "\nHaving symptoms: " + doc.data().symptoms);
        });
    });
}

