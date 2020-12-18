let language = 'en'; 

function setLang(lang) {
    language = lang;
    localization();
}




(function() {
   
    localization();
 
 })()

function localization() {
    if (language == 'mk') {
        document.getElementById('loginText').innerText = 'Најавете се';
        document.getElementById('loginButton').innerText = 'Најавете се';
        document.getElementById('registerButton').innerText = 'Зачленете се';
        document.getElementById('or').innerText = 'Или';
        document.getElementById('emailField').placeholder = 'Вашата електронска пошта';
        document.getElementById('passwordField').placeholder = 'Вашата лозинка';

    }
    if (language == 'en') {
        document.getElementById('loginText').innerText = 'Login';
        document.getElementById('loginButton').innerText = 'Login';
        document.getElementById('registerButton').innerText = 'Register';
        document.getElementById('or').innerText = 'Or';
        document.getElementById('emailField').placeholder = 'Your email address';
        document.getElementById('passwordField').placeholder = 'Your password';

    }

}