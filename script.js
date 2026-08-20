const signUpButton = document.getElementById("signUpButton");
const signInButton = document.getElementById("signInButton");

const signInFormContainer = document.getElementById("signIn");
const signUpFormContainer = document.getElementById("signup");

const pixelGrid = document.getElementById("pixelGrid");

let isAnimating = false;


/* ==============================
   SHOW SIGN UP
================================= */

signUpButton.addEventListener("click", function () {

    if (isAnimating) return;

    switchForm(
        signInFormContainer,
        signUpFormContainer
    );

});


/* ==============================
   SHOW SIGN IN
================================= */

signInButton.addEventListener("click", function () {

    if (isAnimating) return;

    switchForm(
        signUpFormContainer,
        signInFormContainer
    );

});


/* ==============================
   PIXEL SWITCH FUNCTION
================================= */

function switchForm(currentForm, nextForm) {

    isAnimating = true;

    const pixelSize = 40;

    const width = window.innerWidth;
    const height = window.innerHeight;

    const columns = Math.ceil(width / pixelSize);
    const rows = Math.ceil(height / pixelSize);


    pixelGrid.innerHTML = "";

    pixelGrid.style.display = "block";


    /* Create pixels */

    for (let row = 0; row < rows; row++) {

        for (let column = 0; column < columns; column++) {

            const pixel = document.createElement("div");

            pixel.classList.add("pixel-swap__pixel");

            pixel.style.width = pixelSize + "px";
            pixel.style.height = pixelSize + "px";

            pixel.style.left = column * pixelSize + "px";
            pixel.style.top = row * pixelSize + "px";


            /* Random animation delay */

            const delay = Math.random() * 500;

            pixel.style.animationDelay = delay + "ms";


            pixelGrid.appendChild(pixel);

        }

    }


    /* Animate pixels */

    setTimeout(() => {

        pixelGrid.classList.add("animate");

    }, 50);


    /* Switch form in middle of animation */

    setTimeout(() => {

        currentForm.classList.remove("active");

        nextForm.classList.add("active");

    }, 400);


    /* Finish animation */

    setTimeout(() => {

        pixelGrid.classList.remove("animate");

        pixelGrid.style.display = "none";

        pixelGrid.innerHTML = "";

        isAnimating = false;

    }, 1200);

}
