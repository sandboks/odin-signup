var p2attempted = false;

var submitButton = document.querySelector("#submitButton");

var form = document.querySelector('#signupForm');

var userfield = document.querySelector("#username");
var emailfield = document.querySelector("#email");
var p1field = document.querySelector("#user_password1");
var p2field = document.querySelector("#user_password2");
var agreeField = document.querySelector("#codeOfConduct");

var tickboxes = document.querySelectorAll("#checkbox");
var errorFields = document.querySelectorAll(".errorMessage");


var errorMessages = [
    "Please enter a username", 
    "Please enter a valid email address", 
    "Please enter a password", 
    "Passwords do not match"
]

userfield.addEventListener("input", () => {
    tickboxes[0].textContent = userfield.checkValidity() ? "✔" : "☐";
    ValidateForm();
});
emailfield.addEventListener("input", () => {
    tickboxes[1].textContent = emailfield.checkValidity() ? "✔" : "☐";
    ValidateForm();
});
p1field.addEventListener("blur", () => {
    ValidatePasswords();
    ValidateForm();
});
p2field.addEventListener("blur", () => {
    ValidatePasswords();
    ValidateForm();
});
p2field.addEventListener("focus", () => {
    p2attempted = true;
});
agreeField.addEventListener("input", () => {
    ValidateForm();
});

function ValidateForm() {
    var valid = (userfield.checkValidity() && emailfield.checkValidity() && ValidatePasswords() && agreeField.checked);
    submitButton.className = (valid ? "" : "buttonOff");
}

function ValidatePasswords() {
    var match = false;
    
    //p1 = document.querySelector("password1");
    var p1 = document.getElementById('user_password1').value;
    var p2 = document.getElementById('user_password2').value;

    match = (p1 === p2);


    tickboxes[2].textContent = p1field.checkValidity() ? "✔" : "☐";

    //p1field.setCustomValidity((match ? "" : "mismatch"));
    if (p2attempted) {
        p2field.setCustomValidity((match ? "" : "password mismatch"));
        tickboxes[3].textContent = match && (p2.length > 0) ? "✔" : "☐";
        errorFields[3].textContent = match ? "" : errorMessages[3];
    }
    
    return (match && p1.length > 0);
}

// have the submit button greyed out by default
ValidateForm();

form.addEventListener('submit', function(event)
{
    window.open('https://www.youtube.com/watch?v=QFBz0B4osKQ', '_blank');
}); 