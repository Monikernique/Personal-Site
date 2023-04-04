
/*Background*/ 
$(window).scroll(function() {
    // Get scroll position
    var s = $(window).scrollTop(),
    // scroll value and opacity
    opacityVal = (s / 800.0);
    // opacity value 0% to 100%
    $('.blurred-img').css('opacity', opacityVal);
});

/*form*/
function openForm() {
  document.getElementById("myForm").style.display = "block";
  
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";

}

