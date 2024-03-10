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
  console.log(element.childNodes);

   for (let i = 0; i < element.childNodes.length; (i++)){
    if (element.childNodes[i].nodeName != "#text" && element.childNodes[i].nodeName != "#comment")
    {
      if(element.childNodes[i].classList.contains("gi")){
        element.childNodes[i].classList.toggle("closed");
      }
      
     console.log(i);
    }
     
    }
}

// add event listener to close and open gear dropdown on click
for (let i = 0; i < document.getElementsByClassName("dropdown").length; i++) {
  ass = 
  console.log('dropdown' + (i+1));
  document.getElementById("dropdownButton" + (i+1)).addEventListener("click", function() {
    toggleDropdown(document.getElementById("dropdown" + (i+1)));}); 

  toggleDropdown(document.getElementById("dropdown" + (i+1)));
} 
