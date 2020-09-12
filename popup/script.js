const openBtn = document.getElementById('open');
const closeBtn = document.getElementById('close');
const container = document.getElementById('container');

openBtn.addEventListener('click', () => {
    container.classList.add('active');
});
closeBtn.addEventListener('click', () => {
    container.classList.remove('active');
});