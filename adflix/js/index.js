window.addEventListener('load', function () {
    new Glider(document.querySelector('.glider'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        scrollLock: true,
        dragVelocity: 1.5,
        dots: '.dots',
        // arrows: {
        //     prev: '.glider-prev',
        //     next: '.glider-next'
        // }
    });
})