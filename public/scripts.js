
$(document).ready(function(){




    $("#dropdown1").on("click", function(){
        $("#tutorials").toggle();

        $("#down1").fadeToggle(50);
        $("#down2").fadeToggle(50);
        $("#references").hide();
        $("#examples").hide();
        $("#down3, #down5").show();
        $("#down4, #down6").hide();

    });
     $("#X").click(function(){
         $("#tutorials").hide();


     });


    $("#dropdown2").on("click", function(){
        $("#references").toggle();

        $("#down3").fadeToggle(50);
        $("#down4").fadeToggle(50);
        $("#tutorials").hide();
        $("#examples").hide();
        $("#down1, #down5").show();
        $("#down2, #down6").hide();
    });
    $("#Y").click(function(){
        $("#references").hide();


    });
    $("#dropdown3").on("click", function(){
        $("#examples").toggle();

        $("#down5").fadeToggle(50);
        $("#down6").fadeToggle(50);
        $("#tutorials").hide();
        $("#references").hide();
        $("#down1, #down3").show();
        $("#down2, #down4").hide();
    });
    $("#Z").click(function(){
        $("#examples").hide();


    });

    $("#mini").on("click", function(){
        $("#mini-buttons").toggle();


    });
    $("#mini-dropdown2").on("click", function(){
        $("#mini-tutorials").toggle();
        $("#mini-references").hide();
        $("#mini-examples").hide();
        $("#mini-down-t").fadeToggle(50);
        $("#mini-up-t").fadeToggle(50);
        $("#mini-down-r, #mini-down-e").show();
        $("#mini-up-r, #mini-up-e").hide();


    });
    $("#mini-dropdown3").on("click", function(){
        $("#mini-references").toggle();
        $("#mini-tutorials").hide();
        $("#mini-examples").hide();

        $("#mini-down-r").fadeToggle(50);
        $("#mini-up-r").fadeToggle(50);
        $("#mini-down-t, #mini-down-e").show();
        $("#mini-up-t, #mini-up-e").hide();
    });
    $("#mini-dropdown4").on("click", function(){
        $("#mini-examples").toggle();
        $("#mini-tutorials").hide();
        $("#mini-references").hide();

        $("#mini-down-e").fadeToggle(50);
        $("#mini-up-e").fadeToggle(50);
        $("#mini-down-t, #mini-down-r").show();
        $("#mini-up-t, #mini-up-r").hide();


    });





});