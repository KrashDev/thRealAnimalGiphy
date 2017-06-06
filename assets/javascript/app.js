function playGif(imageID){
	var animalImage = document.getElementById("#"+imageID);
	if (animalImage.getAttribute("state") == "static") {
		animalImage.src = animalImage.getAttribute("animsrc");
		animalImage.setAttribute("state", "anim");
	} else {
		animalImage.src = animalImage.getAttribute("staticsrc");
		animalImage.setAttribute("state", "static");
	}
	
};
	
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
			console.log(response.data)
			
			for (var i = 0; i < results.length; i++) {
				
				var gifDiv = $("<div class='animalButtons'>");
				var rating = results[i].rating;
				var p = $("<p>").text("Rating: " + rating);
				var animalImage = $("<img>");
				animalImage.attr("id", "#"+results[i].images.fixed_height.url);
				animalImage.attr("src", results[i].images.fixed_height_still.url);
				animalImage.attr("animsrc", results[i].images.fixed_height.url);
				animalImage.attr("staticsrc", results[i].images.fixed_height_still.url)
				animalImage.attr("state", "static");
				animalImage.attr("onclick",'playGif("'+results[i].images.fixed_height.url+'")')
				gifDiv.prepend(p);
				gifDiv.prepend(animalImage);
				$("#gifs-appear-here").prepend(gifDiv);
	
			}
		});
};


$(".animalBtn").on("click", function() {
	var animal = $(this).attr("data-animal");
	animalBtnFunction(animal);
});

$("#addAnimal").on("click", function() {
	datAnimal = $("#animal-input").val();
	var btn = document.createElement("BUTTON");
	var t = document.createTextNode(datAnimal);
	btn.appendChild(t);
	btn.setAttribute('data-animal', datAnimal);
	btn.setAttribute('id', datAnimal + 'btn');
	btn.setAttribute("onclick", 'animalBtnFunction("'+datAnimal+'")');
	document.getElementById("animalBtns").appendChild(btn);	
});


	



