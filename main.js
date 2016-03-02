(function($) {
  "use strict"; // Start of use strict

  var shiftWindow = function() { scrollBy(0, -50) };
  if (location.hash) shiftWindow();
  window.addEventListener("hashchange", shiftWindow);

  // Magnific Popup
  var magnifPopup = function() {
    // This will create a single gallery from all elements that have class "gallery-item"
    $('.gallery-item').magnificPopup({
      type: 'image',
      image: {
        verticalFit: true
      },
      gallery:{
        enabled:true
      }
    }); 
  };

  $(function(){
    magnifPopup();
  });

})(jQuery); // End of use strict
