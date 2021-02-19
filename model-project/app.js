const button = document.querySelector('.button');
const closeBtn = document.querySelector('.close-btn');
const modal = document.querySelector('.modal');

button.addEventListener('click', () => {
  modal.style.display = 'block';
})

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
})
