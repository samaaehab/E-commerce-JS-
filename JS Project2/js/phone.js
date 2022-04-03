// var btnvar1 = document.getElementById("btnh");

// function Toggle1(id) {
//      var btnvar1  =document.getElementById(id)
//     if (btnvar1.style.color == "red") {
//         btnvar1.style.color = "grey"
//     } else {
//         btnvar1.style.color = "red"

//     }
// }

function favChange(id, card, name) {
    // document.getElementById("fav").style;

    document.getElementById(id).style.color = "red";

    var card = document.getElementById(card).innerHTML;
    localStorage.setItem(name, card);
    // console.log(card);



}

function cartChange(id, card, name) {
    // document.getElementById("fav").style;

    //document.getElementById(id).style.color = "red";

    var card = document.getElementById(card).innerHTML;
    localStorage.setItem(name, card);
    // console.log(card);



}





//Email regular expression 

const email = document.getElementById('email');
let Uname = document.getElementById('name');
let validEmail = false;

//  login form validation
function verifyPassword() {
    var pw = document.getElementById("pswd").value;

    if (Uname.value == "") {
        document.getElementById("message").innerHTML = "**Fill the Username please!";
        return false;
    }

    //check empty password field  
    if (pw == "") {
        document.getElementById("message").innerHTML = "**Fill the password please!";
        return false;
    }

    //minimum password length validation  
    if (pw.length < 8) {
        document.getElementById("message").innerHTML = "**Password length must be atleast 8 characters";
        return false;
    }

    //maximum length of password validation  
    if (pw.length > 15) {
        document.getElementById("message").innerHTML = "**Password length must not exceed 15 characters";
        return false;
    }
    if (Uname.value != "" && pw != "" && pw.length > 8 && pw.length < 15) {

        // document.getElementById("message").style.color = "green";
        document.getElementById("message").innerHTML = "";
    }

    //email.addEventListener('blur', (e) => {
    //e.preventDefault();
    let regularExpression = /^([_\-\.0-9a-zA-Z]+)@([0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    if (regularExpression.test(email.value)) {
        email.classList.add('sucess');
        email.classList.remove('warning');
        email.nextElementSibling.nextElementSibling.style.display = "none";
        validEmail = true;
    } else {
        validEmail = false;
        email.classList.add('warning');
        email.classList.remove('sucess');
        email.nextElementSibling.nextElementSibling.style.display = "block";
        return false;
    }
    //})

}