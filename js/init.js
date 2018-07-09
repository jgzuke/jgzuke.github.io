const PROJECT_CHANGE_ANIMATION_TIME = 150;
let currentPageName = 'about';

function showPage(pageName) {
    if (currentPageName === pageName) {
        return;
    }
    const oldPageName = currentPageName;
    document.getElementById('page-right').classList.add("faded");
    document.getElementById(`${oldPageName}Link`).classList.remove("activeLink");
    document.getElementById(`${pageName}Link`).classList.add("activeLink");
    setTimeout(function () {
        document.getElementById('page-right').classList.remove("faded");
        document.getElementById(oldPageName).classList.add("hiddenPage");
        document.getElementById(pageName).classList.remove("hiddenPage");
    }, PROJECT_CHANGE_ANIMATION_TIME);
    currentPageName = pageName;
}
