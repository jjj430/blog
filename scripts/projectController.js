(function(module) {
    var projectController = {};
    
    Project.createTable();

    projectController.index = function() {
        Project.fetchAll(projectView.initIndexPage);
        $('#about').hide();
        $('#projects').show();
    };
    module.projectController = projectController;
}) (window);