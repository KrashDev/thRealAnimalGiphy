	
	
function animalBtnFunction(animal){
	
	//var APIKey = "dc6zaTOxFJmzC";

    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
        animal + "&api_key=dc6zaTOxFJmzC&limit=10";

	$.ajax({
		url: queryURL,
		method: "GET"
		}).done(function(response) {
			console.log(response);
			var results = response.data;
			console.log(response.data);
			
			for (var i = 0; i < results.length; i++) {
				
				$("#gifs-appear-here").attr("data-state", "still");

				var gifDiv = $("<div class='animalButtons'>");
				var rating = results[i].rating;
				var p = $("<p>").text("Rating: " + rating);
				var animalImage = $("<img>");
				
				animalImage.attr("src", results[i].images.fixed_height.url);
				gifDiv.prepend(p);
				gifDiv.prepend(animalImage);
				$("#gifs-appear-here").prepend(gifDiv);
				
				function addAnAnimal() {
					var btn = document.createElement("BUTTON");
					document.$("#animalButtons").appendChild(btn);
					console.log("");
				}
	
			}
		});
};


$(".animalBtn").on("click", function() {
	var animal = $(this).attr("data-animal");
	animalBtnFunction(animal);
});

function addImageSearch(datAnimal){
	
	console.log("made it pop!");
}

$("#addAnimal").on("click", function() {
	datAnimal = $("#animal-input").val();
	var btn = document.createElement("BUTTON");
	var t = document.createTextNode(datAnimal);
	btn.appendChild(t);
	btn.setAttribute('data-animal', datAnimal);
	btn.setAttribute('id', datAnimal + 'btn');
	btn.setAttribute("onclick", 'animalBtnFunction("'+datAnimal+'")');
	document.getElementById("animalBtns").appendChild(btn);	

	// In order to make it so you can pause/start a gif you need to make 2 versions of the image. 
	// In our GET request, you can find these 2 versions of the gif image.
	// In this example the pathing to those images is: response.data.0.images.original and original_still.


});


	



