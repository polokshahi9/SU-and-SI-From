let signupBtn = document.getElementById('signup_btn');
let signinBtn = document.getElementById('signin_btn');
let tittle = document.getElementById('tittle');
let nameField = document.getElementById('nameField');

signinBtn.onclick = function(){
    nameField.style.maxHeight = "0";
    tittle.innerHTML = "Sign In";
    signupBtn.classList.add("disable");
    signinBtn.classList.remove("disable");
    
}

signupBtn.onclick = function(){
    nameField.style.maxHeight = "60px";
    tittle.innerHTML = "Sign Up";
    signinBtn.classList.add("disable");
    signupBtn.classList.remove("disable");
    
}