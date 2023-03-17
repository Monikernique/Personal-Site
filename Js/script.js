
$(window).scroll(function() {
    // Get scroll position
    var s = $(window).scrollTop(),
    // scroll value and opacity
    opacityVal = (s / 600.0);
    // opacity value 0% to 100%
    $('.blurred-img').css('opacity', opacityVal);
});


function openForm() {
  document.getElementById("myForm").style.display = "block";
  
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";

}
