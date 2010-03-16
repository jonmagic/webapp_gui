// setup my layouts
var layout = function(){
  var mainLayout = $('body').layout({
    west: {
      size: 300
      , minSize: 150
      , maxSize: 500
      , onresize: "leftLayout.resizeAll"
    },
    center: {
      onresize: "rightLayout.resizeAll"
    }
  });
  var leftLayout = $('#left').layout({
    north: {
      size: 40
      , resizable: false
    },
    south: {
      size: 20
      , resizable: false
    }
  });
  var rightLayout = $('#right').layout({
    north: {
      size: 40
      , resizable: false
    },
    south: {
      size: 20
      , resizable: false
    },
    center: {
      onresize: "contentLayout.resizeAll"
    }
  });
};
// setup my jquery
$(function(){
  // setup the layout
  layout()
  // create tabs of my content
  var tabs = $('div#content div.ui-layout-center').tabs();
  // setup my sidebar
  var homePanel = $('#home');
  var section_onePanel = $('#section_one');
  homePanel.find('ul li a').click(function(){
    homePanel.hide('slide', { direction: 'left' }, 500);
    section_onePanel.show('slide', { direction: 'right' }, 500);
  });
  section_onePanel.find('a.back').click(function(){
    section_onePanel.hide('slide', { direction: 'right' }, 500);
    homePanel.show('slide', { direction: 'left' }, 500);    
  })
});