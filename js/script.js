$(document).ready(function() {

   // VARS
   let servicesDroplistToggle = $(".full-services__list-link");

   
   // MENU
   $('.nav-toggle').on("click", function(e) {
      e.preventDefault();

      $('.nav').toggleClass('active');
      $('.nav-toggle').toggleClass('hide');
   });

   $('.nav__link').on("click", function(e) {
      e.preventDefault();

      $('.nav').removeClass('active');
      $('.nav-toggle').removeClass('hide');
   });

   $('.panel__toggle').on("click", function(e) {
      e.preventDefault();

      $('.panel__list').toggleClass('active');
   });

   // SERVICES DROPLIST
   servicesDroplistToggle.on("click", function(e) {
      e.preventDefault();
      let servicesDroplistArrow = $(this).children('.full-services__list-arrow');
      let servicesDroplist = $(this).siblings(".full-services__droplist");
      let servicesItem = $(this).parent(".full-services__list-item")

      servicesDroplist.toggleClass("active");
      $(this).toggleClass("active");
      servicesDroplistArrow.toggleClass("active");
      servicesItem.toggleClass("active");
   });



   // SLICK SLIDER
/*    $(".reviews__inner").slick({
      infinite: true,
      dots: true
   });
 */
   
   $('.reviews__inner').slick({
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 2,
      responsive: [
        {
          breakpoint: 618,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
    });











   
});