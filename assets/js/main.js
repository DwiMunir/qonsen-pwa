$(document).ready(function () {

})
function showHideMenu(command) {
    if (command == 'open') {
        $('#menuMobile').css('top', 0);
        $('#menuMobile').css('left', 0);
    } else {
        $('#menuMobile').css('top', '-100%');
        $('#menuMobile').css('left', '-100%');
    }
}
