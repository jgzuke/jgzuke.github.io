var githubSVG = '<g transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)" stroke="none"><path d="M2314 4070 c-624 -79 -1138 -503 -1327 -1095 -99 -310 -96 -676 7 -983 123 -363 394 -690 723 -873 108 -60 273 -129 307 -129 13 0 35 9 50 21 l26 20 0 162 0 162 -147 1 c-126 1 -156 4 -204 23 -89 34 -132 78 -194 200 -53 105 -81 139 -185 230 -40 35 -43 41 -30 56 11 13 26 16 65 13 92 -8 170 -62 249 -171 91 -128 155 -163 288 -154 92 6 158 22 162 40 15 63 43 129 68 160 16 21 28 40 27 42 -2 2 -49 11 -104 20 -212 36 -397 141 -481 272 -83 130 -124 287 -125 473 0 94 5 135 22 192 23 79 66 164 106 212 23 27 24 35 17 76 -5 25 -9 97 -8 160 1 140 24 223 63 228 55 8 251 -66 357 -133 50 -32 59 -35 87 -26 157 52 567 52 724 0 28 -9 37 -6 88 26 109 70 295 140 353 133 21 -2 29 -13 44 -58 26 -74 34 -213 18 -301 l-13 -68 29 -41 c54 -76 73 -115 100 -200 24 -79 26 -94 21 -230 -5 -165 -24 -252 -82 -374 -81 -171 -259 -290 -508 -337 -62 -12 -114 -23 -116 -25 -3 -2 5 -14 16 -27 68 -74 83 -158 83 -480 l0 -248 25 -24 c33 -34 59 -32 170 14 307 126 546 322 733 602 304 454 342 1067 96 1561 -222 447 -618 754 -1103 854 -140 29 -370 40 -497 24z"/></g>'

var projectChangeAnimationTime = 150;
var currentPageName = '';
var projectsJSON = {};

var pages = {
	'about': {
		'isAbout': true,
	},
	'experience': {
		'isAbout': false,
		'projectSet': ['coursera-full-stack', 'coursera-mobile', 'enflick', 'osc']
	},
	'projects': {
		'isAbout': false,
		'projectSet': ['techtanks', 'ddr-generation', 'army-commander', 'news-feed', 'swipler', 'jarvis', '3d-viewer', 'intoxicmate', 'myoguitar']
	},
	'initiatives': {
		'isAbout': false,
		'projectSet': ['tech-retreat', 'terrible-hack', 'engsoc', 'sipo']
	}
}

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
		$('#page-right').fadeIn(projectChangeAnimationTime);
	}, projectChangeAnimationTime);
	currentPageName = pageName;
}

$(document).ready(function() {
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
  return $(
		`<div>
			<h4>${project.name}</h4>
			<p>${project.description}</p>
			${project.technologies ? project.technologies : ''}
			${project.github ?
			`<a href="${project.github}" target="_blank">
				<svg class="bubbleLink" version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500.000000 500.000000" preserveAspectRatio="xMidYMid meet">
					${githubSVG}
				</svg>
			</a>` : ''}
			${project.web ?
			`<a href="${project.web}" target="_blank">
				<svg class="bubbleLink" version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500.000000 500.000000" preserveAspectRatio="xMidYMid meet">
					${githubSVG}
				</svg>
			</a>` : ''}
		</div>`);
}
