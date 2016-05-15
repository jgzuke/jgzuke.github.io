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

    //var json = '{"projects":[{"name":"Enflick","web":"https://www.textnow.com","twitter":"https://twitter.com/enflick","description":"At Enflick I worked as part of the android team on the Textnow app. It was an incredible experience, I learned a ton, and got to design and code super cool things.","image":"textnow.png","tags":"work android top"},{"name":"TechRetreat","web":"http://www.techretreat.ca","twitter":"https://twitter.com/techretreat","description":"I was one of the organizers of TechRetreat as well as a teacher for our Learnathon. We took kids with no coding experience and in less than ten hours have them writing functional ruby AIs.","image":"techretreat.png","tags":"work top"},{"name":"Army Commander","github":"https://github.com/jgzuke/DrawingGame","description":"Create and control an army using custom or preset gestures for different formations and actions. Enemies work together and form groups to defend themselves","image":"commander.jpg","tags":"android top"},{"name":"TechTanks","web":"http://techtanks.techretreat.ca/","github":"https://github.com/TechRetreat/game","description":"Write a ruby AI to control a tank, then test against your friends programs, all in your browser with no setup. Made for TechRetreat Learnathon.","image":"techtanks.png","tags":"web top"},{"name":"3D Viewer","github":"https://github.com/jgzuke/3DCity","description":"Takes sets of connected 3D points and draws them onto a canvas. Walk and jump using screen controls and look around by rotating phone. Coded from scratch","image":"3d.png","tags":"android top"},{"name":"Swipler","github":"https://github.com/icechen1/Swipler","description":"Chrome extention that use the doppler effect to detect hand gestures using your laptops mic and speakers. Switches/removes tabs when you swipe different directions","image":"swipler.png","tags":"web top"},{"name":"IntoxicMate","github":"https://github.com/IntoxicM8/android","description":"Uses your location, time, heart-rate etc over time to guess when you are intoxicated. IntoxicMate will then help guide you home, call a cab, or in emergencies call friends/family","image":"intoxic.png","tags":"android top"},{"name":"MyoGuitar","github":"https://github.com/jgzuke/MyoProject","description":"Use the Myo to play a virtual guitar on your android device. Detects strums when you have your hand closed and uses your fingers positions to play chords on the phone","image":"myoguitar.jpg","tags":"android top"},{"name":"War of Myths","github":"https://github.com/jgzuke/OpenWOM","description":"Play as a mage and explore the world. Enemies path and search around obstacles, dodge harm, and guess your movement. Started in grade 6 as a flash game, written for android in grade 11","image":"wom.png","tags":"android top"},{"name":"EngSoc","web":"https://www.engsoc.uwaterloo.ca/","description":"At Uwaterloo I help out the Engineering Society as an Ambassador, Director, Orientation Leader, and First Year Mentor, as well as helping with specific events","image":"engsoc.png","tags":"work"},{"name":"SIPOFoundation","web":"http://www.sipofoundation.org/","twitter":"https://twitter.com/sipofoundation","description":"In Toronto I got to be part of an organization aiming to Inspire and Equip young professionals. I webmastered and helped with SIPOConference and SIPOWorkshops","image":"sipo.png","tags":"work"},{"name":"Ontario Science Centre","web":"http://www.ontariosciencecentre.ca/","twitter":"https://twitter.com/ontsciencectr","description":"After spending second semester grade 12 studying at the OSC, I also got a chance to work there as a Host, interacting with visitors and helping with shows","image":"osc.png","tags":"work"},{"name":"Portfolio Site","github":"https://github.com/jgzuke/jgzuke.github.io","description":"The first website I ever made, my portfolio has gone through many variations since, from the <a href=\'old/original.html\' target=\'_blank\'>Original</a> to my first attempt at using <a href=\'old/material.html\' target=\'_blank\'>Material Design","image":"website.png","tags":"web"},{"name":"Flash Games","web":"http://jgzuke.me/Old-Flash-Games/","github":"https://github.com/jgzuke/Old-Flash-Games","description":"A collection of old as2 and as3 flash games made around grade 5 to 8","image":"throwback.png","tags":"web"},{"name":"Find Me","github":"https://github.com/jgzuke/Find-Me-Web-App","description":"Create and share item lists with your friends through their email. People on a list can move and search for items, display list contents, and add or delete items","image":"findme.png","tags":"web"},{"name":"Aaron Z Music","web":"http://aazukewich.github.io","github":"https://github.com/jgzuke/aazukewich.github.io","description":"My brothers website, still under developement and needs to be filled with content, the structure has all been finished though","image":"aarons.png","tags":"web"},{"name":"Ring Manager","github":"https://github.com/jgzuke/NotificationsManager","description":"Create sets of ring/vibration settings for different times/days, for example Work: 9-5 Mon-Fri. The current active set decides notification actions for certain contacts or groups","image":"notif.png","tags":"android"},{"name":"Myro Security","github":"https://github.com/jgzuke/SE-101-Domestic-Sercurity","description":"Built a security system using the myro robot for a school project. When someone enetered your house, the Myro would send a passcode to your phone. If the code was not shown to the robot in time, the police were called","image":"myro.png","tags":"android"}]}';
	//buildProjects(json);
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