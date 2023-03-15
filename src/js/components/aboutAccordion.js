const accordionBtn = document.querySelector('#aboutAccordion');
const accordionMainList = document.querySelector('.about__accordion-list');

accordionBtn.addEventListener('click', function() {
  accordionBtn.classList.toggle('is-active')
  accordionMainList.classList.toggle('is-opened')
})