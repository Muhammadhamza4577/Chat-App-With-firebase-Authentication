import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyBpyeYKIdlcvg6gQ7URIz5-Vpvs0UOjFRM",
  authDomain: "thechatprofiler.firebaseapp.com",
  projectId: "thechatprofiler",
  storageBucket: "thechatprofiler.appspot.com",
  messagingSenderId: "289483327422",
  appId: "1:289483327422:web:b7165b2681b62906581bef",
  measurementId: "G-BPB8MVL4JY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

let register_btn = document.getElementById("register_btn");
register_btn.addEventListener("click", function(){

    let email = document.getElementById("email");
    let password = document.getElementById("password");
    
    createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log("user==>", user);
        swal({
            title: "Successfully Register!",
            text: "You May login Now!",
            icon: "success",
            button: "ok!",
          });
        // ...
      })
       .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log("error=>", errorMessage);
        swal ( "Oops" ,  "Something went wrong!" ,  "error");
        // ..
        });
});
let login_btn = document.getElementById("login_btn");
login_btn.addEventListener("click", function(){

    let login_email = document.getElementById("login_email");
    let login_password = document.getElementById("login_password");

    signInWithEmailAndPassword(auth, login_email.value, login_password.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;

    console.log("user==>", user);
    swal({
        title: "Successfully Register!",
        text: "You May login Now!",
        icon: "success",
        button: "ok!",
      });
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    console.log("error=>", errorMessage);
    swal ( "Oops" ,  "Something went wrong!" ,  "error");
  });
});
