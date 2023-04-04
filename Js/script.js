/*var images = ['bg_01.jpg',
          'bg_02.jpg', 
          'bg_03.jpg', 
          'bg_04.jpg', 
          'bg_05.jpg', 
          'bg_06.jpg', 
          'bg_07.jpg', 
          'bg_08.jpg', 
          'bg_09.jpg', 
          'bg_10.jpg',
          'bg_11.jpg',
          "bg_12.jpg",
          "bg_13.jpg",
          "bg_14.jpg",];
$('#bg').css({'background-image' : 'url(images/' + images[Math.floor(Math.random() * images.length)] + ')'});*/



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




/*

  window.close()
 click anywhere outside of form

  */