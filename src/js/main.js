document.addEventListener('DOMContentLoaded', () => {
  // burger
  (function(){
    const burger = document.querySelector('[data-burger]');
    const menu = document.querySelector('[data-menu]');
    const menuItems = document.querySelectorAll('[data-menu-item]');
    const overlay = document.querySelector('[data-menu-overlay]');
  
    burger.addEventListener('click', (e) => {
      burger.classList.toggle('burger--active');
      menu.classList.toggle('menu--active');
      overlay.classList.toggle('overlay--active');
  
      if (menu.classList.contains('menu--active')) {
        disableScroll();
      } else {
        enableScroll();
      }
    });
  
    overlay.addEventListener('click', () => {
      burger.classList.remove('burger--active');
      menu.classList.remove('menu--active');
      overlay.classList.remove('overlay--active');
      enableScroll();
    });
  
    menuItems.forEach(el => {
      el.addEventListener('click', () => {
        burger.classList.remove('burger--active');
        menu.classList.remove('menu--active');
        overlay.classList.remove('overlay--active');
        enableScroll();
      });
    });
  })();

  
  // swiper
  const swiper = new Swiper('.small__swiper', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 30,
  
    breakpoints: {
      576: {
        slidesPerView: 2,
        slidesPerGroup: 1,
      },
      768: {
        slidesPerView: 3,
        slidesPerGroup: 1,
      }
    },
  
    pagination: {
      el: '.swiper-pagination',
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });

  // hover
  const portfolioLinks = document.querySelectorAll('.portfolio__item');

  portfolioLinks.forEach((el) => {
    el.addEventListener('mouseover', function() {
      el.childNodes[3].classList.add('active')
    })

    el.addEventListener('mouseout', function() {
      el.childNodes[3].classList.remove('active')
    })
  })
})