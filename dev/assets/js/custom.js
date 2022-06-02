
jQuery(document).ready(function($) {

	 /*testimonials show more*/
	 $(".review-box .text-box").each(function() {
        if ($(this).height() > 125) {
            $(this).closest('.review-box').addClass("has-more");
            $(this).append('<a class="show-more" href="#"><span class="open">Скрыть</span><span class="close">Показать больше</span></a>')
        }
    });

    $('.review-box .show-more').on("click", function(event) {
        event.preventDefault();
        $(this).closest('.review-box').toggleClass('active');
		$(this).toggleClass('active');
    })




	if (window.matchMedia('(max-width: 767px)').matches) {
		$('.another-model').appendTo($('.price-table'));

	}



    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.scrolltop:hidden').stop(true, true).fadeIn();
        } else {
            $('.scrolltop').stop(true, true).fadeOut();
        }
    });

    $(function() {
        $(".move-top").click(function() {
            $("html,body").animate({
                scrollTop: $(".thetop").offset().top
            }, "1000", 'linear');
            return false
        })
    })

});
