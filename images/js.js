// Получаем необходимые элементы со страницы
const slideshowContainer = document.querySelector('.slideshow-container');
const slideshow = document.querySelector('.slideshow');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

// Определяем текущий слайд
let currentSlide = 0;

// Слушаем клики на кнопки
prevBtn.addEventListener('click', () => {
  currentSlide--;
  showSlide();
});

nextBtn.addEventListener('click', () => {
  currentSlide++;
  showSlide();
});

// Функция показа нужного слайда
function showSlide() {
  // Получаем все слайды
  const slides = slideshow.querySelectorAll('img');
  // Если текущий слайд выходит за границы слайдов
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  } else if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  // Смещаем слайдер до нужного слайда
  slideshow.scroll({
    left: slides[currentSlide].offsetLeft,
    behavior: 'smooth'
  });
}

// Запускаем показ первого слайда
showSlide();