function favChange(id, card, name) {
    // document.getElementById("fav").style;

    document.getElementById(id).style.color = "red";

    var card = document.getElementById(card).innerHTML;
    localStorage.setItem(name, card);
    // console.log(card);



}

function cartChange(id, card, name) {

    var card = document.getElementById(card).innerHTML;
    localStorage.setItem(name, card);
    // console.log(card);



}