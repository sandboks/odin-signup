var p2attempted = false;

var submitButton = document.querySelector("#submitButton");
submitButton.addEventListener("click",  () => {
    ValidatePasswords();
});

var userfield = document.querySelector("#username");
var emailfield = document.querySelector("#email");
var p1field = document.querySelector("#user_password1");
var p2field = document.querySelector("#user_password2");

var tickboxes = document.querySelectorAll("#checkbox");
var errorFields = document.querySelectorAll(".errorMessage");


var errorMessages = [
    "Please enter a username", 
    "Please enter a valid email address", 
    "Please enter a password", 
    "Passwords do not match"
]


userfield.addEventListener("blur", () => {
    tickboxes[0].textContent = userfield.checkValidity() ? "✔" : "☐";
});
emailfield.addEventListener("blur", () => {
    tickboxes[1].textContent = emailfield.checkValidity() ? "✔" : "☐";
});
p1field.addEventListener("blur", () => {
    ValidatePasswords();
});
p2field.addEventListener("blur", () => {
    ValidatePasswords();
});

p2field.addEventListener("focus", () => {
    p2attempted = true;
});

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

    if (!(match)) {
        //alert("passwords don't match");
        //p1field.setCustomValidity("Passwords must match!");
    }


    
    return (match);
}