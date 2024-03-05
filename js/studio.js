let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function toggleDropdown(element) {
  console.log(element);
  element.classList.toggle("closed");
}

// add event listener to close and open gear dropdown on click
var gear = document.getElementsByClassName("dropdown")
for (var i = 0; i < gear.length; i++) {
  toggleDropdown(gear[i]);


    gear[i].addEventListener("click", (event) => {
      console.log(event)
      toggleDropdown(event.srcElement);
    });
  
}
