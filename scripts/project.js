var projects = [];

function Project (opts) {
  this.title = opts.title;
  this.description = opts.description;
  this.linkLive = opts.linkLive;
  this.linkGithub = opts.linkGithub;
  this.dateComplete = opts.dateComplete;
}

Project.prototype.toHtml = function() {
  var appTemplate = $("#template").html();
  var compileTemplate = Handlebars.compile(appTemplate);
  return compileTemplate(this);
}

rawData.forEach(function(ele) {  //creates a new object for each element of data
  projects.push(new Project(ele));
})

projects.forEach(function(a){
  $('#projects').append(a.toHtml())
});
