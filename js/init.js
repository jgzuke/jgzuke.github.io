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
var projectSets = ['main', 'work', 'android', 'web'];

var sectionSet = 2;
var sectionSets = ['about', 'contact', 'projects'];

function showSectionSet(num) {
	if(sectionSet == num) return;
	sectionSet = num;
	$('.mainSections').hide();

	$('#page-projects-background').fadeOut(projectChangeAnimationTime);
	setTimeout(function () {
		$('#' + sectionSets[num] + 'Section').show();
		$('#page-projects-background').fadeIn(projectChangeAnimationTime);
	}, projectChangeAnimationTime);

	sectionSet = num;
}

function showProjectSet(num) {
	if(projectSet == num) return;
	projectSet = num;
	$('.mainSections').hide();
	$('#projectSection').show();

	var container = '#page-projects-background';
	if(sectionSet == 2) {
		container = '#projects-table';
	}
	$(container).fadeOut(projectChangeAnimationTime);
	$('#projectLinks div').removeClass("active");
	$('.projects-' + projectSets[num]).addClass("active");

	setTimeout(function () {
		$('.image-overlay-main').hide();
		$('.image-overlay-' + projectSets[num]).show();
		$(container).fadeIn(projectChangeAnimationTime);
	}, projectChangeAnimationTime);

	sectionSet = 2;
}

$(document).on('webkitfullscreenchange mozfullscreenchange fullscreenchange MSFullscreenChange', function(e) {
	handleResize();
});

$(document).ready(function() {
	handleResize();
});

var stateTopBarSticky = false;
var stateMobile = false;
$(window).scroll(function(){
	if(stateMobile) {
		homeHeight = parseInt($('#page-home-inner').css('height'), 10);
		if(homeHeight - $(this).scrollTop() <= 0) {
			if(!stateTopBarSticky) {
				$("#projectLinks").addClass("stick-to-top");
				stateTopBarSticky = true;
				handleResize();
			}
		} else {
			if(stateTopBarSticky) {
				$("#projectLinks").removeClass("stick-to-top");
				stateTopBarSticky = false;
				handleResize();
			}
		}
	}
});

function handleResize() {
	stateMobile = $(window).width() <= 600;
	if(stateMobile) {
		$("#fullsite").removeClass("page-big");
		if(stateTopBarSticky) {
			var topbarHeight = $('#projectLinks').css('height');
			$('#projects-table').css('margin-top', topbarHeight);
		} else {
			$('#projects-table').css('margin-top', '0px');
		}
	} else {
		$("#fullsite").addClass("page-big");
		var topbarHeight = $('#projectLinks').css('height');
		$('#projects-table').css('margin-top', topbarHeight);
	}

	var projectsWidth = $('#projects-table').css('width');
	$('#projectLinks').css('width', projectsWidth);

	// Sets overlays to same height and width as pictures
	var imHeight;
	var imWidth;
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

	var landingTitle = Math.floor(textScale * 500) + '%';
	var landingText = Math.floor(textScale * 110) + '%';
	var normalTitle = Math.floor(textScale * 400) + '%';
	$('#landing-title').css('font-size', landingTitle);
	$('.landing-text').css('font-size', landingText);
}