$(document).ready(function()
{
	function getQuote()
	{
		var quotes = ["Chal Rahe Hai", "Kahaan YAHAAN", "Thanks for Participating"];
		var authors = ["- author1", "- author2", "- author3"];

		var randomNumber = Math.floor((Math.random() * quotes.length));

		var randomQuote = quotes[randomNumber];
		var randomAuthor = authors[randomNumber];

		$('#quote').text(randomQuote);
		$('#author').text(randomAuthor);
	}

	$('.newQuote').on("click",function()
	{
		getQuote();
	});
});