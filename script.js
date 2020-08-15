$(document).ready(function () {
   
    $(".btn").click(function (event) {

        var inputCity = $("#input").val();
        var key = "64b15ee1fcd8bf94f299ecb4565feacd";
        var todayDate = moment().format("M/DD/YYYY");
        var queryURl_current = "https://api.openweathermap.org/data/2.5/weather?q=" + inputCity + "&appid=" + key + "&units=imperial";
        var queryURL_5Days = "https://api.openweathermap.org/data/2.5/forecast?q=" + inputCity + "&appid=" + key + "&units=imperial";
        // var queryURL_UV = "https://api.openweathermap.org/data/2.5/uvi?q=" + inputCity + "&appid=" + key + "&units=imperial";

            if (inputCity !== '') { 

                $("#listOutPut").append("<li onclick='#'>" + inputCity + "</li>");

                $.ajax({
                    url: queryURl_current,
                    method: "GET",
                }).then(function (result) {
                    
                    $("#item1").empty().append("<p class='title3'>" + result.name + " (" + todayDate + ")</p><img src='assets/01d@2x.png' /img>");
                    $("#item2").empty().append("<p>Temperature: " + result.main.temp + " &#176F</p>");
                    $("#item3").empty().append("<p>Humidity: " + result.main.humidity + "%</p>");
                    $("#item4").empty().append("<p>Wind Speed: " + result.wind.speed + " MPH</p>");
                    $("#item5").empty().append("<p>UV index: </p>");
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

                    if (res.list[i].main.temp <= 58) {
                        newCard.append("<img class='icon2' src='assets/02d@2x.png' /img>");
                    } else {
                        newCard.append("<img class='icon2' src='assets/01d@2x.png' /img>");
                    }
                   
                    newCard.append("<p class='info'>Temp: " + res.list[i].main.temp + "&#176F</p>");
                    newCard.append("<p class='info'>Humidity: " + res.list[i].main.humidity + "%</p>");
                    
                    $("#extended").append(newCard);
                }
            }
        });

        
        
        


    });
})