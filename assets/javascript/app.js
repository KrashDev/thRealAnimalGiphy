$("button").on("click", function() {

    var animal = $(this).attr("data-animal");

	//var APIKey = "dc6zaTOxFJmzC";

    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
        animal + "&api_key=dc6zaTOxFJmzC&limit=10";


    var animalArray = ["cow", "sheep", "turtle"];

	$.ajax({
	        url: queryURL,
	        method: "GET"
	        }).done(function(response) {
	            console.log(response);

	        var results = response.data;

          	for (var i = 0; i < results.length; i++) {

            var gifDiv = $("<div class='animalButtons'>");

            var rating = results[i].rating;

            var p = $("<p>").text("Rating: " + rating);

            var animalImage = $("<img>");

            animalImage.attr("src", results[i].images.fixed_height.url);

            gifDiv.prepend(p);
            gifDiv.prepend(animalImage);

			$("#gifs-appear-here").prepend(gifDiv);

			// $('#submit') = document.createElement("BUTTON");
			// document.$("#animaleButtons").appendChild();

			function myFunction() {
    		var btn = document.createElement("BUTTON");
    		document.$("#animalButtons").appendChild(btn);
			}

			// function makeAnimal() {
   //  		var btn = document.createElement("BUTTON");
   //  		document.body.appendChild(btn);
			// }
	    
	    	}
		});
	});


	



