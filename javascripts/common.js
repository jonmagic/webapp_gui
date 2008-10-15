// set div heights, including on resize
$(document).ready(function() {
  function resize(){
    var height = $(window).height();
    var width = $(window).width();
    $("#sidebar").css({height: height - 65});
    $("#center").css({width: width - 255})
  };  
  resize();
  $(window).bind('resize', function(){
    resize();
  });
});

// add borders and backgrounds to buttons
$(document).ready(function() {
  $("#header a").addClass("header-button-itu");
  $("#footer a").addClass("footer-button-itu");
});

// setup sidebar item selected bg and scroll
$(document).ready(function() {
  $("#sidebar li").hover(function(){
    $(this).addClass("selected");
  }, function(){
    $(this).removeClass("selected");
  });
});

// build my tables
$(document).ready(function() {
  // table style 1, inspired by itunes
  // setup my header
  $("table.itu th").each(function(){
    var text = $(this).text();
    $(this).text("");
    $(this).append("<div>"+text+"</div>");
    $(this).addClass("remove-margins-padding");
  });
  // wrap my content with hrefs
  $("table.itu td").each(function(){
    $(this).addClass("remove-margins-padding");
  });
  // add my even odd classes to rows
  var rowClass = "even";
  $("table.itu tr").each(function(){
    $(this).addClass(rowClass);
    rowClass = (rowClass == 'even' ? 'odd' : 'even');      
  });
  // setup my row hover
  $("table.itu tr").hover(function(){
    $(this).addClass("table-row-selected");
  }, function(){
    $(this).removeClass("table-row-selected");
  });
  
  // table style 2, inspired by mail.app
  $("table.m tr").each(function(){
    $("td:first", this).addClass("first");
  });
  
});

$(document).ready(function() {
  $("#some_stuff > ul").tabs(function(){
  });
  // Add div around table with some padding
  $("#center div.ui-tabs-panel table.itu").wrap("<div></div>").parent().addClass("ui-tabs-panel-padding");
});

$.fn.hint = function () {
  return this.each(function (){
    // get jQuery version of 'this'
    var t = jQuery(this); 
    // get it once since it won't change
    var title = t.attr('title'); 
    // only apply logic if the element has the attribute
    if (title) { 
      // on blur, set value to title attr if text is blank
      t.blur(function (){
        if (t.val() == '') {
          t.val(title);
          t.addClass('blur');
        }
      });
      // on focus, set value to blank if current value 
      // matches title attr
      t.focus(function (){
        if (t.val() == title) {
          t.val('');
          t.removeClass('blur');
        }
      });
 
      // clear the pre-defined text when form is submitted
      t.parents('form:first()').submit(function(){
          if (t.val() == title) {
              t.val('');
              t.removeClass('blur');
          }
      });
 
      // now change all inputs to title
      t.blur();
    }
  });
}

function gup( name )
{
  name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
  var regexS = "[\\?&]"+name+"=([^&#]*)";
  var regex = new RegExp( regexS );
  var results = regex.exec( window.location.href );
  if( results == null )
    return "";
  else
    return results[1];
}