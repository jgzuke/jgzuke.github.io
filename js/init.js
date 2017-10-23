var projectChangeAnimationTime = 150;
var currentPageName = '';

function showPage(pageName) {
    if(currentPageName == pageName) return;
    $('#page-right').fadeOut(projectChangeAnimationTime);
    $('#navLinks h4').removeClass("active");
    $(`#${pageName}Link`).addClass("active");
    setTimeout(function () {
        $(`#${currentPageName}`).hide();
        $(`#${pageName}`).show();
        $('#page-right').fadeIn(projectChangeAnimationTime);
    }, projectChangeAnimationTime);
    currentPageName = pageName;
}

$(document).ready(function() {
    showPage('about');
});
