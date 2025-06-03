elements = document.querySelectorAll('.element');
elements.forEach((element) => {
  element.addEventListener('click', () => {
    element.classList.toggle('active');
  });
});