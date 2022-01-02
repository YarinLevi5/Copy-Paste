        $('.copy-btn').click(function () {
            $('.box .content-field').select();
            document.execCommand('copy');
            setTimeout(() => {
                $('.box').toggleClass('hide');
                $('.msg-box').addClass('show');
                $(".content-msg").text("Line selected").
                show().fadeOut(2000);
                $('.msg-box').removeClass('show');
                $('.paste-box').addClass('show');
            }, 3000);
        });