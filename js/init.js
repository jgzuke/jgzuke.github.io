$('.projects-top').click(function() {
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
    loadJSON();
});

function loadJSON() {
	var xobj = new XMLHttpRequest();
	xobj.overrideMimeType("application/json");
	xobj.open('GET', 'js/projects.json', true);
	xobj.onreadystatechange = function () {
		if (xobj.readyState == 4 && xobj.status == "200") {
			// .open will NOT return a value but simply returns undefined in async mode so use a callback
			buildProjects(xobj.responseText);
		}
	}
	xobj.send(null);
}

function buildProjects(jsonresponse) {
	var projects = JSON.parse(jsonresponse).projects;
	for(var i = 0; i < projects.length; i++) {
	    $('#projects-table').append(buildProject(projects[i], i == 0));
	}
}

function buildProject(project, first) {
	var title = project.name;
	var github = project.github;
	var web = project.web;
	var twitter = project.twitter;
	var description = project.description;
	var image = project.image;
	var tags = project.tags;
	var id = '';

	if (first) {
		id = 'id="project-pic-first"';
	}

	var links = ``;
	var bubbles = 0;
	if (github != null) {
		bubbles ++;
		links += `<a href="${github}" target="_blank"><img src="ic/github.png" class = "link${bubbles}"/></a>`;
	}
	if (web != null) {
		bubbles ++;
		links += `<a href="${web}" target="_blank"><img src="ic/weblink.png" class = "link${bubbles}"/></a>`;
	}
	if (twitter != null) {
		bubbles ++;
		links += `<a href="${twitter}" target="_blank"><img src="ic/twitter.png" class = "link${bubbles}"/></a>`;
	}
    var newdiv = $(`<div class="col s12 m6 l4 ${tags}"><div>${links}<h4>${title}</h4><p>${description}</p></div><img class="image-overlay-background z-depth-3" src="./images/badges/${image}" ${id}/></div>`);
    return newdiv;
}

function handleResize() {
	var windowWidth = $(window).width()
	handleMobileSwitch(windowWidth);

	$('#projectLinks').css('width', $('#projects-table').css('width'));

	// Sets overlays to same height and width as pictures
	$('#projectSection .col div').css('height', $('#project-pic-first').css('height'));
	$('#projectSection .col div').css('width', $('#project-pic-first').css('width'));

	// Sets text size to fit well in overlay based on overlay dimensions
	var picHeight = parseInt($('#project-pic-first').css('height'), "10");
	$('#projects-table h4').css('font-size', Math.floor(picHeight * 0.65) + '%');
	$('#projects-table p').css('font-size', Math.floor(picHeight * 0.46) + '%');

	// Sets text to scale nicely with the size of the device screen (a bit smaller on phones)

	var navText = Math.floor(Math.pow($('#page-left').width(), 0.5) * 8) + '%';
	var landingText = Math.floor(Math.pow(windowWidth, -0.08) * 250) + '%';
	var normalTitle = Math.floor(Math.pow(windowWidth, 0.13) * 170) + '%';
	$('.nav-text').css('font-size', navText);
	$('.landing-text').css('font-size', landingText);
	$('.normal-title').css('font-size', normalTitle);
}

function handleMobileSwitch(windowWidth) {
	if(stateMobile == windowWidth <= 600) return;
	stateMobile = windowWidth <= 600;
	if(stateMobile) {
		$("#fullsite").removeClass("page-big");
	} else {
		$("#fullsite").addClass("page-big");
	}
}