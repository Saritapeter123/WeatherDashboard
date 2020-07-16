var weatherData = $(this).attr("data-name");
var queryURL = "api.openweathermap.org/data/2.5/forecast?q={city name}" + weatherData + "&appid={tango}";

// Ajax call for searching cities. 
$.ajax({
    url: queryURL,
    method: "GET"
    //callback
}).then(function(response) {

    // Creating div to hold the search.
    var cityDiv = $("<div class='city'>");
    // Storing search.
    var history = response.history;
    // Creating and element to display the search.
    var liOne = $("<li>").text("history", + history);
    // Display the searched city on glass.
    cityDiv.append(liOne);
});