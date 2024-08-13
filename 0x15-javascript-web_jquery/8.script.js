$(function(){
	$.get('https://swapi-api.alx-tools.com/api/films/?format=json')
	function(data, textStatus) {
		const movies = data.result;
		movies.forEach(function(movies){
		$('UL#list_movies').append(<li> + movies.title + '<li>);
	});
});
