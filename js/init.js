var projectChangeAnimationTime = 150;
var currentPageName = -1;
var projectSets = ['top', 'work', 'android', 'web'];
var projectsJSON = {};
var sectionSets = ['about', 'project', 'contact'];

var pages = {
	'about': {
		'isAbout': true,
	},
	'experience': {
		'isAbout': false,
		'projectSet': ['coursera', 'enflick', 'osc']
	},
	'projects': {
		'isAbout': false,
		'projectSet': ['techtanks', 'army-commander', '3d-viewer', 'swipler']
	},
	'initiatives': {
		'isAbout': false,
		'projectSet': ['tech-retreat', 'engsoc', 'sipo']
	}
}

var stateMobile = true;
function showPage(pageName) {
	if(currentPageName == pageName) return;
	page = pages[pageName];
	$('#page-right').fadeOut(projectChangeAnimationTime);
	$('#navLinks p').removeClass("active");
	$(`#${pageName}Link`).addClass("active");
	setTimeout(function () {
		if (page.isAbout) {
			$('#about').show();
			$('#projects').hide();
		} else {
			$('#about').hide();
			$('#projects').show();
			$('#projects-table').empty();
			for(var i = 0; i < page.projectSet.length; i++) {
				var project = projectsJSON[page.projectSet[i]];
			  $('#projects-table').append(buildProject(project, i == 0));
			}
		}
		handleResize();
		$('#page-right').fadeIn(projectChangeAnimationTime);
	}, projectChangeAnimationTime);
	currentPageName = pageName;
}

$(document).ready(function() {
	handleResize();
	showPage('about');
  loadJSON();
});

function loadJSON() {
	var xobj = new XMLHttpRequest();
	xobj.overrideMimeType("application/json");
	xobj.open('GET', 'js/projects.json', true);
	xobj.onreadystatechange = function () {
		if (xobj.readyState == 4 && xobj.status == "200") {
			projectsJSON = JSON.parse(xobj.responseText);
		}
	}
	xobj.send(null);
}

function buildProject(project, first) {
	var id = first ? 'id="project-pic-first"' : '';

	var links = ``;
	var bubbles = 0;
	if (project.github) {
		bubbles ++;
		links += `<a href="${project.github}" target="_blank"><img src="ic/github.png" class = "link${bubbles}"/></a>`;
	}
	if (project.web) {
		bubbles ++;
		links += `<a href="${project.web}" target="_blank"><img src="ic/weblink.png" class = "link${bubbles}"/></a>`;
	}
  return $(
		`<div class="col s12 m6 l4">
			<div>
				${links}
				<h4>${project.name}</h4>
				<p>${project.description}</p>
			</div>
			<img class="image-overlay-background z-depth-3" src="./images/badges/${project.image}" ${id}/>
		</div>`);
}

$(document).on('webkitfullscreenchange mozfullscreenchange fullscreenchange MSFullscreenChange', function(e) {
	handleResize();
});

function handleResize() {
	var windowWidth = $(window).width()
	handleMobileSwitch(windowWidth);
	handleTextResizing(windowWidth);
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

function handleTextResizing(windowWidth) {
	$('#projectLinks').css('width', $('#projects-table').css('width'));

	// Sets overlays to same height and width as pictures
	$('#projects .col div').css('height', $('#project-pic-first').css('height'));
	$('#projects .col div').css('width', $('#project-pic-first').css('width'));

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
