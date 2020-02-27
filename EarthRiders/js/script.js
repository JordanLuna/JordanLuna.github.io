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


        // $(document).ready(function () {
        //     var $selected = $('.selected');
        //     var $start = $('.start');
        //     var $toggleMode = $('.toggleMode');

        //     var $some_datepicker = $('.some_datepicker');
        //     $some_datepicker.datepicker();
        //     var datepicker = jQueryDatepicker.data($some_datepicker);

        //     var date = new Date();

        //     $some_datepicker.on(jQueryDatepicker.event('date_selected'), function (event, date) {
        //         if (date.mode == 'date') {
        //             console.log('date selected:', date);
        //         } else if (date.mode == 'start_date') {
        //             console.log('start date selected:', date);
        //         }

        //         if (datepicker.isStartDateSelected()) {
        //             $start.show().html('<b>start date:</b> '+date.start_date.date.toString());
        //         }

        //         $selected.show().html('<b>date:</b> '+date.date.toString());
        //     });

        //     // If you need a date range
        //     datepicker.setStartDate({
        //         year: 2017,
        //         month: date.getMonth()+1,
        //         day: 4
        //     });

        //     datepicker.setDate({
        //         year: 2017,
        //         // jquery.datepicker accepts first month as 1
        //         // (built-in Date() class accepts first month as 0)
        //         month: date.getMonth()+1,
        //         day: 21
        //     });

        //     $toggleMode.on('click', function (event) {
        //         datepicker.toggleMode();

        //         if (datepicker.getMode() == 'date') {
        //             $toggleMode.html('toggle start date selection mode');
        //         } else {
        //             $toggleMode.html('toggle date selection mode');
        //         }
        //     });
        // });

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