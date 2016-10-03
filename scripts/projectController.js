(function(module) {
    var projectController = { };

    projectController.index = function() {
        Project.fetchAll(projectView.initIndexPage);
        $('#about').hide();
        $('#projects').show();
    };
    module.projectController = projectController;
}) (window);