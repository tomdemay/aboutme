// Expand all <details> elements when printing
window.addEventListener('beforeprint', function() {
    var detailsElements = document.getElementsByTagName('details');
    for (var i = 0; i < detailsElements.length; i++) {
      detailsElements[i].setAttribute('open', '');
    }
  });
  
//   // Collapse all <details> elements after printing
//   window.addEventListener('afterprint', function() {
//     var detailsElements = document.getElementsByTagName('details');
//     for (var i = 0; i < detailsElements.length; i++) {
//       detailsElements[i].removeAttribute('open');
//     }
//   });

  
// Expand all <details> elements on page load
window.addEventListener('DOMContentLoaded', function() {
    var detailsElements = document.getElementsByTagName('details');
    for (var i = 0; i < detailsElements.length; i++) {
      detailsElements[i].setAttribute('open', '');
    }
  });
  