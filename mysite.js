$(window).bind('scroll', function(e)
{
	parallaxScroll();
});
$(document).on('webkitfullscreenchange mozfullscreenchange fullscreenchange MSFullscreenChange', function(e)
{
	resizeScrolling();
});
var desktop = true;
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
	else if ($(window).scrollTop() < $("#experiencesWithHeader").offset().top-10)
	{
		$('html, body').animate(
		{
			scrollTop: $('#experiencesWithHeader').offset().top
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
	if ($(window).scrollTop() > $("#experiencesWithHeader").offset().top+10)
	{
		$('html, body').animate(
		{
			scrollTop: $('#experiencesWithHeader').offset().top
		}, 'slow');
	}
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
function resizeScrolling()
{
	var height = $("#firstPicture").height();
    $("#project1").height(height);
    $("#project2").height(height);
    $("#project3").height(height);
    $("#project4").height(height);
    $("#experience1").height(height);
    $("#experience2").height(height);
    $("#git1").height(height/5);
    $("#git2").height(height/5);
    $("#git3").height(height/5);
    $("#git4").height(height/5);
    $("#git1").width(height/5);
    $("#git2").width(height/5);
    $("#git3").width(height/5);
    $("#git4").width(height/5);
	desktop = ($(window).width() >= 992)
	if(!desktop)
    {
    	document.getElementById("project1").style.marginLeft =  "-20px";
    	document.getElementById("project1").style.marginRight =  "-20px";
    	document.getElementById("project1").style.marginBottom =  "40px";
    	document.getElementById("project2").style.marginLeft =  "-20px";
    	document.getElementById("project2").style.marginRight =  "-20px";
    	document.getElementById("project2").style.marginBottom =  "40px";
    	document.getElementById("project3").style.marginLeft =  "-20px";
    	document.getElementById("project3").style.marginRight =  "-20px";
    	document.getElementById("project3").style.marginBottom =  "40px";
    	document.getElementById("project4").style.marginLeft =  "-20px";
    	document.getElementById("project4").style.marginRight =  "-20px";
    	document.getElementById("project4").style.marginBottom =  "40px";

    	document.getElementById("experience1").style.marginLeft =  "-20px";
    	document.getElementById("experience1").style.marginRight =  "-20px";
    	document.getElementById("experience1").style.marginBottom =  "40px";
    	document.getElementById("experience2").style.marginLeft =  "-20px";
    	document.getElementById("experience2").style.marginRight =  "-20px";
    	document.getElementById("experience2").style.marginBottom =  "40px";
    	document.getElementById("myimage").style.marginTop =  "0px";
    	document.getElementById("projectRow").style.marginBottom =  "0px";
    	document.getElementById("projectRow2").style.marginBottom =  "0px";
    	document.getElementById("experienceRow").style.marginBottom =  "00px";
    	$('#myimage').hide();
		$('#navbuttons').hide();
    } else
    {
    	document.getElementById("project1").style.marginLeft =  "-10px";
    	document.getElementById("project1").style.marginRight =  "10px";
    	document.getElementById("project1").style.marginBottom =  "0px";
    	document.getElementById("project2").style.marginLeft =  "10px";
    	document.getElementById("project2").style.marginRight =  "-10px";
    	document.getElementById("project2").style.marginBottom =  "0px";
    	document.getElementById("project3").style.marginLeft =  "-10px";
    	document.getElementById("project3").style.marginRight =  "10px";
    	document.getElementById("project3").style.marginBottom =  "0px";
    	document.getElementById("project4").style.marginLeft =  "10px";
    	document.getElementById("project4").style.marginRight =  "-10px";
    	document.getElementById("project4").style.marginBottom =  "0px";

    	document.getElementById("experience1").style.marginLeft =  "-10px";
    	document.getElementById("experience1").style.marginRight =  "10px";
    	document.getElementById("experience1").style.marginBottom =  "0px";
    	document.getElementById("experience2").style.marginLeft =  "10px";
    	document.getElementById("experience2").style.marginRight =  "-10px";
    	document.getElementById("experience2").style.marginBottom =  "0px";
    	document.getElementById("myimage").style.marginTop =  "60px";
    	document.getElementById("projectRow").style.marginBottom =  "20px";
    	document.getElementById("projectRow2").style.marginBottom =  "20px";
    	document.getElementById("experienceRow").style.marginBottom =  "20px";
    	$('#myimage').show();
    	$('#navbuttons').show();
    }
	var scrollHeight = $("#scrolling").height();
	var windowHeight = $(window).height();
	var divHeight = (scrollHeight-windowHeight)/2;
	$("#backgrounddivmid").height(divHeight);
}
$(document).ready(function()
{
	resizeScrolling();
	var num = '1';
	for (var i = 0; i < 4; i++)
	{
		$('.project'+num+'slide').first().addClass('active'+num);
		$('.project'+num+'slide').hide();
		$('.active'+num).show();
		$('.project'+num+'describe').first().addClass('active'+num+'Describe');
		$('.project'+num+'describe').hide();
		if(!desktop)
		{
		 $('.active'+num+'Describe').show();
		} else
		{
			$("#git"+num).hide();
		}
		if (num=='3') num = '4';
		if (num=='2') num = '3';
		if (num=='1') num = '2';
	};
	num = '1';
	for (var i = 0; i < 2; i++)
	{
		$('.experience'+num+'slide').first().addClass('activeE'+num);
		$('.experience'+num+'slide').hide();
		$('.activeE'+num).show();
		$('.experience'+num+'describe').first().addClass('activeE'+num+'Describe');
		$('.experience'+num+'describe').hide();
		if(!desktop)
		{
		 $('.activeE'+num+'Describe').show();
		}
		if (num=='1') num = '2';
	};
});
function clickPic()
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
	$('.project1describe').fadeOut();
	$('.active1').fadeIn();
	$('.active1Describe').fadeIn();
}
$('#project1').click(function()
{
	clickPic('1');
});
$('#project2').click(function()
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
	$('.project2describe').fadeOut();
	$('.active2').fadeIn();
	$('.active2Describe').fadeIn();
});
$('#experience1').mouseenter(function()
{
    if(desktop) {$('.activeE1Describe').fadeIn();}
}).mouseleave(function()
{
    if(desktop) {$('.activeE1Describe').fadeOut();}
});
$('#experience2').mouseenter(function()
{
    if(desktop) {$('.activeE2Describe').fadeIn();}
}).mouseleave(function()
{
    if(desktop) {$('.activeE2Describe').fadeOut();}
});
$('#project1').mouseenter(function()
{
    if(desktop) {$('.active1Describe').fadeIn(); $("#git1").fadeIn();}
}).mouseleave(function()
{
    if(desktop) {$('.active1Describe').fadeOut(); $("#git1").fadeOut();}
});
$('#project2').mouseenter(function()
{
    if(desktop) {$('.active2Describe').fadeIn(); $("#git2").fadeIn();}
}).mouseleave(function()
{
    if(desktop) {$('.active2Describe').fadeOut(); $("#git2").fadeOut();}
});
$('#project3').mouseenter(function()
{
    if(desktop) {$('.active3Describe').fadeIn(); $("#git3").fadeIn();}
}).mouseleave(function()
{
    if(desktop) {$('.active3Describe').fadeOut(); $("#git3").fadeOut();}
});
$('#project4').mouseenter(function()
{
    if(desktop) {$('.active4Describe').fadeIn(); $("#git4").fadeIn();}
}).mouseleave(function()
{
    if(desktop) {$('.active4Describe').fadeOut(); $("#git4").fadeOut();}
});