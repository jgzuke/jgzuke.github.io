$('.link-home').click(function()
{
	$('html, body').animate(
	{
		scrollTop: $('#page-home').offset().top
	}, 'slow');
});

$('.link-work').click(function()
{
	$('html, body').animate(
	{
		scrollTop: $('#page-work').offset().top
	}, 'slow');
});

$('.link-contact').click(function()
{
	$('#contact-modal').openModal();
});

$('#topLi1').mouseenter(function(){ resize('topLi1', '80', '80', '-10', '60', '60', '-10'); }).mouseleave(function() { resize('topLi1', '60', '60', '0', '40', '40', '0'); });
$('#topLi2').mouseenter(function(){ resize('topLi2', '80', '80', '-10', '60', '60', '-10'); }).mouseleave(function() { resize('topLi2', '60', '60', '0', '40', '40', '0'); });
$('#topLi3').mouseenter(function(){ resize('topLi3', '80', '80', '-10', '60', '60', '-10'); }).mouseleave(function() { resize('topLi3', '60', '60', '0', '40', '40', '0'); });
$('#topLi4').mouseenter(function(){ resize('topLi4', '80', '80', '-10', '60', '60', '-10'); }).mouseleave(function() { resize('topLi4', '60', '60', '0', '40', '40', '0'); });


$(document).on('webkitfullscreenchange mozfullscreenchange fullscreenchange MSFullscreenChange', function(e) {
	resizeImageOverlays();
});

$(document).ready(function() {
	resizeImageOverlays();
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