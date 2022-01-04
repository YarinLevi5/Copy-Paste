$('.copy-btn').click(function () {
    $('.box .content-field').select();
    document.execCommand('copy');

    $('.box').toggleClass('hide');
    $('.msg-box').addClass('show');
    $(".content-msg").text("Line selected").
    show().fadeOut(2000);

    setTimeout(() => {
        $('.msg-box').removeClass('show');
        $('.paste-box').addClass('show');
    }, 3000);
});