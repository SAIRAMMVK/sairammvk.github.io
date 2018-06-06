const city = $("#cityName").val();

function checkInput(){
    if(isNaN(city)){
        $("#btn").prop("disabled",false);
        $("#fbtn").prop("disabled",false);
    }
    else{
        $("#btn").prop("disabled",true);
        $("#fbtn").prop("disabled",true);
    
    }
}

function check(){
    if(city==""){
        $("#btn").prop("disabled",true);
        $("#fbtn").prop("disabled",true);
    }
}



$("#btn").click(()=>
    {
        $(".table").removeClass("content-hide");
        $("#chart-container").hide();
    $.ajax({

        type:"GET",
        url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=ef0107f6f8d7d8932a3c0d617ef9b1ec`,
        success : (output)=>{
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

        error  : (err)=>{
            console.log('in failure scenario');
            console.log(err);
            alert(err);

        }
    });
})

$("#fbtn").click(()=>{

    
    $(".table").addClass("content-hide");
    $("#chart-container").show();
    $.ajax({

        type:"GET",
        url: `https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=ef0107f6f8d7d8932a3c0d617ef9b1ec`,
        success : (output)=>{
            
            console.log(output);
            Dates = output.list.map((ele) => moment(ele.dt * 1000).format('dddd, h:mm a'));
            console.log(Dates);
            Temperatures = output.list.map(ele => Math.round(ele.main.temp - 273));
            console.log(Temperatures);
            plotChart(Temperatures, Dates);
        },
        error : (output)=>{
            console.log(output);
        }

    });
})

    function plotChart(tempArr, datesArr) {
        Highcharts.chart('chart-container', {
            chart: {
                type: 'column',
                backgroundColor: '#EAEDED'
            },
            title: {
                text: 'Monthly Average Temperature'
            },
            xAxis: {
                categories: datesArr,
                color: '#641E16'
            },
            
            yAxis: {
                title: {
                    text: 'Temperature'
                },
                color: '#641E16',
                labels: {
                    formatter: function () {
                        return this.value + '°';
                    }
                }
            },
            tooltip: {
                crosshairs: true,
                shared: true,
                backgroundColor: '#F5CBA7'
            },
            plotOptions: {
                lineColor: '#641E16',
                column: {
                    marker: {
                        radius: 4,
                        //lineColor: '#A93226',
                        lineWidth: 5
                    },
                    borderColor: '#4A235A',
                    color: '#1E8449'
                    
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

