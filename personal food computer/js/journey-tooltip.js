/*Journey tooptip js for bootstrap courtsey of 
http://www.dynamicdrive.com/forums/showthread.php?68412-Image-shown-when-mouse-over-text */


/*$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
});


$('a[data-toggle="tooltip"]').tooltip({
    animated: 'fade',
    placement: 'bottom',
    html: true
});*/

function toggleMe() {
    var id = document.getElementById('Image1');
    if(id.style.display == "block") {
    id.style.display = "none";
    } else {
    id.style.display = "block";
    }
}

/*http://embed.plnkr.co/nhlFPz

('a[rel=popover]').popover({
  html: true,
  trigger: 'hover',
  placement: 'bottom',
  content: function(){return '<img src="'+$(this).data('img') + '" />';}
});*/


