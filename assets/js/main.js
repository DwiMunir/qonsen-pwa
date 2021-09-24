$(document).ready(function () {
    if ('serviceWorker' in navigator) {
        $(window).on('load', function () {
            navigator.serviceWorker.register('/sw.js')
                .then((registration) => {
                    console.log('serviceWorker register successful with scope: ', registration.scope);
                }, (err) => {
                    console.log('registration serviceWorker error: ', err);
                })
        })
    }
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
