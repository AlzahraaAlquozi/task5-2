const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentSlide = 0;

// Show the initial slide
slides[currentSlide].classList.add('active');

// Function to show the next slide
function nextSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}

// Function to show the previous slide
function prevSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
}

// Event listeners for next and previous buttons
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);
const dots = document.querySelectorAll('.slider-dot');

// Function to show the slide at the given index
function showSlide(index) {
  slides[currentSlide].classList.remove('active');
  dots[currentSlide].classList.remove('active');
  slides[index].classList.add('active');
  dots[index].classList.add('active');
  currentSlide = index;
}

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => showSlide(index));
});


function next() {
  const nextSlideIndex = (currentSlide + 1) % slides.length;
  showSlide(nextSlideIndex);
}


function pre() {
  const prevSlideIndex = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(prevSlideIndex);
}

nextBtn.addEventListener('click', next);
prevBtn.addEventListener('click', pre);