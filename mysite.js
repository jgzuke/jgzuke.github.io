$(window).bind('scroll', function(e)
{
	parallaxScroll();
});
$(document).on('webkitfullscreenchange mozfullscreenchange fullscreenchange MSFullscreenChange', function(e)
{
	resizeScrolling();
});
var desktop = true;
var phone = false;
var oldDesktop = true;
var oldPhone = false;
var navBarHeight = $('#navbarMain').height();
var blueSection = true;
var blueSectionClose = true;
var myBlue = '#0099ff';
function parallaxScroll()
{
	var scrolled = $(window).scrollTop();
	var scrollHeight = $("#scrolling").height();
	var windowHeight = $(window).height();
	if(desktop)
	{
		var scrolledFromEnd = scrolled/windowHeight*800;
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
		document.getElementById("navbar").style.marginTop = marginHeight + 12 + 'px';
		document.getElementById("expandNavbar").style.marginTop = marginHeight + 8 + 'px';
		$('#navbarMain').height(barHeight);
	} else
	{
		document.getElementById("homeLink").style.marginTop = 16 + 'px';
		document.getElementById("navbar").style.marginTop = 27 + 'px';
		document.getElementById("expandNavbar").style.marginTop = 23 + 'px';
		$('#navbarMain').height(80);
	}
	
	
	if(scrolled > windowHeight - 65 && scrolled < scrollHeight + windowHeight - 109)
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

	var opacity = 1 - (scrolled/windowHeight*1.5);
	document.getElementById("toAbout").style.opacity = opacity;
	document.getElementById("backgrounddivtop").style.opacity = opacity;
	$('#backgrounddiv').css('top', (0 - (scrolled * .5)) + 'px');
}
$('#homeLink').click(function()
{
	$('html, body').animate(
	{
		scrollTop: $('#topTrans').offset().top
	}, 'slow');
});
$('#About, #toAbout').click(function()
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
$('#Contact, .Contact').click(function()
{
	$('html, body').animate(
	{
		scrollTop: $('#botTrans').offset().top
	}, 'slow');
});
function resizeScrolling()
{
	var height = $("#firstPicture").height();
	for(var i = 1; i < 11; i++)
	{
		$('#project'+i.toString()).height(height);
		$("#git"+i.toString()+", #web"+i.toString()+", #fac"+i.toString()+", #twi"+i.toString()).height(height/5);
    	$("#git"+i.toString()+", #web"+i.toString()+", #fac"+i.toString()+", #twi"+i.toString()).width(height/5);
	}
	desktop = ($(window).width() >= 992)
	phone = ($(window).width() <= 768)
	if(oldDesktop!=desktop)
	{
		if(!desktop)
	    {
	    	$('#myimage').hide();
	    } else
	    {
	    	$('#myimage').show();
	    }
	}
	if(oldPhone!=phone)
	{
		if(phone)
	    {
	    	$(".projectLeft").removeClass('projectOnLeft');
	    	$(".projectRight").removeClass('projectOnRight');
	    	$(".projectLeft, .projectRight").addClass('projectInCenter');

	    	$(".projectRows").removeClass('projectRowsNormal');
	    	$(".projectRows").addClass('projectRowsMobile');
	    } else
	    {
	    	$(".projectLeft, .projectRight").removeClass('projectInCenter');
	    	$(".projectLeft").addClass('projectOnLeft');
	    	$(".projectRight").addClass('projectOnRight');

	    	$(".projectRows").removeClass('projectRowsMobile');
	    	$(".projectRows").addClass('projectRowsNormal');
	    }
	}
	setUpProjects();
	oldDesktop = desktop;
	oldPhone = phone;
	var scrollHeight = $("#scrolling").height();
	var windowHeight = $(window).height();
	var divHeight = (scrollHeight-windowHeight)/2;
	$("#backgrounddivmid").height(divHeight);
	parallaxScroll();
}
function setUpProjects()
{
	for (var i = 1; i < 11; i++)
	{
		$('.project'+i.toString()+'slide').first().addClass('active'+i.toString());
		$('.project'+i.toString()+'slide').hide();
		$('.active'+i.toString()).show();
		$('.project'+i.toString()+'describe').first().addClass('active'+i.toString()+'Describe');
		$('.project'+i.toString()+'describe').hide();
		if(!desktop)
		{
		    $('.active'+i.toString()+'Describe').show();
		    $("#git"+i.toString()+", #web"+i.toString()+", #fac"+i.toString()+", #twi"+i.toString()).show();
		} else
		{
			$('.active'+i.toString()+'Describe').hide();
			$("#git"+i.toString()+", #web"+i.toString()+", #fac"+i.toString()+", #twi"+i.toString()).hide();
		}
	};
}
$(document).ready(function()
{
	resizeScrolling();
	$(".projectLeft").addClass('projectOnLeft');
	$(".projectRight").addClass('projectOnRight');
	$(".projectRows").addClass('projectRowsNormal');
	setUpProjects();
});
function resize(toExpand, widthSet, heightSet, sideMargin)
{
	$('#'+toExpand).animate({width: widthSet+'px', height: heightSet+'px', marginLeft: sideMargin+'px', marginRight: sideMargin+'px'}, 'fast');
}
$('#topLi1').mouseenter(function(){ resize('topLi1', '80', '80', '-10'); }).mouseleave(function() { resize('topLi1', '60', '60', '0'); });
$('#topLi2').mouseenter(function(){ resize('topLi2', '80', '80', '-10'); }).mouseleave(function() { resize('topLi2', '60', '60', '0'); });
$('#topLi3').mouseenter(function(){ resize('topLi3', '80', '80', '-10'); }).mouseleave(function() { resize('topLi3', '60', '60', '0'); });
$('#topLi4').mouseenter(function(){ resize('topLi4', '80', '80', '-10'); }).mouseleave(function() { resize('topLi4', '60', '60', '0'); });





function clickPic(num)
{
	$('.active'+num).removeClass('active'+num).addClass('oldActive');
	$('.active'+num+'Describe').removeClass('active'+num+'Describe').addClass('oldActiveDescribe');
	if ($('.oldActive').is(':last-child'))
	{
		$('.project'+num+'slide').first().addClass('active'+num);
		$('.project'+num+'describe').first().addClass('active'+num+'Describe');
	} else
	{
		$('.oldActive').next().addClass('active'+num);
		$('.oldActiveDescribe').next().addClass('active'+num+'Describe');
	}
	$('.oldActive').removeClass('oldActive');
	$('.oldActiveDescribe').removeClass('oldActiveDescribe');
	$('.project'+num+'slide').fadeOut();
	$('.project'+num+'describe').fadeOut();
	$('.active'+num).fadeIn();
	$('.active'+num+'Describe').fadeIn();
}
$('#project1').click(function(){ clickPic('1'); });
$('#project2').click(function(){ clickPic('2'); });
$('#project5').click(function(){ clickPic('5'); });
$('#project6').click(function(){ clickPic('6'); });
$('#project7').click(function(){ clickPic('7'); });
$('#project8').click(function(){ clickPic('8'); });





function fadeInProject(number)
{
	if(desktop) {$('.active'+number+'Describe').fadeIn(); $('#git'+number).fadeIn(); $('#web'+number).fadeIn(); $('#fac'+number).fadeIn(); $('#twi'+number).fadeIn();}
}
function fadeOutProject(number)
{
	if(desktop) {$('.active'+number+'Describe').fadeOut(); $('#git'+number).fadeOut(); $('#web'+number).fadeOut(); $('#fac'+number).fadeOut(); $('#twi'+number).fadeOut();}
}
$('#project9').mouseenter(function(){ fadeInProject('9'); }).mouseleave(function() { fadeOutProject('9'); });
$('#project10').mouseenter(function(){ fadeInProject('10'); }).mouseleave(function() { fadeOutProject('10'); });
$('#project1').mouseenter(function(){ fadeInProject('1'); }).mouseleave(function() { fadeOutProject('1'); });
$('#project2').mouseenter(function(){ fadeInProject('2'); }).mouseleave(function() { fadeOutProject('2'); });
$('#project3').mouseenter(function(){ fadeInProject('3'); }).mouseleave(function() { fadeOutProject('3'); });
$('#project4').mouseenter(function(){ fadeInProject('4'); }).mouseleave(function() { fadeOutProject('4'); });
$('#project5').mouseenter(function(){ fadeInProject('5'); }).mouseleave(function() { fadeOutProject('5'); });
$('#project6').mouseenter(function(){ fadeInProject('6'); }).mouseleave(function() { fadeOutProject('6'); });
$('#project7').mouseenter(function(){ fadeInProject('7'); }).mouseleave(function() { fadeOutProject('7'); });
$('#project8').mouseenter(function(){ fadeInProject('8'); }).mouseleave(function() { fadeOutProject('8'); });