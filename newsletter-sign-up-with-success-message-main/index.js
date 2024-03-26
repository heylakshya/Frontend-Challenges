// form validation

const emailInput = document.getElementById("email");
const emailErrorLabel = document.getElementById("email-error-label")
const form = document.getElementById("email-form");

function validateInput(input) {
    const r = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    return r.test(input);
}

emailInput.addEventListener("input", (e) => {
    if(!validateInput(emailInput.value)){
        // invalid input
        console.log("invalid")
        emailInput.classList.add("error");
        emailErrorLabel.classList.remove("hide");
    } else {
        //valid input
        console.log("valid")
        emailInput.classList.remove("error");
        emailErrorLabel.classList.add("hide");
    }
})

form.addEventListener("submit", (e)=>{
    if(!validateInput(emailInput.value)){
        // invalid input
        emailInput.focus();
        emailInput.classList.add("error");
        emailErrorLabel.classList.remove("hide");
        e.preventDefault();
    }
})