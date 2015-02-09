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
	document.getElementById("backgrounddivtop").style.opacity = opacity;
	opacity = 1 - ((scrollHeight + windowHeight-scrolled)/windowHeight*1.5);
	document.getElementById("backgrounddivbottom").style.opacity = opacity;
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
	for (var i = 1; i < 13; i++)
	{
		$('#project'+i.toString()).height(height);
	};
	desktop = ($(window).width() >= 992)
	phone = ($(window).width() <= 768)
	if(oldDesktop!=desktop)
	{
		if(!desktop)
	    {
	    	$('#myimage').hide();
	    	setUpProjects();
	    } else
	    {
	    	$('#myimage').show();
	    	setUpProjects();
	    }
	}
	if(oldPhone!=phone)
	{
	    if(phone)
	    {
	    	document.getElementById("toptext").style.marginTop = '18vh';
	    	document.getElementById("topname").style.fontSize = "500%";
	    	document.getElementById("topdescription").style.fontSize = "180%";
	    	document.getElementById("aboutBlurb").style.marginLeft = '-10%';
	    	document.getElementById("aboutBlurb").style.width = '120%';
	    	document.getElementById("aboutRows").style.marginLeft = '-15%';
	    	document.getElementById("aboutRows").style.width = '130%';
	    	document.getElementById("contactForm").style.marginLeft = '0%';
	    	document.getElementById("contactForm").style.width = '100%';
	    	document.getElementById("contactHeader").style.marginTop = '-50px';
	    	$(".myheaders").addClass('myheadersMobile');
	    	$('#throwbackLink').hide();
	    	for(var i = 1; i < 5; i++)
	    	{
	    		document.getElementById('topLi'+i.toString()).style.height = '40px';
	    		document.getElementById('topLi'+i.toString()).style.width = '40px';
	    	}
	    	document.getElementById('toAbout').style.height = '60px';
	    	document.getElementById('toAbout').style.width = '60px';

	    	$(".projectLeft").removeClass('projectOnLeft');
	    	$(".projectRight").removeClass('projectOnRight');
	    	$(".projectLeft, .projectRight").addClass('projectInCenter');
	    	$(".projectRows").removeClass('projectRowsNormal');
	    	$(".projectRows").addClass('projectRowsMobile');
	    } else
	    {
	    	document.getElementById("toptext").style.marginTop = '28vh';
	    	document.getElementById("topname").style.fontSize = "700%";
	    	document.getElementById("topdescription").style.fontSize = "250%";
	    	document.getElementById("aboutBlurb").style.marginLeft = '0%';
	    	document.getElementById("aboutBlurb").style.width = '100%';
	    	document.getElementById("aboutRows").style.marginLeft = '0%';
	    	document.getElementById("aboutRows").style.width = '100%';
	    	document.getElementById("contactForm").style.marginLeft = '15%';
	    	document.getElementById("contactForm").style.width = '70%';
	    	document.getElementById("contactHeader").style.marginTop = '0px';
	    	$(".myheaders").removeClass('myheadersMobile');
	    	$('#throwbackLink').show();
	    	for(var i = 1; i < 5; i++)
	    	{
	    		document.getElementById('topLi'+i.toString()).style.height = '60px';
	    		document.getElementById('topLi'+i.toString()).style.width = '60px';
	    	}
	    	document.getElementById('toAbout').style.height = '80px';
	    	document.getElementById('toAbout').style.width = '80px';

	    	$(".projectLeft, .projectRight").removeClass('projectInCenter');
	    	$(".projectLeft").addClass('projectOnLeft');
	    	$(".projectRight").addClass('projectOnRight');
	    	$(".projectRows").removeClass('projectRowsMobile');
	    	$(".projectRows").addClass('projectRowsNormal');
	    }
	}
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
	for (var i = 1; i < 13; i++)
	{
		$('.project'+i.toString()+'slide').first().addClass('active'+i.toString());
		$('.project'+i.toString()+'slide').hide();
		$('.active'+i.toString()).show();
		$('.project'+i.toString()+'describe').first().addClass('active'+i.toString()+'Describe');
		$('.project'+i.toString()+'describe').hide();
		$('.active'+i.toString()+'Describe').show();
		$('#project'+i.toString()+'Top').hide();
	};

}
$(document).ready(function()
{
	$('body').addClass('stop-scrolling');
	$("#toptext").fadeIn(1500, 'swing');
	setTimeout(function ()
	{
		for (var i = 1; i < 5; i++)
		{
			$('#topLi'+i.toString()).fadeIn(1500, 'swing');
		};
		$('#toAbout').fadeIn(1500, 'swing');
		$('#tophr').fadeIn(1500, 'swing');
	}, 900);
	setTimeout(function ()
	{
		$('#backgroundfixed').fadeIn(1500, 'swing');
		$('#fullNavbar').fadeIn(1500, 'swing');
	}, 1200);
	setTimeout(function ()
	{
		$(".projectLeft").addClass('projectOnLeft');
		$(".projectRight").addClass('projectOnRight');
		$(".projectRows").addClass('projectRowsNormal');
		resizeScrolling();
		setUpProjects();
		prevPic(1);
		prevPic(2);
		prevPic(5);
		prevPic(6);
		prevPic(7);
		prevPic(8);
	}, 1400);
	setTimeout(function ()
	{
		$('#toAbout').animate({width: '80px', height: '80px', marginTop: '0px', marginBottom: '0px'}, 'slow');
		/*$('#toAbout').animate({  borderSpacing: -360 }, {
		    step: function(now,fx) {
		      $(this).css('-webkit-transform','rotate('+now+'deg)'); 
		      $(this).css('-moz-transform','rotate('+now+'deg)');
		      $(this).css('transform','rotate('+now+'deg)');
		    },
		    duration:'slow'
		},'swing');*/
	}, 1800);
	setTimeout(function ()
	{
		$('body').removeClass('stop-scrolling');
	}, 2800);
});
function resize(toExpand, widthSet, heightSet, sideMargin, mwidthSet, mheightSet, msideMargin)
{
	if(phone) $('#'+toExpand).animate({width: mwidthSet+'px', height: mheightSet+'px', marginLeft: msideMargin+'px', marginRight: msideMargin+'px'}, 'fast');
	else $('#'+toExpand).animate({width: widthSet+'px', height: heightSet+'px', marginLeft: sideMargin+'px', marginRight: sideMargin+'px'}, 'fast');
}
$('#topLi1').mouseenter(function(){ resize('topLi1', '80', '80', '-10', '60', '60', '-10'); }).mouseleave(function() { resize('topLi1', '60', '60', '0', '40', '40', '0'); });
$('#topLi2').mouseenter(function(){ resize('topLi2', '80', '80', '-10', '60', '60', '-10'); }).mouseleave(function() { resize('topLi2', '60', '60', '0', '40', '40', '0'); });
$('#topLi3').mouseenter(function(){ resize('topLi3', '80', '80', '-10', '60', '60', '-10'); }).mouseleave(function() { resize('topLi3', '60', '60', '0', '40', '40', '0'); });
$('#topLi4').mouseenter(function(){ resize('topLi4', '80', '80', '-10', '60', '60', '-10'); }).mouseleave(function() { resize('topLi4', '60', '60', '0', '40', '40', '0'); });




function prevPic(num)
{
	$('.active'+num).removeClass('active'+num).addClass('oldActive');
	$('.active'+num+'Describe').removeClass('active'+num+'Describe').addClass('oldActiveDescribe');
	if ($('.oldActive').is(':first-child'))
	{
		$('.project'+num+'slide').last().addClass('active'+num);
		$('.project'+num+'describe').last().addClass('active'+num+'Describe');
	} else
	{
		$('.oldActive').prev().addClass('active'+num);
		$('.oldActiveDescribe').prev().addClass('active'+num+'Describe');
	}
	$('.oldActive').removeClass('oldActive');
	$('.oldActiveDescribe').removeClass('oldActiveDescribe');
	$('.project'+num+'slide').fadeOut();
	$('.project'+num+'describe').fadeOut();
	$('.active'+num).fadeIn();
	$('.active'+num+'Describe').fadeIn();
}
function nextPic(num)
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


function fadeInProject(number)
{
	if(desktop) {$('#project'+number+'Top').fadeIn();}
}
function fadeOutProject(number)
{
	if(desktop) {$('#project'+number+'Top').fadeOut()}
}
$('#project11').mouseenter(function(){ fadeInProject('11'); }).mouseleave(function() { fadeOutProject('11'); });
$('#project12').mouseenter(function(){ fadeInProject('12'); }).mouseleave(function() { fadeOutProject('12'); });
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

var faded = [true, true, true, true, true, true, true, true, true, true];
function clickMobile(number)
{
	if(phone)
	{
		if(faded[number])
		{
			$('#project'+number.toString()+'Top').fadeIn();
			faded[number] = false;
		} else
		{
			$('#project'+number.toString()+'Top').fadeOut();
			faded[number] = true;
		}
	}
}
$('#project1').click(function(){ clickMobile(1); });
$('#project2').click(function(){ clickMobile(2); });
$('#project3').click(function(){ clickMobile(3); });
$('#project4').click(function(){ clickMobile(4); });
$('#project5').click(function(){ clickMobile(5); });
$('#project6').click(function(){ clickMobile(6); });
$('#project7').click(function(){ clickMobile(7); });
$('#project8').click(function(){ clickMobile(8); });
$('#project9').click(function(){ clickMobile(9); });
$('#project10').click(function(){ clickMobile(10); });
$('#project11').click(function(){ clickMobile(11); });
$('#project12').click(function(){ clickMobile(12); });