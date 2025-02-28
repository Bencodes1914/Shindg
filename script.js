document.addEventListener('DOMContentLoaded', function() {
 initSlider('slider1', 3000);
 initSlider('slider2', 4000);
 initSlider('slider3', 5000);
 
 function initSlider(sliderId, interval) {
     const sliderContainer = document.getElementById(sliderId);
     const slides = sliderContainer.querySelectorAll('.slide');
     const dots = sliderContainer.querySelectorAll('.nav-dot');
     const prevBtn = sliderContainer.querySelector('.prev');
     const nextBtn = sliderContainer.querySelector('.next');
     
     let currentIndex = 0;
     let slideInterval;

     function changeSlide(index) {
         slides.forEach(slide => slide.classList.remove('active'));
         dots.forEach(dot => dot.classList.remove('active'));

         currentIndex = index;
         slides[currentIndex].classList.add('active');
         dots[currentIndex].classList.add('active');
     }
     
     function nextSlide() {
         let nextIndex = (currentIndex + 1) % slides.length;
         changeSlide(nextIndex);
     }

     function prevSlide() {
         let prevIndex = (currentIndex - 1 + slides.length) % slides.length;
         changeSlide(prevIndex);
     }
     
     function startSlideshow() {
         slideInterval = setInterval(nextSlide, interval);
     }

     function stopSlideshow() {
         clearInterval(slideInterval);
     }

     dots.forEach(dot => {
         dot.addEventListener('click', function() {
             let index = parseInt(this.getAttribute('data-index'));
             changeSlide(index);

             stopSlideshow();
             startSlideshow();
         });
     });

     prevBtn.addEventListener('click', function() {
         prevSlide();

         stopSlideshow();
         startSlideshow();
     });
     
     nextBtn.addEventListener('click', function() {
         nextSlide();

         stopSlideshow();
         startSlideshow();
     });

     startSlideshow();
 }
});

document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('.search-input');
    
    searchInput.addEventListener('focus', function() {
      this.classList.add('expanded');
    });
    
    searchInput.addEventListener('blur', function() {
      if (this.value === '') {
        this.classList.remove('expanded');
      }
    });
  });