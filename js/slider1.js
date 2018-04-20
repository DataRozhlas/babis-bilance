$(document).ready(function(){
  $('.slider1').slick({
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  infinite: true,
  dots: true,
  accessibility: false,
  pauseOnDotsHover: true,
  autoplaySpeed: 3500,
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
        slidesToScroll: 1,
        dots: false
      }
    }
  ]
});
  $('.slider2').slick({
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplay: true,
  infinite: true,
  dots: true,
  accessibility: false,
  pauseOnDotsHover: true,
  autoplaySpeed: 4500,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
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
        slidesToScroll: 1,
        dots: false
      }
    }]
});
});