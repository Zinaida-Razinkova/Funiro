const headerElement = document.querySelector('.header');
const headerHeight = headerElement.offsetHeight;

window.addEventListener('scroll', () => {
  if (window.scrollY > headerHeight) {
    headerElement.classList.add('_scroll');
  } else {
    headerElement.classList.remove('_scroll');
  }
});