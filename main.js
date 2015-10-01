$(document).ready(function(){
   var screenHeight = $(window).height();
    $("body").css("height", screenHeight);
    
    var padding= ((screenHeight-8)/2 -64)/2;
    $("#top-left").css("padding-top", padding);
    $("#top-left").css("padding-bottom", padding);
    
    $("#top-right").css("padding-top", padding);
    $("#top-tight").css("padding-bottom", padding);
    
    $("#bottom-right").css("padding-top", padding);
    $("#bottom-tight").css("padding-bottom", padding);
    
    $("#bottom-left").css("padding-top", padding);
    $("#bottom-left").css("padding-bottom", padding);
    
    function displayTimeTL(){
        var currentTime= new Date();
        var ampm ="am";
        
        var hours= currentTime.getHours();
            if (hours >= 12){
            var miami = hours%12;
            var california= (hours-3)%12;
            var tokyo= (hours+15)%12;
            var hawaii= (hours-6)%12;
            ampm="pm";  
        }
        
        var minutes= currentTime.getMinutes();
        if (minutes<10) minutes= "0"+minutes;
        var seconds= currentTime.getSeconds();
        if (seconds<10) seconds= "0"+seconds;
        
        $("#top-left").html("Miami<br>"+miami+":"+minutes+":"+seconds+" "+ampm);
        
        $("#top-right").html("California<br>"+california+":"+minutes+":"+seconds+" "+ampm);
        
        $("#bottom-right").html("tokyo<br>"+tokyo+":"+minutes+":"+seconds+" "+ampm);
        
        $("#bottom-left").html("hawaii<br>"+hawaii+":"+minutes+":"+seconds+" "+ampm);
    }
    
    
    //to repeat a function use setInterval function
    setInterval(function(){
        displayTimeTL();
    },200);
});

