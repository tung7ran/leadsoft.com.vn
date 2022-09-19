VanillaTilt.init(document.querySelectorAll(".content-news-feedback-card"), {
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