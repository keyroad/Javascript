var textareaSize,textContainer, input;
var numLetras = 0;

var autoSize = function(){
	textareaSize.html(input.val());
	var h = textareaSize.height();
	var font = parseFloat(textareaSize.css("font-size"),10);
	var len = input.val().length;
	var	w = textareaSize.width();
	var hLetter = font * 0.59;

	if(numLetras > w/(font-5)){
		h = h + font;
		numLetras = 2;
	}
	else{
		numLetras++;
	}
		
	textareaSize.height(h);
	console.log(len);
	console.log(numLetras);
	console.log(font);
	console.log(w/hLetter);
	
	

	
};
$(document).ready(function(){
	textContainer = $(".textarea-container");
	textareaSize = $(".textarea-size");
	input = $(".textarea-container textarea");

	autoSize();
	input.on("input",autoSize);

	
});

/*
var textContainer, textareaSize, input;
var autoSize = function () {
  textareaSize.innerHTML = input.value + '\n';
};

document.addEventListener('DOMContentLoaded', function() {
  textContainer = document.querySelector('.textarea-container');
  textareaSize = textContainer.querySelector('.textarea-size');
  input = textContainer.querySelector('textarea');
  
  autoSize();
  input.addEventListener('input', autoSize);
});*/