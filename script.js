$(document).ready(function () {
    
    $(".btn").click(function () {
        
        var inputCity = $("#input").val();
        var key = "64b15ee1fcd8bf94f299ecb4565feacd";
        var todayDate = moment().format("M/DD/YYYY");
        var queryURl_current = "https://api.openweathermap.org/data/2.5/weather?q=" + inputCity + "&appid=" + key + "&units=imperial";
        var queryURL_5Days = "https://api.openweathermap.org/data/2.5/forecast?q=" + inputCity + "&appid=" + key + "&units=imperial&cnt=5";

        $.ajax({
            url: queryURl_current,
            method: "GET",
        }).then(function (result) {
            // console.log(result);
            $("#current").append("<p>" + result.name + " "+ todayDate + "___</p>")
            $("#current").append("<p>Temperature: " + result.main.temp + " &#176F</p>")
            $("#current").append("<p>Humidity: " + result.main.humidity + "%</p>")
            $("#current").append("<p>Wind Speed: " + result.wind.speed + " MPH</p>")
            $("#current").append("<p>UV Index: " + "___</p>")
        });  
        
        $.ajax({
            url: queryURL_5Days,
            method: "GET",
        }).then(function (res) {
            // console.log(res);
            // $(".five_forecast").append("<h1>5-Day Forecast:" + "</h1>");
            $(".day_1").append("<p>"+ todayDate + "</p>")
            $(".day_1").append("<p>img</p>")
            $(".day_1").append("<p>Temp: " + res.list[0].main.temp + "&#176F</p>")
            $(".day_1").append("<p>Humidity: " + res.list[0].main.humidity + "%</p>")
        });
        




    });

})