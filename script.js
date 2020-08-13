$(document).ready(function () {
    
    $(".btn").click(function () {
        
        var inputCity = $("#input").val();
        var key = "64b15ee1fcd8bf94f299ecb4565feacd";
        var todayDate = moment().format("M/DD/YYYY");
        var queryURl_current = "https://api.openweathermap.org/data/2.5/weather?q=" + inputCity + "&appid=" + key + "&units=imperial";
        var queryURL_5Days = "https://api.openweathermap.org/data/2.5/forecast?q=" + inputCity + "&appid=" + key + "&units=imperial&cnt=5";
        var queryURL_UV = "https://api.openweathermap.org/data/2.5/uvi?q=" + inputCity + "&appid=" + key + "&units=imperial";

       
        $.ajax({
            url: queryURl_current,
            method: "GET",
        }).then(function (result) {
            $("#current").append("<p>" + result.name + " ("+ todayDate + ") ___</p>")
            $("#current").append("<p>Temperature: " + result.main.temp + " &#176F</p>")
            $("#current").append("<p>Humidity: " + result.main.humidity + "%</p>")
            $("#current").append("<p>Wind Speed: " + result.wind.speed + " MPH</p>")
            
        });  


        var icons = "..assets/11d@2x.png";

        function weatherIcon() {

            if (res.cod >= 200 && res.cod <= 250) {
                icons = "..assets/11d@2x.png";
                // return icons
            }
        };

        console.log(icons)

        $.ajax({
            url: queryURL_5Days,
            method: "GET",
        }).then(function (res) {
            // console.log(res)
            console.log(res.cod)
            // $(".five_forecast").append("<h1>5-Day Forecast:" + "</h1>");
            $("#day1").append("<h3>" + todayDate + "</h3>")
            $("#day1").append("<img>" + icons +"</img>")
            $("#day1").append("<p>Temp: " + res.list[0].main.temp + "&#176F</p>")
            $("#day1").append("<p>Humidity: " + res.list[0].main.humidity + "%</p>")
        });
        
        // $.ajax({
        //     url: queryURL_UV,
        //     method: "GET",
        // }).then(function (res) {
        //     console.log(res);
        //     $("#current").append("<p>UV Index: " + res.value + "</p>")
        // });




    });

})