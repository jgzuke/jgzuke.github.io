$('.link-contact').click(function() {
	$('#contact-modal').openModal();
});

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

var projectChangeAnimationTime = 150;
var projectSet = 0;
var projectSets = ['main', 'work', 'android', 'web']

function showProjectSet(num) {
	projectSet = num;
	$('#projects-table').fadeOut(projectChangeAnimationTime);

	setTimeout(function () {
		$('.image-overlay-main').hide();
		$('.image-overlay-' + projectSets[num]).show();
		$('#projects-table').fadeIn(projectChangeAnimationTime);
	}, projectChangeAnimationTime);
}

$(document).on('webkitfullscreenchange mozfullscreenchange fullscreenchange MSFullscreenChange', function(e) {
	resizeImageOverlays();
});

$(document).ready(function() {
	resizeImageOverlays();
});

function resizeImageOverlays() {
	// Sets overlays to same height and width as pictures
	var imHeight;
	var imWidth
	imHeight = $('#project-pic-first').css('height');
	imWidth = $('#project-pic-first').css('width');
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

	var landingTitle = Math.floor(textScale * 300) + '%';
	var landingText = Math.floor(textScale * 110) + '%';
	var normalTitle = Math.floor(textScale * 400) + '%';
	$('#landing-title').css('font-size', landingTitle);
	$('.landing-text').css('font-size', landingText);
}