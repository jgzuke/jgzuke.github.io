$(window).bind('scroll', function(e)
{
	parallaxScroll();
});

function parallaxScroll()
{
	var scrolled = $(window).scrollTop();
	$('#backgrounddiv').css('top', (0 - (scrolled * .5)) + 'px');
}
$('#nextpage').click(function()
{
	if ($(window).scrollTop() < $("#profileWithHeader").offset().top-10)
	{
		$('html, body').animate(
		{
			scrollTop: $('#profileWithHeader').offset().top
		}, 'slow');
	}
	else if ($(window).scrollTop() < $("#projectsWithHeader").offset().top-10)
	{
		$('html, body').animate(
		{
			scrollTop: $('#projectsWithHeader').offset().top
		}, 'slow');
	}
	else
	{
		$('html, body').animate(
		{
			scrollTop: $('#botTrans').offset().top
		}, 'slow');
	}
});
$('#prevpage').click(function()
{
	if ($(window).scrollTop() > $("#projectsWithHeader").offset().top+10)
	{
		$('html, body').animate(
		{
			scrollTop: $('#projectsWithHeader').offset().top
		}, 'slow');
	}
	else if ($(window).scrollTop() > $("#profileWithHeader").offset().top+10)
	{
		$('html, body').animate(
		{
			scrollTop: $('#profileWithHeader').offset().top
		}, 'slow');
	}
	else
	{
		$('html, body').animate(
		{
			scrollTop: $('#topTrans').offset().top
		}, 'slow');
	}
});
$(document).ready(function()
{
	$('.project1slide').first().addClass('active1');
	$('.project1slide').hide();
	$('.active1').show();
	$('.project2slide').first().addClass('active2');
	$('.project2slide').hide();
	$('.active2').show();

	$('.project1describe').first().next().addClass('active1Describe');
	$('.project2describe').first().next().addClass('active2Describe');
	$('.project1describe').hide();
	$('.project2describe').hide();
});
$('#button-next1').click(function()
{
	$('.active1').removeClass('active1').addClass('oldActive');
	$('.active1Describe').removeClass('active1Describe').addClass('oldActiveDescribe');
	if ($('.oldActive').is(':last-child'))
	{
		$('.project1slide').first().addClass('active1');
		$('.project1describe').first().addClass('active1Describe');
	} else
	{
		$('.oldActive').next().addClass('active1');
		$('.oldActiveDescribe').next().addClass('active1Describe');
	}
	$('.oldActive').removeClass('oldActive');
	$('.oldActiveDescribe').removeClass('oldActiveDescribe');
	$('.project1slide').fadeOut();
	$('.mousedOver1').fadeOut();
	$('.active1').fadeIn();
});
$('#button-next2').click(function()
{
	$('.active2').removeClass('active2').addClass('oldActive');
	$('.active2Describe').removeClass('active2Describe').addClass('oldActiveDescribe');
	if ($('.oldActive').is(':last-child'))
	{
		$('.project2slide').first().addClass('active2');
		$('.project2describe').first().addClass('active2Describe');
	} else
	{
		$('.oldActive').next().addClass('active2');
		$('.oldActiveDescribe').next().addClass('active2Describe');
	}
	$('.oldActive').removeClass('oldActive');
	$('.oldActiveDescribe').removeClass('oldActiveDescribe');
	$('.project2slide').fadeOut();
	$('.mousedOver2').fadeOut();
	$('.active2').fadeIn();
});
$('#project1').mouseenter(function()
{
    $('.active1Describe').fadeIn();
    $('.active1Describe').addClass('mousedOver1');
}).mouseleave(function()
{
    $('.active1Describe').fadeOut();
    $('.active1Describe').removeClass('mousedOver1');
});
$('#project2').mouseenter(function()
{
    $('.active2Describe').fadeIn();
	$('.active2Describe').addClass('mousedOver2');
}).mouseleave(function()
{
    $('.active2Describe').fadeOut();
    $('.active2Describe').removeClass('mousedOver2');
});