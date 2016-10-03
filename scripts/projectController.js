(function(module) {
    var projectsContoller = { };

    projecdtsController.index = function() {
        Project.fetchAll(projectView.initIndexPage);
        $('#about').hide();
        $('#projects').show();
    };
    module.aboutContoller = aboutContoller;
}) (window);