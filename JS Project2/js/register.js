function validate(e) {
    var phone = document.getElementById("phone");
    var fname = document.getElementById("fname");
    var lname = document.getElementById("lname");
    var mail = document.getElementById("email");
    var city = document.getElementById("city");
    var state = document.getElementById("state");
    var gender = document.getElementById("gender");

    var reg = /^\d{11}$/;
    var Mailreg = /^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+([;.](([a-zA-Z0-9_\-\.]+)@{[a-zA-Z0-9_\-\.]+0\.([a-zA-Z]{2,5}){1,25})+)*$/;

    localStorage.setItem("firstName", fname.value);
    localStorage.setItem("lastName", lname.value);






    if (fname.value == "") {
        fname.style.border = "red solid 3px";
        document.getElementById("fnameid").style.display = "block";
        e.preventDefault();
    }
    if (lname.value == "") {
        lname.style.border = "red solid 3px";
        document.getElementById("lnameid").style.display = "block";
        e.preventDefault();
    }


    if (!phone.value.match(reg)) {
        document.getElementById("phone").style.border = "red solid 3px";
        document.getElementById("phoneid").style.display = "block";
        e.preventDefault();

    }

    if (!mail.value.match(Mailreg)) {
        document.getElementById("email").style.border = "red solid 3px";
        document.getElementById("emailid").style.display = "block";
        e.preventDefault();

    }

    if (city.value == "") {
        city.style.border = "red solid 3px";
        document.getElementById("cityid").style.display = "block";
        e.preventDefault();
    }

    if (state.value == "") {
        state.style.border = "red solid 3px";
        e.preventDefault();
    }

    if (gender.value == "") {
        gender.style.border = "red solid 3px";
        e.preventDefault();
    }


    /* return values after validate */

    if (!fname.value == "") {
        fname.style.border = "green solid 3px";
        document.getElementById("fnameid").style.display = "none";
    }
    if (!lname.value == "") {
        lname.style.border = "green solid 3px";
        document.getElementById("lnameid").style.display = "none";
    }


    if (phone.value.match(reg)) {
        document.getElementById("phone").style.border = "green solid 3px";
        document.getElementById("phoneid").style.display = "none";
    }

    if (mail.value.match(Mailreg)) {
        document.getElementById("email").style.border = "green solid 3px";
        document.getElementById("emailid").style.display = "none";
    }

    if (!city.value == "") {
        city.style.border = "green solid 3px";
        document.getElementById("cityid").style.display = "none";
    }

    if (!state.value == "") {
        state.style.border = "green solid 3px";
    }

    if (!gender.value == "") {
        gender.style.border = "green solid 3px";
    }

    var fname = localStorage.getItem("firstName");
    var lname = localStorage.getItem("lastName");

    document.getElementById("profile").innerHTML = "<h5>" + fname + lname + "</h5>" + "<button class='btn btn-secondary' onclick='sOut()'>sign out</button>";


}



function sOut() {
    localStorage.clear();
    document.getElementById("profile").innerHTML = "<li class='nav-item dropdown ms-4' id='profile'><a class='nav-link dropdown-toggle' href='#' id='navbarDropdown' role='button' data-bs-toggle='dropdown' aria-expanded='false'><i class='fas fa-user'></i></a><ul class='dropdown-menu' aria-labelledby='navbarDropdown'><li><a class='dropdown-item' href='./sigin.html'>Sign in</a></li><li><a class='dropdown-item' href='./register.html'>Register</a></li></ul></li>"
}