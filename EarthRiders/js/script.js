//Jquery for Web Apps Earth Riders Site
//Author: Jordan Luna
//File name: script.js

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += "responsive";
    } else {
        x.className = "topnav";
    }
}

//social media button effects//
$(".twitter").hover(function () {
    $("#social-section").toggleClass("color-twitter")
});

$(".facebook").hover(function () {
    $("#social-section").toggleClass("color-facebook")
});

$(".googleplus").hover(function () {
    $("#social-section").toggleClass("color-googleplus")
});

$(".pinterest").hover(function () {
    $("#social-section").toggleClass("color-pinterest")
});

$(".dribbble").hover(function () {
    $("#social-section").toggleClass("color-dribbble")
});

$(".instagram").hover(function () {
    $("#social-section").toggleClass("color-instagram")
});


//back to top button w3schools

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}