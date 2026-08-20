const signUpButton = document.getElementById("signUpButton");

const signInButton = document.getElementById("signInButton");

const signInFormContainer = document.getElementById("signIn");

const signUpFormContainer = document.getElementById("signup");


// Show Sign Up page

signUpButton.addEventListener("click", function () {

    signInFormContainer.style.display = "none";

    signUpFormContainer.style.display = "block";

});


// Show Sign In page

signInButton.addEventListener("click", function () {

    signInFormContainer.style.display = "block";

    signUpFormContainer.style.display = "none";

});
