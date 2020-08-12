$(document).ready(function () {
    
    $(".btn").click(function () {
        
        var inputCity = $("#input").val();
        var key = "64b15ee1fcd8bf94f299ecb4565feacd";
        var todayDate = moment().format("M/DD/YYYY");
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + inputCity + "&appid=" + key + "&units=imperial";
        // console.log(queryURL);
        $.ajax({
            url: queryURL,
            method: "GET",
        }).then(function (result) {
            // console.log(result);
            $("#current").append("<p>" + result.name + " "+ todayDate + "___</p>")
            $("#current").append("<p>Temperature: " + result.main.temp + " &#176F</p>")
            $("#current").append("<p>Humidity: " + result.main.humidity + "%</p>")
            $("#current").append("<p>Wind Speed: " + result.wind.speed + " MPH</p>")
            $("#current").append("<p>UV Index: " + "___</p>")
        });    
    });


        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + inputCity + "&appid=" + key + "&units=imperial";

        console.log(queryURL);

        $.ajax({
            url: queryURL,
            method: "GET",

        }).then(function (result) {
            console.log(result);

            // $("#current").append("<p>" + result.name + " " + todayDate + "___</p>")
            // $("#current").append("<p>Temperature: " + result.main.temp + " &#176F</p>")
            // $("#current").append("<p>Humidity: " + result.main.humidity + "%</p>")
            // $("#current").append("<p>Wind Speed: " + result.wind.speed + " MPH</p>")
            // $("#current").append("<p>UV Index: " + "___</p>")
        });

 

})