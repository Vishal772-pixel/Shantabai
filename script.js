let currentSlide = 0;

function showSlides() {
    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${(index - currentSlide) * 100}%)`;
    });
}

setInterval(() => {
    const slides = document.querySelectorAll('.slide');
    currentSlide = (currentSlide + 1) % slides.length;
    showSlides();
}, 3000);

showSlides();
      // Get the modal
      var modal = document.getElementById("myModal");

      // Get the button that opens the modal
      var btn = document.getElementById("openModal");

      // Get the <span> element that closes the modal
      var span = document.getElementById("closeModal");

      // When the user clicks the button, open the modal 
      btn.onclick = function() {
          modal.style.display = "block";
      }

      // When the user clicks on <span> (x), close the modal
      span.onclick = function() {
          modal.style.display = "none";
      }

      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function(event) {
          if (event.target == modal) {
              modal.style.display = "none";
          }
          const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.slide');
let index = 0;

document.querySelector('.next-btn').addEventListener('click', () => {
    // Increase index and loop back if it exceeds the slide count
    index = (index + 1) % slides.length;
    carousel.style.transform = `translateX(${-index * 100}%)`;
});

document.querySelector('.prev-btn').addEventListener('click', () => {
    // Decrease index and loop back to the last slide if it goes below 0
    index = (index - 1 + slides.length) % slides.length;
    carousel.style.transform = `translateX(${-index * 100}%)`;
});
$(document).ready(function(){
    $('#carouselExampleIndicators').carousel({
        interval: 2000 // Change slide every 2 seconds
    });

    // Example: Add event listeners for the next/prev buttons
    $('.carousel-control-prev').click(function() {
        $('#carouselExampleIndicators').carousel('prev');
    });

    $('.carousel-control-next').click(function() {
        $('#carouselExampleIndicators').carousel('next');
    });
});

