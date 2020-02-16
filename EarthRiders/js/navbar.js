
//For show/hide nav bar media queries

//Author: Jordan Luna  base code snippet : https://www.w3schools.com/howto/howto_js_topnav_responsive.asp

//Date: 14 June 2017
//filename: navbar.js

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */

"use strict";

//function myFunction() {
    //var x = document.getElementById("myTopnav");
    //if (x.className === "navbar") {
        //x.className += " responsive";
    //} else {
        //x.className = "navbar";
    //}
//}

/*back to top nav https://www.w3schools.com/howto/howto_js_scroll_to_top.asp */

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Chrome, Safari and Opera 
    document.documentElement.scrollTop = 0; // For IE and Firefox
}