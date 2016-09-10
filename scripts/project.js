var projects = [];

function Project (opts) {
  this.title = opts.title;
  this.authorUrl = opts.authorUrl;
  this.category = opts.category;
  this.body = opts.body;
}

Project.prototype.toHtml = function() {
  var $newProject = $('project.template').clone();
  $newProject.removeClass('template');
  
  $newProject.attr('data-category', this.category);

  $newProject.find('.byline a').attr('href', this.authorUrl);
  $newProject.find('h1:first').html(this.title);
  $newProject.find('.article-body').html(this.body);
  $newProject.append('<hr>');
  return $newProject;
}

rawData.forEach(function(ele) {
  articles.push(new Project(ele));
})

projects.forEach(function(a){
  $('#articles').append(a.toHtml())
});
