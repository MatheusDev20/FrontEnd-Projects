const burguer = document.getElementById('burguer');
const ul = document.querySelector('nav ul');

burguer.addEventListener('click', () => {
    ul.classList.toggle('show')
    console.log('clicked');
})