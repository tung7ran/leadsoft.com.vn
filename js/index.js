VanillaTilt.init(document.querySelectorAll(".content-news-our-team-card"), {
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
        //alert('finished');
      }
  
    });  
  });

gsap.timeline({
    scrollTrigger: {
    trigger: ".about-us-content-box-first",
    start: "center center",
    end: "bottom top",
    markers: false,
    scrub: true,
    pin: true,
    }
})
.from(".about-us-content-box-first-textFirst", {x: innerWidth * 2})
.from(".about-us-content-box-first-textSecond", {x: innerWidth * -1})
.from(".about-us-content-box-first-textThird", {x: innerWidth * 1}) 
.from(".about-us-content-box-first-img", {y: innerWidth * 1})

gsap.timeline({
  scrollTrigger: {
  trigger: ".about-us-content-box-second",
  start: "center center",
  end: "bottom top",
  markers: false,
  scrub: true,
  pin: true,
  }
})
.from(".about-us-content-box-second-textFourth", {x: innerWidth * 1})
.from(".about-us-content-box-second-textFifth", {x: innerWidth * -1})
.from(".about-us-content-box-second-textSixth", {x: innerWidth * 1}) 
.from(".about-us-content-box-second-img", {y: innerWidth * 1})

var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});
