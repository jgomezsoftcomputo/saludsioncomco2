var slideIndex = 0;

function carousel() {
    var x = document.getElementsByClassName("mySlides");
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    showDivs(slideIndex);
    setTimeout(carousel, 5000); // Change image every 5 seconds
}

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if(x && dots && x.length > 0){
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" w3-white", "");
    }
    if(x[slideIndex-1]){
      x[slideIndex-1].style.display = "block";
      x[slideIndex-1].style.webkitAnimationName= "fadeOut";
      x[slideIndex-1].style.webkitAnimationDuration= "2s";  
    }
    if(dots[slideIndex-1]){
      dots[slideIndex-1].className += " w3-white";
    }
  }
}