$(document).ready(function(){

    var cities = [tempWeatherObjectMTL, tempWeatherObjectTOR, tempWeatherObjectOTT];
    var citiesExt = [extendedMTL, extendedTOR, extendedOTT];

    var ajax = new XMLHttpRequest();
    ajax.open("GET", "http://api.openweathermap.org/data/2.5/weather?id=6077243&appid=a437808c0e296e624fdc43a348a76f88&callback=callback");
    ajax.setRequestHeader("Content-Type", "application/json");
    ajax.setRequestHeader("Access-Control-Allow-Origin", "*");
      ajax.onload = function() {
      dataSet = JSON.parse(this.responseText)
      console.log(dataSet);
    }
    ajax.send();

    $("<h1>Hello World!</h1>").prependTo("body");
    var celcius = "c";


    $("#getCurrent").bind("click", function() {
      $("#current").remove();
      $("#extended").remove();
      displayWeather(cities[$("select").val()]);
    });

    $("#getExtended").bind("click", function() {
      $("#extended").remove();
      $("#current").remove();
      displayExtendedWeather(citiesExt[$("select").val()].list);
    });

    function displayWeather(weather) {
      $("<div id='current'></div>").appendTo("body");
      $("<h2>Weather for " + weather.name + "</h2>").appendTo("#current");
      $("<h3>Current conditions</h3>").appendTo("current");
      $("<h4>" + weather.weather[0].main + "</h4>").appendTo("#current");
      $("<img src='http://openweathermap.org/img/w/" + weather.weather[0].icon + ".png' />").appendTo("#current");
      $("<span class='avg'>Cur:   " + Math.floor((weather.main.temp - 273)) + "°" + celcius.sup() + "</span>").appendTo("#current");
      $("<span class='max'>Min:   " + Math.floor((weather.main.temp_min - 273)) + "°" + celcius.sup() + "</span>").appendTo("#current");
      $("<span class='min'>Max:   " + Math.floor((weather.main.temp_max - 273)) + "°" + celcius.sup() + "</span>").appendTo("#current");
    }

    function displayExtendedWeather(weather){
      $("<div id='extended'></div>").appendTo("body");
      for (var i = 0; i < weather.length; i++) {
        $("<div class='extendedBox'></div>").appendTo("#extended");
        $("<h3>" + weather[i].dt_txt +"</h3>").appendTo(".extendedBox:last");
        //$("<h4>" + weather[i].main + "</h4>").appendTo("#extended");
        console.log(weather[i].weather);
        $("<img src='http://openweathermap.org/img/w/" + weather[i].weather[0].icon + ".png' />").appendTo(".extendedBox:last");
        $("<span class='avg'>Avg:   " + Math.floor((weather[i].main.temp - 273)) + "°" + celcius.sup() + "</span>").appendTo(".extendedBox:last");
        $("<span class='max'>Min:   " + Math.floor((weather[i].main.temp_min - 273)) + "°" + celcius.sup() + "</span>").appendTo(".extendedBox:last");
        $("<span class='min'>Max:   " + Math.floor((weather[i].main.temp_max - 273)) + "°" + celcius.sup() + "</span>").appendTo(".extendedBox:last");
      }
    }

    function displayOnMap(weather){
      for (var i = 0; i < weather.length; i++) {
        $("<div class='mapBox'></div>").appendTo("#map").css({top:(50-weather[i].coord.lat)*27+250 + "px"}).css({left: (170+weather[i].coord.lon)*4.7 + "px"});
        $("<h2>" + weather[i].name + "</h2>").appendTo(".mapBox:last");
        $("<img src='http://openweathermap.org/img/w/" + weather[i].weather[0].icon + ".png' />").appendTo(".mapBox:last");
        $("<span class='avg'>Cur:   " + Math.floor((weather[i].main.temp - 273)) + "°" + celcius.sup() + "</span>").appendTo(".mapBox:last");
      }
    }
    displayOnMap(cities);
});
