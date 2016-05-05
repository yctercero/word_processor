var test = function(claim, message) {
	if(claim) {
		return true;
	}
	else {
		throw message;
	}
};

var processor = {
	mapRE: [
		{
			regex: /\*\*(.*?)\*\*/g,
			replace: "<b>$1</b>"
		},
		{
			regex: /\*(.+?)\*/g,
			replace: "<i>$1</i>"
		},
		{
			regex: /######(.+?)\n/g,
			replace: "<h6>$1</h6>"
		},
		{
			regex: /#####(.+?)\n/g,
			replace: "<h5>$1</h5>"
		},
		{
			regex: /####(.+?)\n/g,
			replace: "<h4>$1</h4>"
		},
		{
			regex: /###(.+?)\n/g,
			replace: "<h3>$1</h3>"
		},
		{
			regex: /##(.+?)\n/g,
			replace: "<h2>$1</h2>"
		},
		{
			regex: /#(.+?)\n/g,
			replace: "<h1>$1</h1>"
		},
		{
			regex: /(.*?)\n/g,
			replace: "$1<br/>"
		},
		{
			regex: /\[(.*?)\]\((.*?)\)/g,
			replace: "<a href='$2'>$1</a>"
		}
	],

	// markedText: "",

	displayText: function() { // assigns content from the textarea to the screen div and calls 
		var textArea = document.getElementsByTagName("textarea")[0].value;

		// test(textArea, "hasn't grabbed textArea element");

		var screenDiv = document.getElementById("screen");
		
		// test(screenDiv, "hasn't grabbed screenDiv element");

		screenDiv.innerHTML = textArea;

		processor.markdownCheck(textArea, screenDiv);

		// test(screenDiv.innerHTML, "there is nothing being transfered to the screenDiv");
	},

	keyPress: function() { 
		var textArea = document.getElementsByTagName("textarea")[0];
		// textArea.onkeypress = console.log("hey");
		textArea.onkeyup = processor.displayText;

	},

	markdownCheck: function(text, screenDiv) { 
		for (i = 0; i < processor.mapRE.length; i++) {
			// console.log(processor.mapRE.length);
			// console.log(textArea);

			var re = processor.mapRE[i].regex;
			// console.log(re);

			var replacement = processor.mapRE[i].replace;
			// console.log(replacement);

			text = text.replace(re, replacement);
			// console.log(textArea.replace(re, replacement));

			console.log(text);

			screenDiv.innerHTML = text;

			// console.log(textArea);
		}
	},

	// checkBold: function(textArea, screenDiv) {
	// 	var regex = /\*\*(.*?)\*\*/g;
	// 		this.markedText = textArea.replace(regex, "<strong>$1</strong>");

	// 		screenDiv.innerHTML = this.markedText;
	// 		// var regTest = regex.exec(textArea);
	// 		// console.log(textArea);
	// }
};

processor.keyPress();