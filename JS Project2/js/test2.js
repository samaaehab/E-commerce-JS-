for (var i = 0; i < localStorage.length; i++) {
    if (localStorage.key(i).search("Fav") != -1) {
        document.getElementById("elm").innerHTML += "<div class ='col-md-3'>" + localStorage.getItem(localStorage.key(i)) + "<button class='btn btn-danger fav'>Clear</button></div>";
    }
}


function omg() {
    localStorage.clear();
}