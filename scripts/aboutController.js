(function(module) {
    var aboutContoller = { };

    aboutController.index = function() {
        $('#projects').hide();
        $('#about').show();
    };
    module.aboutContoller = aboutContoller;
}) (window);