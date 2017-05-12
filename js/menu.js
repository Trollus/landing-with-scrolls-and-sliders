/**
 * Created by apoca on 5/7/2016.
 */
$('#nav').affix({
    offset: {
        top: $('header').height()
    }
});

$('#sidebar').affix({
    offset: {
        top: 100
    }
});



$('.nav-link').click(function(e) {

    $('html, body').animate({scrollTop: $($(this).attr('href')).offset().top + 1 }, 200);

    e.preventDefault();
});


/* Scroll to about
    $('.nav-link').click(function(e) {

        var padd = $('.container-fluid').height(),
            block = $('.'+$(this)attr('id').offset().top +1,
            curr = $(document).scrollTop();

        $('html, body').animate({scrollTop:block}, 200);

        e.preventDefault();

    });
 */
