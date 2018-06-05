
$("#btn").click(function ()
    {
        var city = $("#cityName").val();
        //alert(city);
        $(".table").removeClass("content-hide");
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

$("#fbtn").click(function (){

    var city = $("#cityName").val();
    $.ajax({

        type:"GET",
        url: 'http://api.openweathermap.org/data/2.5/forecast?q=' + city + '&APPID=ef0107f6f8d7d8932a3c0d617ef9b1ec',
        success : function(output){
            
            console.log(output);
            Dates = output.list.map(function (ele) { return new Date(ele.dt * 1000) });
            console.log(Dates);
            Temperatures = output.list.map(function (ele) { return Math.round(ele.main.temp - 273) });
            console.log(Temperatures);
            plotChart(Temperatures, Dates);
        },
        failure : function (output){
            console.log(output);
        }

    });

    function plotChart(tempArr, datesArr) {
        //$('#chart-container').removeClass('results-hide');
        Highcharts.chart('chart-container', {
            chart: {
                type: 'spline'
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
                spline: {
                    marker: {
                        radius: 4,
                        lineColor: '#666666',
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