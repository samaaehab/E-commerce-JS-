// classname of delete button(icon) in fav page
var xbtnFav = document.getElementsByClassName('fav');
// classname of delete button(icon) in cart page
var xbtnCart = document.getElementsByClassName('cart');

//to get local storage by key
// var items = localStorage.getItem('');

// delete from fav function
function delFav(x) {
    return function() {
        var element = this;
        keys = Object.keys(localStorage)
            //  console.log(keys);
            // console.log(keys[x]);
            // console.log(element.previousSibling.previousSibling.children[1].getElementsByTagName("h5")[0].innerHTML);

        //removing item from local storage using its key
        localStorage.removeItem(keys[x]);
        //remove styling from orgin page
        element.parentElement.remove();

    };
}


// delete from cart function
var delCart = function(x) {
    return function() {
        var element = this;
        keys = Object.keys(localStorage)

        //removing item from local storage using its key
        localStorage.removeItem(keys[x]);
        //remove styling from orgin page
        element.parentElement.remove();

    };
}

//event listener for all x button in cart page
for (var i = 0; i < xbtnCart.length; i++) {
    // console.log(xbtnCart[i]);
    xbtnCart[i].addEventListener('click', delFav(i), false)
        //xbtnCart[i].i = i;
}

//event listener for all x button in fav page
for (var i = 0; i < xbtnFav.length; i++) {
    xbtnFav[i].addEventListener('click', delCart(i), false)
}