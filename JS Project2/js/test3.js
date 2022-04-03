for (var i = 0; i < localStorage.length; i++) {
    if (localStorage.key(i).search("Cart") != -1) {
        document.getElementById("elm").innerHTML += "<div class ='col-md-3'>" + localStorage.getItem(localStorage.key(i)) + "<button class='btn btn-danger cart'>Clear</button></div>";
    }
}

function omg() {
    localStorage.clear();
}