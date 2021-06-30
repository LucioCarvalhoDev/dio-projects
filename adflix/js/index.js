window.addEventListener('load', function () {
    new Glider(document.querySelector('.glider'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        scrollLock: true,
        dragVelocity: 1.5,
        dots: '.dots',
        responsive: [
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            }
        ]
    });
})