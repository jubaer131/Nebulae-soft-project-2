document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;

    setInterval(() => {
      // Remove 'active' class from the current slide
      slides[currentIndex].classList.remove('active');

      // Move to the next slide
      currentIndex = (currentIndex + 1) % slides.length;

      // Add 'active' class to the next slide
      slides[currentIndex].classList.add('active');
    }, 7000); // Each slide stays for 7 seconds
  });

  
  