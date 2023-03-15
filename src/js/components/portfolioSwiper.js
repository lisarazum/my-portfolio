const portfolioSlider = document.querySelectorAll('.portfolio__swiper')
const portfolioSliderNextBtn = document.querySelectorAll('.portfolio__slider-next')
const portfolioSliderPrevBtn = document.querySelectorAll('.portfolio__slider-prev')

for(i = 0; i < portfolioSlider.length; i++) {
  
  portfolioSlider[i].classList.add('portfolio__swiper-' + i);
  portfolioSliderNextBtn[i].classList.add('portfolio-next-' + i);
  portfolioSliderPrevBtn[i].classList.add('portfolio-prev-' + i);

  let slider = new Swiper('.portfolio__swiper-' + i, {
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
      577: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      1025: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    },
    navigation: {
      nextEl: '.portfolio-next-' + i,
      prevEl: '.portfolio-prev-' + i,
    },
  });
}
