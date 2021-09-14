$("#btnUp").click(function(){
    $("html").animate({
        scrollTop: 0
    }, "slow");
});
$(".header_burger").click(function(event) {
    $('.header_burger,.header-nav nav').toggleClass('adaptive');
    $('body').toggleClass('lock');
    $('.nav-item-info').toggleClass('vision');
});