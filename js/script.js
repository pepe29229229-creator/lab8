// script.js - JavaScript для сайта портфолио
document.addEventListener('DOMContentLoaded', function() {
    console.log("Сайт портфолио Валерии Пастуховой загружен");
    
    // Форма обратной связи
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Сообщение отправлено! Я свяжусь с вами в ближайшее время.');
            this.reset();
        });
    }
    
    // Подсветка активной страницы
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage || 
            (currentPage === '' && link.getAttribute('href') === 'index.html')) {
            link.style.backgroundColor = '#ffffff';
            link.style.color = '#800000';
        }
    });
});