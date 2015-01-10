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
var blueSection = true;
var blueSectionClose = true;
function parallaxScroll()
{
	var scrolled = $(window).scrollTop();
	var scrollHeight = $("#scrolling").height();
	var windowHeight = $(window).height();


	var scrolledFromEnd = scrolled;
	//
	if(scrolled > windowHeight)
	{
		scrolledFromEnd = scrollHeight + windowHeight - scrolled;
	}
	var barHeight = 120 - (scrolledFromEnd/9);
	var marginHeight = 35 - (scrolledFromEnd/18);
	if(marginHeight < 5)
	{
		marginHeight = 5;
	}
	if(barHeight < 60)
	{
		barHeight = 60;
	}
	document.getElementById("homeLink").style.marginTop = marginHeight + 1 + 'px';
	document.getElementById("homeLink").style.marginTop = marginHeight + 1 + 'px';
	document.getElementById("navbar").style.marginTop = marginHeight + 12 + 'px';
	document.getElementById("expandNavbar").style.marginTop = marginHeight + 8 + 'px';
	$('#navbarMain').height(barHeight);
	
	if(scrolled > windowHeight - 65 && scrolled < scrollHeight + windowHeight)
	{
		if(blueSection == true)
		{
			$('#fullNavbar').removeClass('inblue');
			$('#fullNavbar').addClass('outofblue');
			blueSection = false;
		}
	} else
	{
		if(blueSection == false)
		{
			$('#fullNavbar').removeClass('outofblue');
			$('#fullNavbar').addClass('inblue');
			blueSection = true;
		}
	}
	if(scrolled > windowHeight - 65 && scrolled < scrollHeight + windowHeight - 105)
	{
		if(blueSectionClose == true)
		{
			$('#fullNavbar').addClass('shadow');
			blueSectionClose = false;
		}
	} else
	{
		if(blueSectionClose == false)
		{
			$('#fullNavbar').removeClass('shadow');
			blueSectionClose = true;
		}
	}
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
$('.Contact').click(function()
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
	$("#project5").height(height);
    $("#project6").height(height);
	$("#project7").height(height);
    $("#project8").height(height);

    $("#experience1").height(height);
    $("#experience2").height(height);


    $("#git1").height(height/5);
    $("#git2").height(height/5);
    $("#git3").height(height/5);
    $("#git4").height(height/5);
    $("#git5").height(height/5);
    $("#git6").height(height/5);
    $("#git7").height(height/5);
    $("#git8").height(height/5);
    $("#git1").width(height/5);
    $("#git2").width(height/5);
    $("#git3").width(height/5);
    $("#git4").width(height/5);
    $("#git5").width(height/5);
    $("#git6").width(height/5);
    $("#git7").width(height/5);
    $("#git8").width(height/5);

    $("#web3").height(height/5);
    $("#web4").height(height/5);
    $("#web5").height(height/5);
    $("#web3").width(height/5);
    $("#web4").width(height/5);
    $("#web5").width(height/5);

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
	for (var i = 0; i < 8; i++)
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
		if (num=='7') num = '8';
		if (num=='6') num = '7';
		if (num=='5') num = '6';
		if (num=='4') num = '5';
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
    if(desktop) {$('.active2Describe').fadeIn(); $("#git2").fadeIn();}
}).mouseleave(function()
{
    if(desktop) {$('.active2Describe').fadeOut(); $("#git2").fadeOut();}
});
$('#project3').mouseenter(function()
{
    if(desktop) {$('.active3Describe').fadeIn(); $("#git3").fadeIn(); $("#web3").fadeIn();}
}).mouseleave(function()
{
    if(desktop) {$('.active3Describe').fadeOut(); $("#git3").fadeOut(); $("#web3").fadeOut();}
});
$('#project4').mouseenter(function()
{
    if(desktop) {$('.active4Describe').fadeIn(); $("#git4").fadeIn(); $("#web4").fadeIn();}
}).mouseleave(function()
{
    if(desktop) {$('.active4Describe').fadeOut(); $("#git4").fadeOut(); $("#web4").fadeIn();}
});
$('#project5').mouseenter(function()
{
    if(desktop) {$('.active5Describe').fadeIn(); $("#git5").fadeIn();}
}).mouseleave(function()
{
    if(desktop) {$('.active5Describe').fadeOut(); $("#git5").fadeOut();}
});
$('#project6').mouseenter(function()
{
    if(desktop) {$('.active6Describe').fadeIn(); $("#git6").fadeIn();}
}).mouseleave(function()
{
    if(desktop) {$('.active6Describe').fadeOut(); $("#git6").fadeOut();}
});
$('#project7').mouseenter(function()
{
    if(desktop) {$('.active7Describe').fadeIn(); $("#git7").fadeIn();}
}).mouseleave(function()
{
    if(desktop) {$('.active7Describe').fadeOut(); $("#git7").fadeOut();}
});
$('#project8').mouseenter(function()
{
    if(desktop) {$('.active8Describe').fadeIn(); $("#git8").fadeIn();}
}).mouseleave(function()
{
    if(desktop) {$('.active8Describe').fadeOut(); $("#git8").fadeOut();}
});