var projects = [];

function Project (opts) {
  this.title = opts.title;
  this.description = opts.description;
  this.linkLive = opts.linkLive;
  this.linkGithub = opts.linkGithub;
  this.dateComplete = opts.dateComplete;
}

Project.all = [];

Project.prototype.toHtml = function() {
  var appTemplate = $("#template").html();
  var compileTemplate = Handlebars.compile(appTemplate);
  return compileTemplate(this);
}
Project.loadAll = function(rawData) {
  rawData.forEach(function(ele) {  //creates a new object for each element of data
    Project.all.push(new Project(ele));
  });
};
Project.fetchAll = function() {
  function processData(data){
    Project.loadAll(data);
    projectView.initIndexPage();
  }
  function fetchFromServer(){
    $.getJSON('data/projectData.json', function (data) {
      localStorage.setItem('rawData', JSON.stringify(data));
      processData(data);
    });
  }
  function fetchFromLocalStorage(){
    var rawData=localStorage.getItem('rawData');
    processData(JSON.parse(rawData));
  }
  $.ajax ({
    url: 'data/projectData.json',
    type: 'HEAD',
    success: function(data, message, xhr){
      var etag = xhr.getResponseHeader('ETag');
      if(localStorage.etag){
        var localEtag = localStorage.etag;
        if(localEtag===etag && localStorage.rawData){
          fetchFromLocalStorage();
        } else {
          fetchFromServer();
        }
      }else {fetchFromServer();
        }
        localStorage.setItem('etag', etag);
    }
  });
}


projects.forEach(function(a){
  $('#projects').append(a.toHtml())
});
