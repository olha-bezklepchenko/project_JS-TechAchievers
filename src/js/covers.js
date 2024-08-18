document.addEventListener("DOMContentLoaded", function () {
    const marquees = document.querySelectorAll('.marquee');
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {   // властивість, яка визначає, чи є видимим поточний елемент із видимою частиною вікна браузера
            if (entry.isIntersecting) {
                entry.target.classList.add('active');  // Якщо елемент став видимим, до нього додається клас active
                const lines = entry.target.querySelectorAll('.marquee-line');  //Цей рядок знаходить усі піделементи .marquee-line всередині поточного елемента .marquee
                lines.forEach(line => {
                    line.style.animationPlayState = 'running'; // Запуск анімації для кожної строки
                });
            } else {
                entry.target.classList.remove('active');
                const lines = entry.target.querySelectorAll('.marquee-line');
                lines.forEach(line => {
                    line.style.animationPlayState = 'paused'; // Зупинка анімації, коли елемент не у viewport
                });
            }
        });
    }, {
        threshold: 0.1 // Відслідковуємо, коли 10% елемента з'являється у viewport
    });

    marquees.forEach(marquee => {
        observer.observe(marquee);  //цей код проходить через кожен елемент .marquee і починає спостереження за ним, використовуючи IntersectionObserver
    });
});

