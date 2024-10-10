
document.getElementById('stopAnimation').addEventListener('click', function() {
    const typingElement = document.querySelector('.typing');
    typingElement.style.animation = 'none'; // Stop the animation
});
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

 
document.querySelectorAll('.service-box button').forEach(button => {
    button.addEventListener('click', function() {
        this.classList.add('clicked'); // Add clicked class on click
        setTimeout(() => {
            this.classList.remove('clicked'); // Remove after animation
        }, 300); // Duration of the animation
    });
});
$(document).ready(function(){
    // Enable auto sliding every 2 seconds
    $('#carouselExampleIndicators').carousel({
        interval: 2000 // Change slide every 2 seconds
    });

    // Event listeners for the next/prev buttons
    $('.carousel-control-prev').click(function() {
        $('#carouselExampleIndicators').carousel('prev');
    });

    $('.carousel-control-next').click(function() {
        $('#carouselExampleIndicators').carousel('next');
    });
});


