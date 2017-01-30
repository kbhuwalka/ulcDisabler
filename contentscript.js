$(document).ready(function(){

  function injectJs(link) {
  var scr = document.createElement('script');
  scr.type="text/javascript";
  scr.src=link;
  $("body").append(scr)
  }

  injectJs(chrome.extension.getURL('injected.js'));

});
