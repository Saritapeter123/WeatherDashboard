$(document).ready()

function citySearching() {
    var weatherData = $(this).attr("data-name");
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q={city name}" + city + "&appid=77f9fbbb114dc063ba452cf5bcc8f3cf";
    

    // Ajax call for searching cities. 
    $.ajax({
      url: queryURL,
      method: "GET"

    //callback
    }).then(function(response) {

        console.log(response);

       var cityName = $("<h1>").text(response.name);
       var date = $("<h2>").text(response.date);
       var iconImage = $("<img>").attr(response.iconImage);
       var humidity = $("<h3>").text(response.humidity);
       var windSpeed = $("<h3>").text(response.windSpeed);
       var uvIndex = $("<img>").attr(response.uvIndex)
    });
};