$(document).ready(function () {
    
    $(".btn").click(function () {
       

        var inputCity = $("#input").val();
        var key = "64b15ee1fcd8bf94f299ecb4565feacd";
        var todayDate = moment().format("M/DD/YYYY");
        var queryURl_current = "https://api.openweathermap.org/data/2.5/weather?q=" + inputCity + "&appid=" + key + "&units=imperial";
        var queryURL_5Days = "https://api.openweathermap.org/data/2.5/forecast?q=" + inputCity + "&appid=" + key + "&units=imperial&cnt=5";
        // var queryURL_UV = "https://api.openweathermap.org/data/2.5/uvi?q=" + inputCity + "&appid=" + key + "&units=imperial";


        $("#listOutPut").append("<li>" + inputCity + "</li>")

            if (inputCity != '') { 

                $.ajax({
                    url: queryURl_current,
                    method: "GET",
                }).then(function (result) {

                    $("#item1").append("<p>" + result.name + " (" + todayDate + ") ___</p>");
                    $("#item2").append("<p>Temperature: " + result.main.temp + " &#176F</p>");
                    $("#item3").append("<p>Humidity: " + result.main.humidity + "%</p>");
                    $("#item4").append("<p>Wind Speed: " + result.wind.speed + " MPH</p>");
                    $("#item5").append("<p>UV index: </p>");

                    $("#inputCity").val('');
                }); 
                
            } else {
                alert("City name can not be empty!");
            }

       

        $.ajax({
            url: queryURL_5Days,
            method: "GET",
        }).then(function (res) {
            // $(".five_forecast").append("<h1>5-Day Forecast:" + "</h1>");
            $("#day1").append("<h3>" + todayDate + "</h3>");
            // $("#day1").append("<img>" + icons +"</img>")
            $("#day1").append("<p>Temp: " + res.list[0].main.temp + "&#176F</p>");                              
            $("#day1").append("<p>Humidity: " + res.list[0].main.humidity + "%</p>"); 
        });
        
       
    });

})