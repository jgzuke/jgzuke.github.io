$('.link-home').click(function() {
	$('html, body').animate({
		scrollTop: $('#page-home').offset().top
	}, 'slow');
});

$('.link-projects').click(function() {
	$('html, body').animate({
		scrollTop: $('#page-projects').offset().top
	}, 'slow');
});

$('.link-work').click(function() {
	$('html, body').animate({
		scrollTop: $('#page-work').offset().top
	}, 'slow');
});

$('.link-contact').click(function() {
	$('html, body').animate({		
		scrollTop: $('#page-contact').offset().top		
	}, 'slow');
});

$('.select-projects-next').click(function() {
	if(currentProjectScreen == 1) {
		showSecondProjects();
	} else {
		showThirdProjects();
	}
});

$('.select-projects-prev').click(function() {
	if(currentProjectScreen == 3) {
		showSecondProjects();
	} else {
		showFirstProjects();
	}
});

var currentProjectScreen = 1;

function showFirstProjects() {
	currentProjectScreen = 1;
	$('.image-overlay-first').show();
	$('.image-overlay-second').hide();
	$('.image-overlay-third').hide();

	$('.select-projects-prev').hide();
	$('.select-projects-next').show();
}

function showSecondProjects() {
	currentProjectScreen = 2;
	$('.image-overlay-first').hide();
	$('.image-overlay-second').show();
	$('.image-overlay-third').hide();

	$('.select-projects-prev').show();
	$('.select-projects-next').show();
}

function showThirdProjects() {
	currentProjectScreen = 3;
	$('.image-overlay-first').hide();
	$('.image-overlay-second').hide();
	$('.image-overlay-third').show();

	$('.select-projects-prev').show();
	$('.select-projects-next').hide();
}

$(document).on('webkitfullscreenchange mozfullscreenchange fullscreenchange MSFullscreenChange', function(e) {
	resizeImageOverlays();
});

$(document).ready(function() {
	resizeImageOverlays();
	showFirstProjects();
});

function resizeImageOverlays() {
	// Sets overlays to same hieght and width as pictures
	var imHeight = $('#firstPicture').css('height');
	var imWidth = $('#firstPicture').css('width');
	$('.image-overlay-text').css('height', imHeight);
	$('.image-overlay-text').css('width', imWidth);


	// Sets text size to fit well in overlay based on overlay dimensions
	var heightInt = parseInt(imHeight, "10");
	var fontSizeScale = Math.pow(heightInt, 1); //constant to keep text scaling with size
	var fontSizeTitle = Math.floor(fontSizeScale * 0.65) + '%';
	var fontSizeBody = Math.floor(fontSizeScale*0.46) + '%';

	$('.image-overlay-text-title').css('font-size', fontSizeTitle);
	$('.image-overlay-text-main').css('font-size', fontSizeBody);


	// Sets text to scale nicely with the size of the device screen (a bit smaller on phones)
	var textScale = Math.pow($(window).width(), 0.48) / 30;

	var landingTitle = Math.floor(textScale * 600) + '%';
	var landingText = Math.floor(textScale * 180) + '%';
	var normalTitle = Math.floor(textScale * 400) + '%';
	$('#landing-title').css('font-size', landingTitle);
	$('.landing-text').css('font-size', landingText);
	$('.section-header').css('font-size', normalTitle);
}