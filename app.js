//this is a tutorial
jQuery('.cover').click(function(e) {
  var target = jQuery(e.currentTarget);
  target.toggleClass('open');
});
