var projectChangeAnimationTime = 150;
var currentPageName = '';

function showPage(pageName) {
    if(currentPageName == pageName) return;
    var oldPageName = currentPageName;
    $('#page-right').fadeOut(projectChangeAnimationTime);
    $('#navLinks h4').removeClass("active");
    $(`#${pageName}Link`).addClass("active");
    setTimeout(function () {
        $(`#${oldPageName}`).hide();
        $(`#${pageName}`).show();
        $('#page-right').fadeIn(projectChangeAnimationTime);
    }, projectChangeAnimationTime);
    currentPageName = pageName;
}

$(document).ready(function() {
    currentPageName = 'about';
    $('#experiences').hide();
    $('#projects').hide();
    $('#initiatives').hide();
});
