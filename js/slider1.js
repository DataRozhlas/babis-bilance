$(document).ready(function(){
  $('.slider1').slick({
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  infinite: true,
  dots: true,
  accessibility: false,
  pauseOnDotsHover: true,
  autoplaySpeed: 4000,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
});