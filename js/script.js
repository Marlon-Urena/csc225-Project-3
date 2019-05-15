$(document).ready(function(){
    var apiBase = "http://statenweb.mockable.io/conversions/";
    
    $('#inches-conversion-form .btn').on('click',function() {
        var inches = $(".inches-input").val();
        axios.get(apiBase).then(function(response){
            var inchConversion = response.data.centimetersInInch;
            var centimeters = inches * inchConversion;
            $("#inches-conversion-form .result").text(inches + " inches = " + centimeters + " centimeters");
        });
        event.preventDefault();
    });

    $('#centimeters-conversion-form .btn').on('click',function() {
        var centimeters = $(".centimeters-input").val();
        axios.get(apiBase).then(function(response){
            var centimeterConversion = response.data.inchesInCm;
            var inches = centimeters * centimeterConversion;
            $("#centimeters-conversion-form .result").text(centimeters + " centimeters = " + inches + " inches");
        });
        event.preventDefault();
    });
});