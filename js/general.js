const _slider = $('.slider');
const _sliderContent = $('.content');
// jar
const _jarItem = $('.js-tab-jar .tab-item');
const _jarIndex = $('.js-content-jar .tab-index');
// bottle
const _bottleItem = $('.js-tab-bottle .tab-item');
const _bottleIndex = $('.js-content-bottle .tab-index');
// cap
const _capItem = $('.js-tab-cap .tab-item');
const _capIndex = $('.js-content-cap .tab-index');
// compact
const _compactItem = $('.js-tab-compact .tab-item');
const _compactIndex = $('.js-content-compact .tab-index');
// others
const _othersItem = $('.js-tab-others .tab-item');
const _othersIndex = $('.js-content-others .tab-index');

// goto tab
const _gotoTab = $('.js-goto-tab');

_slider.slick({
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    cssEase: 'linear'
});

_slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {

    // console.log()
    if (nextSlide == 1) {
        _sliderContent.removeClass('best-active');
        _sliderContent.addClass('active');
    } else
    if (nextSlide == 2) {
        _sliderContent.removeClass('active');
        _sliderContent.addClass('best-active');
    } else {
        _sliderContent.removeClass('best-active');
        _sliderContent.removeClass('active');

    }
});

_gotoTab.on('click', function(e) {
    e.preventDefault();
    let _target = $(this).attr('href');
    let _distance = $(_target).offset().top - 100;
    $("html,body").animate({
            scrollTop: _distance,
        },
        1000,
        "swing"
    );
})


_jarItem.on('click', function() {
    let _eq = $(this).index();
    __Change(_jarItem, _eq);
    __Change(_jarIndex, _eq);
});

_bottleItem.on('click', function() {
    let _eq = $(this).index();
    __Change(_bottleItem, _eq);
    __Change(_bottleIndex, _eq);
});

_capItem.on('click', function() {
    let _eq = $(this).index();
    __Change(_capItem, _eq);
    __Change(_capIndex, _eq);
});

_compactItem.on('click', function() {
    let _eq = $(this).index();
    __Change(_compactItem, _eq);
    __Change(_compactIndex, _eq);
});
_othersItem.on('click', function() {
    let _eq = $(this).index();
    __Change(_othersItem, _eq);
    __Change(_othersIndex, _eq);
});

function __Change(_class, _eq) {
    _class.removeClass('active');
    _class.eq(_eq).addClass('active');
}

const _hamburger = $('.hamburger');
const _navbar = $('.navbar');
const _mark = $('.mark');
const _totop = $('.to-top-button');
const _wHeight = window.innerHeight;

var _xstart = 0,
    _wstart = 0,
    _eqstart = 1;

$(window).on('scroll load resize', function(e) {
    let _wW = window.innerWidth;
    let _wY = window.pageYOffset;

    if (_wY >= _wHeight / 2) {
        _totop.addClass('active');
    } else {
        _totop.removeClass('active');
    }
    if (_wW > 768) {
        _remove();
    }
});


_hamburger.on('click', function() {
    $(this).hasClass('active') ? _remove() : _add();
});

_mark.on('click', function() {
    _hamburger.hasClass('active') ? _remove() : _add();
})

function _remove() {
    _hamburger.removeClass('active');
    _navbar.removeClass('active');
    _mark.removeClass('active');
}

function _add() {
    _hamburger.addClass('active');
    _navbar.addClass('active');
    _mark.addClass('active');
}
_totop.click(function(e) {
    e.preventDefault();
    $("html,body").animate({
            scrollTop: 0,
        },
        1000,
        "swing"
    );
});