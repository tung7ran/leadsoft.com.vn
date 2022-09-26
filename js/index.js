VanillaTilt.init(document.querySelectorAll(".content-home-our-team-card"), {
  max: 25,
  speed: 400,
  glare: true,
  "max-glare": 1,
});
wow = new WOW(
            {
            animateClass: 'animated',
            offset:       100,
            callback:     function(box) {
                console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
            }
            }
        );
wow.init();

$('.counter').each(function() {
    var $this = $(this),
        countTo = $this.attr('data-count');
    
    $({ countNum: $this.text()}).animate({
      countNum: countTo
    },
    {
      duration: 1000,
      easing:'linear',
      step: function() {
        $this.text(Math.floor(this.countNum));
      },
      complete: function() {
        $this.text(this.countNum);
      }
  
    });  
  });

  $('.counters').each(function() {
    var $this = $(this),
        countTo = $this.attr('data-count');
    
    $({ countNum: $this.text()}).animate({
      countNum: countTo
    },
    {
      duration: 2000,
      easing:'linear',
      step: function() {
        $this.text(Math.floor(this.countNum));
      },
      complete: function() {
        $this.text(this.countNum);
      }
  
    });  
  });

  $('.content-home-our-team-container').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    pauseOnFocus: true,
    Swipe: true,
    easing: "linner",
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
          autoplaySpeed: 1000,
        }
      },
      {
        breakpoint: 481,
        settings: {
          slidesToShow: 1,
          autoplaySpeed: 1000,
        }
      }
    ]
  });

  $('.pc-slider-top').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: false,
    prevArrow: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 481,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
});

$('.pc-slider-between').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: false,
    prevArrow: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 481,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
});

$('.pc-slider-bottom').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: false,
    prevArrow: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 481,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
});
// gsap.timeline({
//     scrollTrigger: {
//     trigger: ".about-us-content-box-first",
//     start: "center center",
//     end: "bottom top",
//     markers: false,
//     scrub: true,
//     pin: true,
//     }
// })
// .from(".about-us-content-box-first-textFirst", {x: innerWidth * 2})
// .from(".about-us-content-box-first-textSecond", {x: innerWidth * -1})
// .from(".about-us-content-box-first-textThird", {x: innerWidth * 2}) 
// .from(".about-us-content-box-first-img", {y: innerWidth * 1})

// gsap.timeline({
//   scrollTrigger: {
//   trigger: ".about-us-content-box-second",
//   start: "center center",
//   end: "bottom top",
//   markers: false,
//   scrub: true,
//   pin: true,
//   }
// })
// .from(".about-us-content-box-second-textFourth", {x: innerWidth * 1})
// .from(".about-us-content-box-second-textFifth", {x: innerWidth * -1})
// .from(".about-us-content-box-second-textSixth", {x: innerWidth * 1}) 

var scrollToTop = $('#scrollToTop');

$(window).scroll(function() {
  if ($(window).scrollTop() > 200) {
    scrollToTop.addClass('show');
  } else {
    scrollToTop.removeClass('show');
  }
});

scrollToTop.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '200');
});


function toggleMenu () {  
  const navbar = document.querySelector('.header-outside-nav');
  const burger = document.querySelector('.header-outside-nav-button');

  burger.addEventListener('click', (e) => {    
    navbar.classList.toggle('show-nav');
  });    
  const navbarLinks = document.querySelectorAll('.header-outside-nav a');
  navbarLinks.forEach(link => {
    link.addEventListener('click', (e) => {    
      navbar.classList.toggle('show-nav');
    }); 
  })
   
}
toggleMenu();