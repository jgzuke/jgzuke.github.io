$('#fab-home').click(function()
{
	$('html, body').animate(
	{
		scrollTop: $('#page-home').offset().top
	}, 'slow');
});

$('#fab-work, #link-work').click(function()
{
	$('html, body').animate(
	{
		scrollTop: $('#page-work').offset().top
	}, 'slow');
});

$('#fab-contact, #link-contact').click(function()
{
	$('html, body').animate(
	{
		scrollTop: $('#page-contact').offset().top
	}, 'slow');
});

$(document).on('webkitfullscreenchange mozfullscreenchange fullscreenchange MSFullscreenChange', function(e) {
	resizeImageOverlays();
});

$(document).ready(function() {
	resizeImageOverlays();
});

function resizeImageOverlays() {
	var imHeight = $('#firstPicture').css('height');
	var imWidth = $('#firstPicture').css('width');
	$('.image-overlay-text').css('height', imHeight);
	$('.image-overlay-text').css('width', imWidth);

	var heightInt = parseInt(imHeight, "10");
	var fontSizeScale = Math.pow(heightInt, 1); //constant to keep text scaling with size
	var fontSizeTitle = Math.floor(fontSizeScale * 0.7) + '%';
	var fontSizeBody = Math.floor(fontSizeScale*0.47) + '%';

	$('.image-overlay-text-title').css('font-size', fontSizeTitle);
	$('.image-overlay-text-main').css('font-size', fontSizeBody);
}