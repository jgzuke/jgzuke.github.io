$('.link-home').click(function() {
	$('html, body').animate({
		scrollTop: $('#page-home').offset().top
	}, 'slow');
});

$('.link-work').click(function() {
	$('html, body').animate({
		scrollTop: $('#page-projects').offset().top
	}, 'slow');
});

$('.link-contact').click(function() {
	$('html, body').animate({		
		scrollTop: $('#page-contact').offset().top		
	}, 'slow');
});

$('.expand-more-projects').click(function() {
	showExtraProjects();
});

$('.collapse-more-projects').click(function() {
	hideExtraProjects();
});

function hideExtraProjects() {
	extraProjectsHidden = true;
	$('.image-overlay-extra').hide();
	$('.collapse-more-projects').hide();
	$('.expand-more-projects').show();
}

function showExtraProjects() {
	extraProjectsHidden = false;
	$('.image-overlay-extra').show();
	$('.expand-more-projects').hide();
	$('.collapse-more-projects').show();
}

$(document).on('webkitfullscreenchange mozfullscreenchange fullscreenchange MSFullscreenChange', function(e) {
	resizeImageOverlays();
});

$(document).ready(function() {
	resizeImageOverlays();
	hideExtraProjects();
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
	var landingText = Math.floor(textScale * 150) + '%';
	var normalTitle = Math.floor(textScale * 500) + '%';
	var modalTitle = Math.floor(textScale * 230) + '%';
	$('#landing-title').css('font-size', landingTitle);
	$('.landing-text').css('font-size', landingText);
	$('.section-header').css('font-size', normalTitle);
	$('.modal-header').css('font-size', modalTitle);
}