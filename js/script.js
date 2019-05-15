$(document).ready(function(){
    var apiBase = "http://statenweb.mockable.io/conversions/";
    
    $('#inches-conversion-form .btn').on('click',function() {
        var inches = $(".inches-input").val();
        axios.get(apiBase).then(function(response){
            var conversion = response.data.centimetersInInch;
            var centimeters = inches * conversion;
            $("#inches-conversion-form .result").text(centimeters);
        });
        event.preventDefault();
    });

    $('#centimeters-conversion-form .btn').on('click',function() {
        var centimeters = $(".centimeters-input").val();
        axios.get(apiBase).then(function(response){
            var conversion = response.data.inchesInCm;
            var inches = centimeters * conversion;
            $("#centimeters-conversion-form .result").text(inches);
        });
        event.preventDefault();
    });
});