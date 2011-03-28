(function($){
	$.fn.bbbcaptions = function(){
		
		chrome.extension.onConnect.addListener(function(port) {
		  port.onMessage.addListener(function(msg) {
				$('#speechArea').append(msg.speechText);
		  });
		});
	}
}
)(jQuery);

$(function () { $.fn.bbbcaptions(); });