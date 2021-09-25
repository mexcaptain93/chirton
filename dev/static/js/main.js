$(function(){
    searchPlaceholder()
})

$(window).on('resize', function(){
    searchPlaceholder()
})

function searchPlaceholder() {
    input = $('.js-header-serach-input')
    placeholder = ($(window).width() <= 767) ? 'Поиск' : 'Название или артикул товара'

    input.attr('placeholder', placeholder)
}