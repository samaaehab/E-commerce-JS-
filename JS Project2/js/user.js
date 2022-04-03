if (!localStorage.getItem("firstName") === null || localStorage.getItem("lastName")) {
    var fname = localStorage.getItem("firstName");
    var lname = localStorage.getItem("lastName");
    document.getElementById("profile").innerHTML = "<div class='d-flex'><h3 class='me-3'>" + fname + " " + lname + "</h3>" + "<button class='btn btn-secondary' onclick='sOut()'>sign out</button> </div>";
}

function sOut() {
    localStorage.clear();
    document.getElementById("profile").innerHTML = "<li class='nav-item dropdown ms-4' id='profile'><a class='nav-link dropdown-toggle' href='#' id='navbarDropdown' role='button' data-bs-toggle='dropdown' aria-expanded='false'><i class='fas fa-user'></i></a><ul class='dropdown-menu' aria-labelledby='navbarDropdown'><li><a class='dropdown-item' href='./sigin.html'>Sign in</a></li><li><a class='dropdown-item' href='./register.html'>Register</a></li></ul></li>"
}