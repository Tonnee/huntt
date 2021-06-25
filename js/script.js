// --------------------- Banner start --------------------- 

$('.banner_main').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    prevArrow: '<span class="slick-prev"><i class="fas fa-arrow-left"></i></span>',
    nextArrow: '<span class="slick-next"><i class="fas fa-arrow-right"></i></span>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  // --------------------- Banner End --------------------- 

  
  // --------------------- Portfolio part Start --------------------- 
  
  // Venobox start

  $('.venobox').venobox(); 

  // Venobox end

  // --------------------- Portfolio part End --------------------- 


  // --------------------- Service part Start --------------------- 

  // Service part slick slider start

  $('.service_slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    centerMode: true,
    centerPadding: "0",
    prevArrow: '<i class="fas fa-chevron-up i_up"></i>',
    nextArrow: '<i class="fas fa-chevron-down i_down"></i>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          vertical: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          vertical: false,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          vertical: false,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  // Service part slick slider start

  // --------------------- Service part End --------------------- 


  // --------------------- Testimonial part Start --------------------- 
  // Testimonial img slider start

  $('.testi_img_slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    centerMode: true,
    centerPadding: "0",
    asNavFor: '.testi_text_slider',
    prevArrow: '<i class="fas fa-chevron-up i_up"></i>',
    nextArrow: '<i class="fas fa-chevron-down i_down"></i>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          vertical: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          vertical: false,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          vertical: false,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  // Testimonial img slider end



  // Testimonial text slider start
  $('.testi_text_slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.testi_img_slider'
  });
  // Testimonial text slider end

  // --------------------- Testimonial part End --------------------- 



  // --------------------- Counter part Start --------------------- 

  $('.counter').counterUp({
    delay: 10,
    time: 1000
});

  // --------------------- Counter part End --------------------- 

  // --------------------- Team part Start --------------------- 

  // Venobox start

  $('.venobox2').venobox(); 

  // Venobox end

  // --------------------- Team part End --------------------- 

  // --------------------- Sponsor part start --------------------- 
  // Sponsor slider start

  $('.sponsor_slider').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: "0",
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]

  });

  // Sponsor slider end
  // --------------------- Sponsor part End --------------------- 