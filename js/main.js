$(document).ready(function()
{
	
	getQuote();

	
});


	function getQuote()
	{
		var quotes = [ '"I aint no tailor, but I know what suits me."',
						'"Maybe if i stare at this piece of paper long enough, people will think I can read!"',
						'"I hate Mondays."',
						'"Im normally not a praying man, but if youre up there, please save me Superman."',
						 '"Me fail English? Thats unpossible."',
						 '"Lets do what we do best Scoob, eat."',
						 '"Hi, Dexter! Oooooo, what does this button do?"'];
		var authors = ["- Popeye", "- Daffy Duck", "- Garfield","- Homer (The Simpsons)","- Ralph (The Simpsons)","- Shaggy (Scooby Doo)","- Dee Dee (Dexter's Laboratory)"];

		var randomNumber = Math.floor((Math.random() * quotes.length));

		var randomQuote = quotes[randomNumber];
		var randomAuthor = authors[randomNumber];

		$('#quote').text(randomQuote);
		$('#author').text(randomAuthor);

		$('.newQuote').on("click",function()
	{
		getQuote();
	});	
	}


	