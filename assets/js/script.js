new Glider(document.querySelector('.glider'), {
    draggable: true,
    dots: '.dots',
    arrows: false,
    responsive: [{
            // More than 768px
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            // More than 1024px
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        }
    ]
});

const glider = new Glider(document.getElementById('glider'));

function sliderAuto(slider, miliseconds) {
    const slidesCount = slider.track.childElementCount;
    let slideTimeout = null;
    let nextIndex = 1;

    function slide() {
        slideTimeout = setTimeout(
            function () {
                if (nextIndex >= slidesCount) {
                    nextIndex = 0;
                }
                slider.scrollItem(nextIndex++);
            },
            miliseconds
        );
    }

    slider.ele.addEventListener('glider-animated', function () {
        window.clearInterval(slideTimeout);
        slide();
    });

    slide();
}

sliderAuto(glider, 2000)