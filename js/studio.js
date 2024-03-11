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


        element.classList.toggle("closed");
        
 
}

// add event listener to close and open gear dropdown on click
for (let i = 0; i < document.getElementsByClassName("dropdown").length; i++) {
  ass = 

  document.getElementById("dropdownButton" + (i+1)).addEventListener("click", function() {
    toggleDropdown(document.getElementById("dropdown" + (i+1)));

    button = document.getElementById("dropdownButton" + (i+1));
    console.log(button);
    
    button.classList.toggle("down");
      
    
  }); 

  toggleDropdown(document.getElementById("dropdown" + (i+1)));
} 
