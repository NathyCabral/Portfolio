function downloadCV() {
    var link = document.createElement('a');
    link.href = './img/Currículo-Nathallia-Cabral.png';
    link.download = 'Curriculo.png';
    link.click();
}



const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('nav ul.menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});


