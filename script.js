const emailError = "Make sure email is more than 3 characters and has @ and a .";
const passwordError = "Make sure password is more than 8 characters.";
const clearTxt = "All good to go!";

const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const emailErrorContainer = document.querySelector(".section-email span");
const passwordErrorContainer = document.querySelector(".section-password span");
const allClearContainer = document.querySelector(".form .clear");
const btnSubmit = document.querySelector('.btn-submit');
let emailClr;
let passClr;

emailInput.addEventListener("change",handleEmailChange);
passwordInput.addEventListener("change",handlePasswordChange);
btnSubmit.addEventListener('click',handleSubmit);


function handleEmailChange()
{
    const emailValue = this.value;
    emailErrorContainer.textContent  = emailErrorUtilHelper(emailValue) ? error(emailError , 'email') : clearError('email');
    checkAllClear(emailClr, passClr);
}

function handlePasswordChange()
{
    const passwordValue = this.value;
    passwordErrorContainer.textContent  = (passwordValue.length <= 8) ? error(passwordError,'password') : clearError('password');
    checkAllClear(emailClr, passClr);
}

function emailErrorUtilHelper(emailValue)
{
    if (emailValue.length <= 3 || !emailValue.includes("@") || !emailValue.includes(".")) return 1;
    return 0;
}

function error(errorTxt , type){

    type =='email' ? emailClr = false : passClr = false;
    return errorTxt;
}

function clearError(type)
{
    type =='email' ? emailClr = true : passClr = true;
    return '';
}

function checkAllClear(emailClr, passClr) {
  allClearContainer.textContent = (emailClr && passClr) ? clearTxt : '';
}

function handleSubmit(e){
    e.preventDefault();
    confirm('Are You Sure!') ? alert('successful signup!') : reset();
    window.location.reload();
}

const reset = ()=>  emailInput.value = passwordInput.value = '';