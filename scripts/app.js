// define globals
var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";
var $quakesList;
var map;
var template;

$(document).on("ready", function(){

    $quakesList = $.ajax({
        method: "GET",
        url: weekly_quakes_endpoint
    })
    .done(function(data){

        var earthquake = data.features;
        
        var source = $("#quakes-template").html();
        template = Handlebars.compile(source);

        var quakesTemplate = template({quakes: earthquake});

        $("#info").append(quakesTemplate);
    })
    .fail(function(response){
        console.log("Error", response);
    })
});
