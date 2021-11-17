$('.mobile-toggler').click(function(){
$('.nav-area').toggleClass('nav-scale');
$('.mobile-toggler').toggleClass('close');
});

$('.all-img-btn').click(function(){
    $('.carusel-popup-wrapper').addClass('view');
});

$('.carousel-popup-close-btn').click(function(){
    $('.carusel-popup-wrapper').removeClass('view');
});

$('.map-filter-toggler').click(function(){
    $('.filter-search-block').toggleClass('toggleview');
});