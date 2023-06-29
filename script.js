// Expand all <details> elements when printing
window.addEventListener('beforeprint', function() {
    var detailsElements = document.getElementsByTagName('details');
    for (var i = 0; i < detailsElements.length; i++) {
      detailsElements[i].setAttribute('open', '');
    }
});

