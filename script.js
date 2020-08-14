$(document).ready(function () {
    
    $(".btn").click(function () {
       

        var inputCity = $("#input").val();
        var key = "64b15ee1fcd8bf94f299ecb4565feacd";
        var todayDate = moment().format("M/DD/YYYY");
        var queryURl_current = "https://api.openweathermap.org/data/2.5/weather?q=" + inputCity + "&appid=" + key + "&units=imperial";
        var queryURL_5Days = "https://api.openweathermap.org/data/2.5/forecast?q=" + inputCity + "&appid=" + key + "&units=imperial";
        // var queryURL_UV = "https://api.openweathermap.org/data/2.5/uvi?q=" + inputCity + "&appid=" + key + "&units=imperial";

            if (inputCity !== '') { 

                $("#listOutPut").append("<li onclick='#'>" + inputCity + "</li>")

                $.ajax({
                    url: queryURl_current,
                    method: "GET",
                }).then(function (result) {

                    $("#item1").empty().append("<p>" + result.name + " (" + todayDate + ") ___</p>");
                    $("#item2").empty().append("<p>Temperature: " + result.main.temp + " &#176F</p>");
                    $("#item3").empty().append("<p>Humidity: " + result.main.humidity + "%</p>");
                    $("#item4").empty().append("<p>Wind Speed: " + result.wind.speed + " MPH</p>");
                    $("#item5").empty().append("<p>UV index: </p>");

                    $("#inputCity").val('');

                }); 
                
            } else {
                alert("City name can not be empty!");
            }

       

        $.ajax({
            url: queryURL_5Days,
            method: "GET",
        }).then(function (res) {
            
            $("#extended").empty();
            for (var i = 0; i < res.list.length; i++) {

                if (res.list[i].dt_txt.includes("09:00:00")){
                    console.log(res.list[i])

                    var displayDate = res.list[i].dt_txt.split(" ")[0];

                    var newCard = $("<div>");

                    newCard.addClass("card_5 forecast");
                    newCard.append("<h3>" + displayDate + "</h3>");
                    newCard.append("<p>Temp: " + res.list[i].main.temp + "&#176F</p>");
                    newCard.append("<p>Humidity: " + res.list[i].main.humidity + "%</p>");
                    
                    $("#extended").append(newCard);
                    // $("#day1").empty().append("<h3>" + displayDate + "</h3>");
                    // // $("#day1").append("<img>" + icons +"</img>")
                    // $("#day1").append("<p>Temp: " + res.list[i].main.temp + "&#176F</p>");
                    // $("#day1").append("<p>Humidity: " + res.list[i].main.humidity + "%</p>");
                }
                
            }
             
        });
        
       
    });

})