var weatherData = $(this).attr("data-name");
var queryURL = "api.openweathermap.org/data/2.5/forecast?q={city name}" + weatherData + "&appid={tango}";