function validate(e) {
    var yname = document.getElementById("yname");
    var email = document.getElementById("email");
    var subject = document.getElementById("subject");
    var com = document.getElementById("com");

    var Mailreg = /^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+([;.](([a-zA-Z0-9_\-\.]+)@{[a-zA-Z0-9_\-\.]+0\.([a-zA-Z]{2,5}){1,25})+)*$/;


    if (yname.value == "") {
        yname.style.border = "red solid 3px";
        e.preventDefault();
    }

    if (subject.value == "") {
        subject.style.border = "red solid 3px";
        e.preventDefault();
    }

    if (com.value == "") {
        com.style.border = "red solid 3px";
        e.preventDefault();
    }

    if (!email.value.match(Mailreg)) {
        document.getElementById("email").style.border = "red solid 3px";
        e.preventDefault();
    }

    /* ------------------  return values after validate  ---------------- */

    if (!yname.value == "") {
        yname.style.border = "green solid 3px";
    }

    if (!subject.value == "") {
        subject.style.border = "green solid 3px";
    }

    if (!com.value == "") {
        com.style.border = "green solid 3px";
    }

    if (email.value.match(Mailreg)) {
        document.getElementById("email").style.border = "green solid 3px";
    }
}