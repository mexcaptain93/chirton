$(function(){
    searchPlaceholder();
    productSlider();
    select();
    filter();
    mobmenu();
    topSlider();
    phoneMask();
    feedbackPopup();
    filterPopup();
});

$(window).on('resize', function(){
    searchPlaceholder();
});

function searchPlaceholder() {
    input = $('.js-header-serach-input');
    placeholder = ($(window).width() <= 767) ? 'Поиск' : 'Название или артикул товара';

    input.attr('placeholder', placeholder);
}

function productSlider() {
    $('.js-product-slider').slick({
        prevArrow: '<a href="#" class="gallery__prev"></a>',
        nextArrow: '<a href="#" class="gallery__next"></a>'
    });
}

function select() {
    $('.select').each(function() {
        const _this = $(this),
            selectOption = _this.find('option'),
            selectOptionLength = selectOption.length,
            selectedOption = selectOption.filter(':selected'),
            duration = 450; // длительность анимации

        _this.hide();
        _this.wrap('<div class="select"></div>');
        $('<div>', {
            class: 'new-select',
            text: _this.children('option:eq(0)').text()
        }).insertAfter(_this);

        const selectHead = _this.next('.new-select');
        $('<div>', {
            class: 'new-select__list'
        }).insertAfter(selectHead);

        const selectList = selectHead.next('.new-select__list');
        for (let i = 0; i < selectOptionLength; i++) {
            $('<div>', {
                class: 'new-select__item',
                html: $('<span>', {
                    text: selectOption.eq(i).text()
                })
            })
                .attr('data-value', selectOption.eq(i).val())
                .appendTo(selectList);
        }

        const selectItem = selectList.find('.new-select__item');
        selectList.slideUp(0);
        selectHead.on('click', function() {
            if ( !$(this).hasClass('on') ) {
                $(this).addClass('on');
                selectList.slideDown(duration);

                selectItem.on('click', function() {
                    let chooseItem = $(this).data('value');

                    $('select').val(chooseItem).attr('selected', 'selected');
                    selectHead.text( $(this).find('span').text() );

                    selectList.slideUp(duration);
                    selectHead.removeClass('on');
                });

            } else {
                $(this).removeClass('on');
                selectList.slideUp(duration);
            }
        });
    });
}

function filter() {
    $('.filter__title').on('click', function () {
        $(this).siblings('.filter__values').slideToggle();
        $(this).parent().toggleClass('filter__param_opened', 500);
    });
}

function mobmenu() {
    $('.js-mobile-menu-opener').on('click', function (e) {
        e.preventDefault();
        $('.js-mobile-menu').slideToggle();
        $('body').toggleClass('stop-scroll');
    });
}

function topSlider() {
    $('.js-top-slider').slick({
        autoplay: true,
        arrows: false,
        dots: true
    });
}

function phoneMask() {
    $('.js-phone').mask('+7-(999)-999-99-99');
}

function feedbackPopup() {
    $('.js-feedback-opener').on('click', function (e) {
        e.preventDefault();
        $('.js-popup-feedback').show();
        $('body').addClass('stop-scroll');

        if ($('.js-mobile-menu').is(':visible')) {
            $('.js-mobile-menu').slideUp();
        }
    });

    $('.js-popup-feedback .popup__overlay, .js-feedback-close').on('click', function (e) {
        if (e.target === this) {
            e.preventDefault();
            $('.js-popup-feedback').hide();
            $('body').removeClass('stop-scroll');
        }
    });
}

function filterPopup() {
    $('.js-filter-opener').on('click', function (e) {
        e.preventDefault();
        $('.js-filter').show();
    });

    $('.js-filter .filter__overlay, .js-filter-close').on('click', function (e) {
        if (e.target === this) {
            e.preventDefault();
            $('.js-filter').hide();

        }
    });
}