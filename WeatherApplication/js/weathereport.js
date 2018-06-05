
$("#btn").click(function ()
    {
        var city = $("#cityName").val();
        //alert(city);
        $(".table").removeClass("content-hide");
        $("#chart-container").hide();
    $.ajax({

        type:"GET",
        url: 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=ef0107f6f8d7d8932a3c0d617ef9b1ec',
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

        error  : function (err){
            console.log('in failure scenario');
            console.log(err);
            alert(err);

        }
    });
})

$("#fbtn").click(function (){

    var city = $("#cityName").val();
    $(".table").addClass("content-hide");
    $("#chart-container").show();
    $.ajax({

        type:"GET",
        url: 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&APPID=ef0107f6f8d7d8932a3c0d617ef9b1ec',
        success : function(output){
            
            console.log(output);
            Dates = output.list.map(function (ele) { return new Date(ele.dt * 1000) });
            console.log(Dates);
            Temperatures = output.list.map(function (ele) { return Math.round(ele.main.temp - 273) });
            console.log(Temperatures);
            plotChart(Temperatures, Dates);
        },
        error : function (output){
            console.log(output);
        }

    });

    function plotChart(tempArr, datesArr) {
        Highcharts.chart('chart-container', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Monthly Average Temperature'
            },
            xAxis: {
                categories: datesArr
            },
            yAxis: {
                title: {
                    text: 'Temperature'
                },
                labels: {
                    formatter: function () {
                        return this.value + '°';
                    }
                }
            },
            tooltip: {
                crosshairs: true,
                shared: true
            },
            plotOptions: {
                column: {
                    marker: {
                        radius: 4,
                        lineColor: '#A93226',
                        lineWidth: 1
                    }
                }
            },
            series: [{
                name: cityName,
                marker: {
                    symbol: 'square'
                },
                data: tempArr

            }]
        });
    }


})