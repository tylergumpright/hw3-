$('#queensboro').hover(function() {
  $(this).attr('src', 'https://7468669c0013a7dae459-4d0fcf8d315d40f305ee2ebb6c32f79c.ssl.cf1.rackcdn.com/6474897_1450889747.4858_updates.jpg');
}, function() {
  $(this).attr('src', 'http://40.media.tumblr.com/3a5738c5c8228d7ed0dcb08b44739b6f/tumblr_n39ns8oyN81sjcsu0o1_1280.jpg');
});
$(document).ready(function() {
    $('.text').hide();
    $('img').animate({
        opacity:1
        
    });
    $('img').hover(function() {
        $(this).stop().animate({opacity:.4},200);
        $('.text').fadeIn();

    }, function() {
        $(this).stop().animate({opacity:1},500)
        $('.text').fadeOut();
    });


});