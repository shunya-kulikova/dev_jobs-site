jQuery(document).ready(function($) {
    $(".fancybox").fancybox();
    // document.onDOMContentLoaded = function() {
    // 	alert("DOM построен"); // не будет работать
    //   };
    $('.select-box>select').niceSelect();

    $('[type="tel"]').mask('+38(000)000-00-00');


    $('.header-telephone__arrow').on('click', function() {
        $('.header-telephone').toggleClass('show')
        $('.header-telephone ul').slideToggle(200);
    })

    $(document).click(function(e) {
        if (!$(e.target).hasClass("show") &&
            $(e.target).parents(".header-telephone").length === 0) {
            $('.header-telephone ul').slideUp(200);
            $('.header-telephone').removeClass('show')
        }
    });

    if ($('.post-item img').length || $('.seo-block img').length) {
        $('.post-item img, .seo-block img').each(function() {
            var imgThis = $(this);
            if (!imgThis.hasClass("nofancy")) {
                if (imgThis.closest('a')) {
                    imgThis.closest('a').attr({
                        'data-fancybox': 'content-group',
                        'href': $(this).attr('src'),
                    });
                };
            };
        });
    };

    $('.slider').slick({
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        dots: false,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: true
                }
            },

        ]
    });

    $("button.callbackModal").on('click', function() {
        $('#service #defect').val($(this).data('title'));
        $('#model #yourModel').val($(this).data('title'));
    });

    $(".btn-burger").on('click', function() {
        $('.menu-burger__content').toggleClass('active');
    });


    $(function() {
        let column = 0;
        $('.devices__row__item .title_3').each(function() {
            h = $(this).height();
            if (h > column) {
                column = h;
            }
        }).height(column);

    });





});


document.querySelector('.devices') ? installDeviceDropdown() : null;

function installDeviceDropdown() {
    const btnDevice = document.querySelectorAll('.btn-device');

    function removeSiblings() {
        btnDevice.forEach(e => e.closest('.device-list').classList.remove('active'))
    }

    btnDevice.forEach(arrow => {
        arrow.addEventListener('click', function() {
            if (arrow.closest('.device-list').classList.contains('active')) {
                removeSiblings();
            } else {
                removeSiblings();
                arrow.closest('.device-list').classList.add('active');
            }
        })

    })

}



//language-switcher

function languageDropdown() {
    const languageList = document.querySelector('.language-list')
    const languageListItem = document.querySelectorAll('.language-list .item')
    const languageArrow = document.querySelector('.language-box__arrow')

    function removeActive() {
        languageListItem.forEach(item => item.classList.remove('active'))
    }


    languageArrow.addEventListener('click', function() {
        languageArrow.classList.toggle('active')
        languageList.classList.toggle('active')
    })



    languageListItem.forEach(link => {
        link.addEventListener('click', function() {
            removeActive()
            link.classList.add('active')
            languageArrow.classList.remove('active')
            languageList.classList.remove('active')
        })
    })
}

languageDropdown()

//telephonesDropdown

function telephonesDropdown() {
    const teleList = document.querySelector('.telephones-list')
    const teleListItem = document.querySelectorAll('.telephones-list a')
    const teleBtn = document.querySelector('.telephones-btn img')


    teleBtn.addEventListener('click', function() {
        teleList.classList.toggle('active')
    })

    console.log(teleList);
}

if (window.matchMedia("(max-width: 1024px)").matches) {
    telephonesDropdown()
}

$(document).click(function(e) {
    if (!$(e.target).hasClass("telephones") &&
        $(e.target).parents(".telephones").length === 0) {
        $(".telephones-list").removeClass('active');
    }
});


/*search*/



const btnSearch = document.querySelector('.btn-search')
const formSearch = document.querySelector('.form-search')

btnSearch.addEventListener('click', () => {
    formSearch.classList.add('active')
})

$(document).click(function(e) {
    if (!$(e.target).hasClass("form-search") &&
        $(e.target).parents(".form-search").length === 0) {
        $(".form-search").removeClass('active');
    }
});




document.querySelector('.home') ? offLink() : null;

function offLink() {
    document.querySelector('.logo').addEventListener('click', (e) => {
        e.preventDefault()
    })
}
