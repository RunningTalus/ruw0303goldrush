$(document).ready(function(){
	$('#goldmap').click(function(e){
		var pageX = e.pageX;
		var pageY = e.pageY;
		// console.log(pageX, pageY);
		var newMarker = $('<div class="icon"><img src="mining-icon.png"></div>')
		$('#marker-holder').append(newMarker);
		newMarker.css({
			top:pageY-25, left: pageX-25
			//offset position of icon	
		})
	})
	$(document).on('click', ".icon", function(){
		// console.log(this);
		$(this).remove();
	})
});


// function handleEvent(e){
//  var evt = e ? e:window.event;
//  var clickX=0, clickY=0;

//  if ((evt.clientX || evt.clientY) &&
//      document.body &&
//      document.body.scrollLeft!=null) {
//   clickX = evt.clientX + document.body.scrollLeft;
//   clickY = evt.clientY + document.body.scrollTop;
//  }
//  if ((evt.clientX || evt.clientY) &&
//      document.compatMode=='CSS1Compat' && 
//      document.documentElement && 
//      document.documentElement.scrollLeft!=null) {
//   clickX = evt.clientX + document.documentElement.scrollLeft;
//   clickY = evt.clientY + document.documentElement.scrollTop;
//  }
//  if (evt.pageX || evt.pageY) {
//   clickX = evt.pageX;
//   clickY = evt.pageY;
//  }

//  alert (evt.type.toUpperCase() + ' mouse event:'
//   +'\n pageX = ' + clickX
//   +'\n pageY = ' + clickY 
//   +'\n clientX = ' + evt.clientX
//   +'\n clientY = '  + evt.clientY 
//   +'\n screenX = ' + evt.screenX 
//   +'\n screenY = ' + evt.screenY
//  )
//  return false;
// }