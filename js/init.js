const PROJECT_CHANGE_ANIMATION_TIME = 150;
const ABOUT = 'about';
const EXPERIENCE = 'experience';
const PROJECTS = 'projects';
const INITIATIVES = 'initiatives';
let currentPageName = ABOUT;

function showPage(pageName) {
    if (currentPageName === pageName) {
        return;
    }
    const oldPageName = currentPageName;
    $('#page-right').fadeOut(PROJECT_CHANGE_ANIMATION_TIME);
    document.getElementById(`${oldPageName}Link`).classList.remove("active");
    document.getElementById(`${pageName}Link`).classList.add("active");
    setTimeout(function () {
        const currentDisplay = pageName === ABOUT? 'flex' : 'block';
        document.getElementById(oldPageName).style.display = 'none';
        document.getElementById(pageName).style.display = currentDisplay;
        $('#page-right').fadeIn(PROJECT_CHANGE_ANIMATION_TIME);
    }, PROJECT_CHANGE_ANIMATION_TIME);
    currentPageName = pageName;
}

$(document).ready(function() {
    currentPageName = ABOUT;
    document.getElementById(EXPERIENCE).style.display = 'none';
    document.getElementById(PROJECTS).style.display = 'none';
    document.getElementById(INITIATIVES).style.display = 'none';
});
