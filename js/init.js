$('.projects-main').click(function() {
	showProjectSet(0);
});
$('.projects-work').click(function() {
	showProjectSet(1);
});
$('.projects-android').click(function() {
	showProjectSet(2);
});
$('.projects-web').click(function() {
	showProjectSet(3);
});

$('.aboutLink').click(function() {
	showSectionSet(0);
});
$('.projectsLink').click(function() {
	showSectionSet(1);
});
$('.contactLink').click(function() {
	showSectionSet(2);
});

var projectChangeAnimationTime = 150;
var projectSet = -1;
var projectSets = ['top', 'work', 'android', 'web'];

var sectionSets = ['about', 'project', 'contact'];

var stateMobile = true;

function showSectionSet(num) {
	$('html, body').animate({
		scrollTop: $('#' + sectionSets[num] + 'Section').offset().top
	}, 'slow');
}

function showProjectSet(num) {
	if(projectSet == num) return;
	projectSet = num;

	$('#projects-table').fadeOut(projectChangeAnimationTime);
	$('#projectLinks p').removeClass("active");
	$('.projects-' + projectSets[num]).addClass("active");

	setTimeout(function () {
		$('#projects-table .col').hide();
		$('#projects-table .' + projectSets[num]).show();
		$('#projects-table').fadeIn(projectChangeAnimationTime);
	}, projectChangeAnimationTime);
}

$(document).on('webkitfullscreenchange mozfullscreenchange fullscreenchange MSFullscreenChange', function(e) {
	handleResize();
});

$(document).ready(function() {
	handleResize();
	$(window).scroll(function() {
    	if($(window).scrollTop() > $('#contactSection').offset().top - 300) {
    		$('#navLinks p').removeClass("active");
    		$('.contactLink').addClass("active");
    	} else if($(window).scrollTop() > $('#projectSection').offset().top - 300) {
    		$('#navLinks p').removeClass("active");
    		$('.projectsLink').addClass("active");
    	} else {
    		$('#navLinks p').removeClass("active");
    		$('.aboutLink').addClass("active");
    	}
    });
    showProjectSet(0);
});

function handleResize() {
	handleMobileSwitch();

	var projectsWidth = $('#projects-table').css('width');
	$('#projectLinks').css('width', projectsWidth);

	// Sets overlays to same height and width as pictures
	var imHeight;
	var imWidth;
	imHeight = $('#project-pic-first').css('height');
	imWidth = $('#project-pic-first').css('width');
	$('#projectSection .col div').css('height', imHeight);
	$('#projectSection .col div').css('width', imWidth);

	// Sets text size to fit well in overlay based on overlay dimensions
	var heightInt = parseInt(imHeight, "10");
	var fontSizeScale = Math.pow(heightInt, 1); //constant to keep text scaling with size
	var fontSizeTitle = Math.floor(fontSizeScale * 0.65) + '%';
	var fontSizeBody = Math.floor(fontSizeScale*0.46) + '%';

	$('#projects-table h4').css('font-size', fontSizeTitle);
	$('#projects-table p').css('font-size', fontSizeBody);

	// Sets text to scale nicely with the size of the device screen (a bit smaller on phones)
	var textScale = Math.pow($(window).width(), 0.13) / 2.4;

	var landingText = Math.floor(textScale * 130) + '%';
	var normalTitle = Math.floor(textScale * 400) + '%';
	$('.landing-text').css('font-size', landingText);
	$('.normal-title').css('font-size', normalTitle);
}

function handleMobileSwitch() {
	if(stateMobile == $(window).width() <= 600) return;
	stateMobile = $(window).width() <= 600;
	if(stateMobile) {
		$("#fullsite").removeClass("page-big");
	} else {
		$("#fullsite").addClass("page-big");
	}
}