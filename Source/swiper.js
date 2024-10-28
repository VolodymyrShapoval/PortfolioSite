new Swiper('.card-wrapper', {
    loop: true,
  
    slidesPerView: 'auto', // Автоматично налаштовує ширину слайда відповідно до ширини контейнера
    spaceBetween: 0, // Відстань між слайдами
    slidesPerGroup: 1, // Кількість слайдів, які прокручуються за один раз

    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
});