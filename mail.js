// ================================
// FIREBASE CONFIGURATION
// ================================

const firebaseConfig = {
    apiKey: "AIzaSyDl69Hd_CJt-Vew-S1VstBsivRKL6C3YzI",
    authDomain: "ashish-7381f.firebaseapp.com",
    projectId: "ashish-7381f",
    storageBucket: "ashish-7381f.firebasestorage.app",
    messagingSenderId: "339348647187",
    appId: "1:339348647187:web:80107816e9cdb282853ee6",
    measurementId: "G-GGSW2CXQ50",

    // IMPORTANT:
    // Replace this with the EXACT URL from
    // Firebase Console -> Realtime Database
    databaseURL: "https://ashish-7381f-default-rtdb.asia-southeast1.firebasedatabase.app/"
};


// ================================
// INITIALIZE FIREBASE
// ================================

firebase.initializeApp(firebaseConfig);


// ================================
// FIREBASE SERVICES
// ================================

const auth = firebase.auth();
const database = firebase.database();


// ================================
// SIGN UP
// ================================

const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", async function (e) {

    e.preventDefault();

    // Get form values
    const fName = document.getElementById("fName").value.trim();
    const lName = document.getElementById("lName").value.trim();
    const email = document.getElementById("signupEmail").value.trim();
    const password = document.getElementById("signupPassword").value;


    try {

        console.log("Creating user...");


        // Create user using Firebase Authentication
        const userCredential =
            await auth.createUserWithEmailAndPassword(email, password);


        // Get logged-in user
        const user = userCredential.user;


        console.log("Authentication successful!");
        console.log("User UID:", user.uid);


        // ================================
        // SAVE USER DATA TO REALTIME DATABASE
        // ================================

        await database.ref("users/" + user.uid).set({

            firstName: fName,

            lastName: lName,

            email: email,

            uid: user.uid,

            createdAt: new Date().toISOString()

        });


        console.log("Data successfully saved to Realtime Database!");


        // Show success message
        alert("Account created successfully!");


        // Clear form
        signupForm.reset();


        // Redirect after data is successfully saved
        window.location.href = "index2.html";


    } catch (error) {

        console.error("Signup Error:", error);

        alert("Signup Error: " + error.message);

    }

});


// ================================
// SIGN IN
// ================================

const signInForm = document.getElementById("signInForm");


signInForm.addEventListener("submit", async function (e) {

    e.preventDefault();


    // Get login values
    const email = document.getElementById("signInEmail").value.trim();
    const password = document.getElementById("signInPassword").value;


    try {

        console.log("Logging in...");


        // Login with Firebase Authentication
        const userCredential =
            await auth.signInWithEmailAndPassword(email, password);


        const user = userCredential.user;


        console.log("Login successful!");
        console.log("User UID:", user.uid);


        // Success message
        alert("Login successful!");


        // Clear form
        signInForm.reset();


        // Redirect to next page
        window.location.href = "index2.html";


    } catch (error) {

        console.error("Login Error:", error);

        alert("Login Error: " + error.message);

    }

});