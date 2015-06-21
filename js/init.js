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