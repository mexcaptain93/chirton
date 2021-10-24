$(function(){
    searchPlaceholder()
    productSlider()
})

$(window).on('resize', function(){
    searchPlaceholder()
})

function searchPlaceholder() {
    input = $('.js-header-serach-input')
    placeholder = ($(window).width() <= 767) ? 'Поиск' : 'Название или артикул товара'

    input.attr('placeholder', placeholder)
}

function productSlider() {
    $('.js-product-slider').slick({
        prevArrow: '<a href="#" class="gallery__prev"></a>',
        nextArrow: '<a href="#" class="gallery__next"></a>'
    })
}
