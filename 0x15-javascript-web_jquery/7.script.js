$(function(){
	$.get('https://swapi-api.alx-tools.com/api/films/?format=json', function(data, textStatus){
	 $('DIV#character').text(data.name);
 });
});

