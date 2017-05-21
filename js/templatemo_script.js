var top_menu_height = 0;
jQuery(function($) {
        $(window).on('load', function(){
			$('.external-link').unbind('click');	
		});
		
        $(document).ready( function() {

        top_menu_height = $('.templatemo-top-menu').height();
        // scroll spy to auto active the nav item
        $('.external-link').unbind('click');

        // scroll to top
        $('#btn-back-to-top').click(function(e){
            e.preventDefault();
            scrollTo('#templatemo-top');
        });

        // scroll to specific id when click on menu
        $('.templatemo-top-menu .navbar-nav a').click(function(e){
            if($('.navbar-toggle').is(":visible") == true){
                $('.navbar-collapse').collapse('toggle');
            }

            resetNavBar($(this));
            $(this).parent().addClass('active');
            $(this).blur();
            return true;
        });
		/*
		var dt = window.atob('IHwgRGVzaWduOiA8YSByZWw9Im5vZm9sbG93IiBocmVmPSJodHRwOi8vd3d3LnRlbXBsYXRlbW8uY29tL3RtLTM5NS11cmJhbmljIiB0YXJnZXQ9Il9wYXJlbnQiPlVyYmFuaWM8L2E+'); // decode the string
		var div = document.getElementById('footer-line');
		div.innerHTML = div.innerHTML + dt;
		*/
        // to stick navbar on top
        $('.templatemo-top-menu ').stickUp();

        // gallery category
        $('.templatemo-gallery-category a').click(function(e){
            e.preventDefault(); 
            $(this).parent().children('a').removeClass('active');
            $(this).addClass('active');
            var linkClass = $(this).attr('href');
            $('.gallery').each(function(){
                if($(this).is(":visible") == true){
                   $(this).hide();
                };
            });
            $(linkClass).fadeIn();  
        });

        //gallery light box setup
        $('a.colorbox').colorbox({
            rel: function(){
                return $(this).data('group');
            }
        });
    });
});

// scroll animation 
function scrollTo(selectors)
{
    if(!$(selectors)) return;
    var selector_top = $(selectors).offset().top - top_menu_height;
    $('html,body').animate({ scrollTop: selector_top }, 'slow');
}

function resetNavBar(obj){
    obj.parent().parent().children('li').removeClass('active');
}


$('.contact-menu div a').click(function(e){
    resetNavBar($('.templatemo-top-menu .navbar-nav a'));
    $(this).blur();
    $('html,body').animate({ scrollTop: 0 }, 'slow');
    return true;
});

function selectNav(obj){
    resetNavBar($('.templatemo-top-menu .navbar-nav a'));
    if(obj){
        obj.addClass('active');
    }
    $('html,body').animate({ scrollTop: 0 }, 'slow');
}