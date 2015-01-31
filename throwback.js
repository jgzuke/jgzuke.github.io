function setUpProjects()
{
	var windowWidth = $(window).width();
	$('#project1Top').width(windowWidth*1);
	$('#project2Top').width(windowWidth*1);
	$('#project3Top').width(windowWidth*0.43);
	$('#project4Top').width(windowWidth*0.55);
	$('#project5Top').width(windowWidth*0.58);
	$('#project6Top').width(windowWidth*0.40);
	$('#project7Top').width(windowWidth*0.44);
	$('#project8Top').width(windowWidth*0.539);
	for (var i = 1; i < 9; i++)
	{
		var height = $('#project'+i.toString()+'Top').height();
		var width = $('#project'+i.toString()+'Top').width();
		$('#project'+i.toString()).height(height);
		$('#project'+i.toString()).width(width);
		$('#project'+i.toString() + 'View').width(width);
		$('#project'+i.toString() + 'Top').fadeOut()
	};
}
$(document).ready(function()
{
	setUpProjects();
});
function fadeInProject(number)
{
	$('#project'+number+'Top').fadeIn();
}
function fadeOutProject(number)
{
	$('#project'+number+'Top').fadeOut()
}
$('#project1').mouseenter(function(){ fadeInProject('1'); }).mouseleave(function() { fadeOutProject('1'); });
$('#project2').mouseenter(function(){ fadeInProject('2'); }).mouseleave(function() { fadeOutProject('2'); });
$('#project3').mouseenter(function(){ fadeInProject('3'); }).mouseleave(function() { fadeOutProject('3'); });
$('#project4').mouseenter(function(){ fadeInProject('4'); }).mouseleave(function() { fadeOutProject('4'); });
$('#project5').mouseenter(function(){ fadeInProject('5'); }).mouseleave(function() { fadeOutProject('5'); });
$('#project6').mouseenter(function(){ fadeInProject('6'); }).mouseleave(function() { fadeOutProject('6'); });
$('#project7').mouseenter(function(){ fadeInProject('7'); }).mouseleave(function() { fadeOutProject('7'); });
$('#project8').mouseenter(function(){ fadeInProject('8'); }).mouseleave(function() { fadeOutProject('8'); });