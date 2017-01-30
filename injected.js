var refreshTimer = setInterval(removeHandlers, 100);

function removeHandlers(){
  $("body").unbind("contextmenu copy cut paste");
}
