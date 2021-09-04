$(document).ready(function () {

    $('.decoB_js').waypoint(function (dir) {
        if (dir === 'down') {
            jQuery(this).addClass('active');
        }
    }, {
        offset: '65%'
    });

});
