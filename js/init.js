$('.link-contact').click(function() {
	$('#contact-modal').openModal();
});

var currentProjectSet = 1;
var projectChangeAnimationTime = 150;

function showProjectSet(num) {
	$('#projects-table').fadeOut(projectChangeAnimationTime);

	setTimeout(function () {
		if(num == 1) {
			showFirstProjects();
		}
		if(num == 2) {
			showSecondProjects();
		}
		if(num == 3) {
			showThirdProjects();
		}
		$('#projects-table').fadeIn(projectChangeAnimationTime);
	}, projectChangeAnimationTime);
}

function showFirstProjects() {
	currentProjectSet = 1;
    $('.image-overlay-first').show();
	$('.image-overlay-second').hide();
	$('.image-overlay-third').hide();

	$('.select-projects-prev').hide();
	$('.select-projects-next').show();
}

function showSecondProjects() {
	currentProjectSet = 2;
	$('.image-overlay-first').hide();
	$('.image-overlay-second').show();
	$('.image-overlay-third').hide();

	$('.select-projects-prev').show();
	$('.select-projects-next').hide(); //show();
}

function showThirdProjects() {
	currentProjectSet = 3;
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
	showFirstProjects();
	resizeImageOverlays();
});

function resizeImageOverlays() {
	// Sets overlays to same hieght and width as pictures
	var imHeight;
	var imWidth
	if(currentProjectSet == 1) {
		imHeight = $('#project-pic-first').css('height');
		imWidth = $('#project-pic-first').css('width');
	} else if(currentProjectSet == 2) {
		imHeight = $('#project-pic-second').css('height');
		imWidth = $('#project-pic-second').css('width');
	} else {
		imHeight = $('#project-pic-third').css('height');
		imWidth = $('#project-pic-third').css('width');
	}
	$('.image-overlay-text').css('height', imHeight);
	$('.image-overlay-text').css('width', imWidth);


	// Sets text size to fit well in overlay based on overlay dimensions
	var heightInt = parseInt(imHeight, "10");
	var fontSizeScale = Math.pow(heightInt, 1); //constant to keep text scaling with size
	var fontSizeTitle = Math.floor(fontSizeScale * 0.55) + '%';
	var fontSizeBody = Math.floor(fontSizeScale*0.26) + '%';

	$('.image-overlay-text-title').css('font-size', fontSizeTitle);
	$('.image-overlay-text-main').css('font-size', fontSizeBody);


	// Sets text to scale nicely with the size of the device screen (a bit smaller on phones)
	var textScale = Math.pow($(window).width(), 0.48) / 30;

	var landingTitle = Math.floor(textScale * 300) + '%';
	var landingText = Math.floor(textScale * 110) + '%';
	var normalTitle = Math.floor(textScale * 400) + '%';
	$('#landing-title').css('font-size', landingTitle);
	$('.landing-text').css('font-size', landingText);
}