var p2attempted = false;

var submitButton = document.querySelector("#testButton");
submitButton.addEventListener("click",  () => {
    ValidatePasswords();
});

var p1field = document.querySelector("#user_password1");
var p2field = document.querySelector("#user_password2");

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

    //p1field.setCustomValidity((match ? "" : "mismatch"));
    p2field.setCustomValidity((match ? "" : "mismatch"));

    if (!(match)) {
        //alert("passwords don't match");
        //p1field.setCustomValidity("Passwords must match!");
    }

    
    return (match);
}