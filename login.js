document.addEventListener("DOMContentLoaded", () => {
    const sgninBtnLink = document.querySelector(".singin-btn-link");
    const sgnupBtnLink = document.querySelector(".singup-btn-link");
    const wrapper = document.querySelector(".wrapper");

    if (!sgninBtnLink || !sgnupBtnLink || !wrapper) {
        console.error("One or more elements were not found!");
    } else {
        sgnupBtnLink.addEventListener("click", () => {
            wrapper.classList.toggle("active");
        });

        sgninBtnLink.addEventListener("click", () => {
            wrapper.classList.toggle("active");
        });
    }
});


  

///======  the back errow sectin =======>>> ///
             





document.addEventListener("DOMContentLoaded", () => {
    // Back Arrow redirect
    const backArrow = document.querySelector(".back-arrow");
    if (backArrow) {
        backArrow.addEventListener("click", (event) => {
            event.preventDefault();
            window.location.href = "index.html"; // Redirect to index.html
        });
    }

    // ============> Form Validation for login =============> ///
    const loginForm = document.getElementById("forms");
    const username = document.getElementById("Username");
    const password = document.getElementById("password");
    const errorElement = document.querySelector(".errors");

    loginForm.addEventListener("submit", (event) => {
        let messages = [];

        // Clear previous error messages
        errorElement.innerText = "";

        // Username and password validation
        if (!username.value) {
            messages.push("Username is required");
        }

        if (!password.value) {
            messages.push("Password is required");
        } else if (password.value.length < 8) {
            messages.push("Password must be at least 8 characters long");
        } else if (password.value.length > 20) {
            messages.push("Password must be less than 20 characters long");
        }
        else if(password.value=="password"){
            messages.push("Password can't be password");
        }

        
        if (messages.length > 0) {
            event.preventDefault();
            errorElement.innerText = messages.join(", ");
        }
        
    });







    // ==========>>> Sign-Up Form Validation section =========>> //





const signUpForm = document.getElementById("sign-up-form");
const signUpUsername = document.getElementById("sign-up-username");
const signUpEmail = document.getElementById("sign-up-email");
const signUpPassword = document.getElementById("sign-up-password");
const signUpConfirmPassword = document.getElementById("sign-up-confirm-password");

const signUpUsernameError = signUpUsername.nextElementSibling;
const signUpEmailError = signUpEmail.nextElementSibling;
const signUpPasswordError = signUpPassword.nextElementSibling;
const signUpConfirmPasswordError = signUpConfirmPassword.nextElementSibling;





signUpForm.addEventListener("submit", (event) => {
    let messages = [];

    [signUpUsernameError, signUpEmailError, signUpPasswordError, signUpConfirmPasswordError]
        .forEach(el => el.innerText = "");

                                        



                 // ========== checking the if the password is valid or? ====//








    if (!signUpUsername.value) {
        messages.push("Username is required");
        signUpUsernameError.innerText = "Username is required";
    }

    if (!signUpEmail.value) {
        messages.push("Email is required");
        signUpEmailError.innerText = "Email is required";
    }

    if (!signUpPassword.value) {
        messages.push("Password is required");
        signUpPasswordError.innerText = "Password is required";
    } else if (signUpPassword.value.length < 8 || signUpPassword.value.length > 20) {
        messages.push("Password must be between 8 and 20 characters");
        signUpPasswordError.innerText = "Password must be between 8 and 20 characters";
    }

    if (signUpPassword.value !== signUpConfirmPassword.value) {
        messages.push("Passwords do not match");
        signUpConfirmPasswordError.innerText = "Passwords do not match";
    }

    // Display errors and prevent form submission
    if (messages.length > 0) {
        event.preventDefault();
    }
});






                           // ===== the input ones just like when we enter valid password! ====//
                           



signUpPassword.addEventListener("input", () => {
    if (!signUpPassword.value) {
        signUpPasswordError.innerText = "Password"; 
    } else if (signUpPassword.value.length >= 8 && signUpPassword.value.length <= 20) {
        signUpPasswordError.innerText = ""; 
    } else {
        signUpPasswordError.innerText = "Password must be between 8 and 20 characters"; 
    }
});                      
signUpConfirmPassword.addEventListener("input", () => {
    if (!signUpConfirmPassword.value) {
        signUpConfirmPasswordError.innerText = "Confirm your password";
    } else if (signUpPassword.value === signUpConfirmPassword.value) {
        signUpConfirmPasswordError.innerText = "";
    } else {
        signUpConfirmPasswordError.innerText = "Passwords do not match";
    }
});


    
});
