handleMainNav = function() {
  //       Clicking any .tab element willhide all the .tab-content sections, and then reveal the
  //       single .tab-content section that is associated with the clicked .tab.
  //       Dynamically build a selector string with the correct ID, based on the
  //       data available to the .tab element that was clicked.
  $('.main-nav .tab').on('click', function(){
	  var tab_id = $(this).attr('data-content');
	  var $selectedTab = $('#'+tab_id);
	  $('section.tab-content').hide();
	  $selectedTab.show();
   });
  $('.main-nav .tab:first').click(); // Let's now trigger a click on the first .tab element, to set up the page.
};

$(document).ready(function() {
  handleMainNav();
});