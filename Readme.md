An Chrome extension to experiment with the HTML5 Speech Input API that was introduced in Chrome 11.

When you install the extension, as you log into BigBlueButton, you should see an icon in the top right of the browser. When you click on it you'll see a microphone you can click on. Speak something, and once your voice is converted to text, that text will show up in the Chat window.

The extension can be useful for things such as
+ Close captioning 
+ Accessibility - a user can log in and use the extension to convert to text what the presenter is saying, for students hard of hearing.
+ Translation - similar to accessibility, except the user can translate to a different language.
+ An alternative to joining the voice conference if you just want to make a short comment/ask a question (more lightweight)
	
##Issues##
Right now the startSpeechInput() is not yet supported in Chrome, which means speech input can't be started automatically. Once this is done, you won't have to click the extension button, and then click the microphone as well to start the input.

As more browsers support the speech API, we'll figure out a way to put support for speech input right into the BBB interface.