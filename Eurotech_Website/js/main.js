document.addEventListener('DOMContentLoaded', () => {
  const testimonials = document.querySelectorAll('.testimonial');
  const sliderContainer = document.querySelector('.testimonial-slider');
  let currentIndex = 0;
  let intervalId;

  // Create navigation dots
  const sliderNav = document.createElement('div');
  sliderNav.className = 'slider-nav';
  testimonials.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.className = `slider-dot ${index === 0 ? 'active' : ''}`;
    dot.addEventListener('click', () => {
      stopSlider();
      showTestimonial(index);
      startSlider();
    });
    sliderNav.appendChild(dot);
  });
  sliderContainer.appendChild(sliderNav);

  function updateDots() {
    const dots = document.querySelectorAll('.slider-dot');
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentIndex);
    });
  }

  function showTestimonial(index) {
    testimonials.forEach((testimonial) => {
      testimonial.classList.remove('active');
    });
    testimonials[index].classList.add('active');
    currentIndex = index;
    updateDots();
  }

  function nextTestimonial() {
    currentIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(currentIndex);
  }

  function startSlider() {
    intervalId = setInterval(nextTestimonial, 3000); // Changed to 3 seconds
  }

  function stopSlider() {
    clearInterval(intervalId);
  }

  // Initialize the slider
  showTestimonial(0);
  startSlider();

  // Pause on hover
  sliderContainer.addEventListener('mouseenter', stopSlider);
  sliderContainer.addEventListener('mouseleave', startSlider);
});

document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    navToggle.classList.toggle('active');
  });
});