
$(function(){
	var fr = $('<div/>');
	fr.append($('<div/>', {text:'Brazil'}));
	fr.append($('<img/>', {src:'../static/flags/br.gif'}));
	$('body').append(fr);
});

$(function(){
	var fr = $('<div/>');
	fr.append($('<div/>', {text:'France'}));
	fr.append($('<img/>', {src:'../static/flags/fr.gif'}));
	$('body').append(fr);
});

$(function(){
	var fr = $('<div/>');
	fr.append($('<div/>', {text:'Greece'}));
	fr.append($('<img/>', {src:'../static/flags/gr.gif'}));
	$('body').append(fr);
});

$(function(){
	$('img').css('border','solid 3px gray');
	$('img').css('width',200);
	$('div div').css('text-align','center');
	$('body').css('font-family','arial');
	$('body').css('font-size','x-large');
})

$(function(){
	$('body>div').css({
		width: "206",
		border: "2px solid black",
		padding: "24px",
		display: "inline-block",
		margin: "1ex"	
	});
});