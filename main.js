(function($) {
  "use strict"; // Start of use strict

  var shiftWindow = function() { scrollBy(0, -50) };
  if (location.hash) shiftWindow();
  window.addEventListener("hashchange", shiftWindow);

})(jQuery); // End of use strict
