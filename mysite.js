$(window).bind('scroll', function(e)
{
	parallaxScroll();
});
$(document).on('webkitfullscreenchange mozfullscreenchange fullscreenchange MSFullscreenChange', function(e)
{
	resizeScrolling();
});
var desktop = true;
var oldDesktop = true;
var navBarHeight = $('#navbarMain').height();
function parallaxScroll()
{
	var scrolled = $(window).scrollTop();
	var barHeight = navBarHeight - (scrolled/35);
	var marginHeight = (navBarHeight/5) - (scrolled/70);
	if(barHeight<navBarHeight/1.3)
	{
		barHeight = navBarHeight/1.3;
		marginHeight = '-4px';
	}
	document.getElementById("homeLink").style.marginTop = marginHeight - 1 + 'px';
	document.getElementById("navbar").style.marginTop = marginHeight - 1 + 'px';
	document.getElementById("expandNavbar").style.marginTop = marginHeight + 6 + 'px';
	$('#navbarMain').height(barHeight);
	$('#backgrounddiv').css('top', (0 - (scrolled * .5)) + 'px');
}
$('#homeLink').click(function()
{
	$('html, body').animate(
	{
		scrollTop: $('#topTrans').offset().top
	}, 'slow');
});
$('#About').click(function()
{
	$('html, body').animate(
	{
		scrollTop: $('#profileWithHeader').offset().top
	}, 'slow');
});
$('#Projects').click(function()
{
	$('html, body').animate(
	{
		scrollTop: $('#projectsWithHeader').offset().top
	}, 'slow');
});
$('#Experiences').click(function()
{
	$('html, body').animate(
	{
		scrollTop: $('#experiencesWithHeader').offset().top
	}, 'slow');
});
$('#Contact').click(function()
{
	$('html, body').animate(
	{
		scrollTop: $('#botTrans').offset().top
	}, 'slow');
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

    $("#web2").height(height/5);
    $("#web2").width(height/5);
    $("#webE1").height(height/5);
    $("#webE1").width(height/5);
    $("#webE2").height(height/5);
    $("#webE2").width(height/5);


	desktop = ($(window).width() >= 992)
	if(oldDesktop!=desktop)
	{
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
	}
	oldDesktop = desktop;
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
			$("#web"+num).hide();
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
		} else
		{
			$("#webE"+num).hide();
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
$('#project4').click(function()
{
	$('.active4').removeClass('active4').addClass('oldActive');
	$('.active4Describe').removeClass('active4Describe').addClass('oldActiveDescribe');
	if ($('.oldActive').is(':last-child'))
	{
		$('.project4slide').first().addClass('active4');
		$('.project4describe').first().addClass('active4Describe');
	} else
	{
		$('.oldActive').next().addClass('active4');
		$('.oldActiveDescribe').next().addClass('active4Describe');
	}
	$('.oldActive').removeClass('oldActive');
	$('.oldActiveDescribe').removeClass('oldActiveDescribe');
	$('.project4slide').fadeOut();
	$('.project4describe').fadeOut();
	$('.active4').fadeIn();
	$('.active4Describe').fadeIn();
});
$('#experience1').mouseenter(function()
{
    if(desktop) {$('.activeE1Describe').fadeIn(); $("#webE1").fadeIn();}
}).mouseleave(function()
{
    if(desktop) {$('.activeE1Describe').fadeOut(); $("#webE1").fadeOut();}
});
$('#experience2').mouseenter(function()
{
    if(desktop) {$('.activeE2Describe').fadeIn(); $("#webE2").fadeIn();}
}).mouseleave(function()
{
    if(desktop) {$('.activeE2Describe').fadeOut(); $("#webE2").fadeOut();}
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
    if(desktop) {$('.active2Describe').fadeIn(); $("#git2").fadeIn(); $("#web2").fadeIn();}
}).mouseleave(function()
{
    if(desktop) {$('.active2Describe').fadeOut(); $("#git2").fadeOut(); $("#web2").fadeOut();}
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