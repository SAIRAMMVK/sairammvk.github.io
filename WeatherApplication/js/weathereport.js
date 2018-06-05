
$("#btn").click(function ()
    {
        var city = $("#cityName").val();
    $.ajax({

        type:"GET",
        url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=ef0107f6f8d7d8932a3c0d617ef9b1ec',
        success : function(output){
            console.log('in success scenario');
            console.log(output);
            $("#cname").html(city);
            var currenttemp =Math.ceil((output.main.temp-273))+"C";
            var currentpres = output.main.pressure+"mb";
            var currenthum = output.main.humidity;
            var windspeed =  output.wind.speed+"km/h";
            $("#ctemp").html(currenttemp);
            $("#cpres").html(currentpres);
            $("#chum").html(currenthum);
            $("#cwind").html(windspeed);
        },

        failure  : function (err){
            console.log('in failure scenario');
            console.log(err);

        }
    });
})

// Forecasting weather in form of charts

$("#fbtn").click( function () {

    var city = $("#cityName").val();
    $.ajax({

        type:"GET",
        url: 'http://api.openweathermap.org/data/2.5/forecast?q=' + city + '&APPID=ef0107f6f8d7d8932a3c0d617ef9b1ec',
        success: function (output){
            

        },
        failure:function (output){
            console.log("in failure scenario");
            console.log(output);
        }
    });

})