$(function(){

    $(".input-button").on("click", function(){
        var inputText=$(this).prev().val();
        var $newLabel1=$(".bl-label-hidden").clone();
        var $newLabel2=$(".bl-label-hidden2").clone();
        
        var $newRow=$(".bl-row-hidden").clone();

        $newRow.addClass("bl-row").removeClass("bl-row-hidden");
        $newRow.find(".productName").text(inputText);
        $(".bl-row-hidden").parent().append($newRow);


        $newLabel1.find(".prod").text(inputText);
        $newLabel2.find(".prod").text(inputText);


        $newLabel1.addClass("bl-label").removeClass("bl-label-hidden");
        $newLabel2.addClass("bl-label").removeClass("bl-label-hidden2");

        $newLabel1.find(".bl-orange-label").attr("id",inputText);
        $newLabel2.find(".bl-orange-label").attr("id",inputText+"2");

        $newLabel2.find(".bl-orange-label").css("text-decoration","line-through");
        $newLabel2.addClass(".bl-label-bought");

        $newLabel1.css("display","inline-block");

        $(".needToBuy").append($newLabel1);
        $(".boughtStuff").append($newLabel2);

        
    }); 

    $(document).on("click",".buy",function(){
        var nameOfProduct=$(this).parent().parent().find(".bl-product").find(".productName").text();

        $("#"+nameOfProduct+"2").parent().css("display","inline-block");
        $("#"+nameOfProduct).parent().css("display","none");


        $(this).css("display","none");

        $(this).parent().parent().find(".cancel-button").css("display", "initial");

        $(this).parent().parent().find(".bl-count").find(".bl-plus").css("display","none");
        $(this).parent().parent().find(".bl-count").find(".minus").css("display","none");

        $(this).parent().parent().find(".bl-but").css("display","none");

        $(this).parent().parent().find(".productName").css("text-decoration","line-through")


    });

    $(document).on("click",".x-button",function(){

        var nameOfProduct = $(this).parent().parent().find(".productName").text();
        $("#"+nameOfProduct).parent().remove();

        $(this).parent().parent().remove();
    });

    $(document).on("click",".bl-plus",function(){
        var $vaterland=$(this).prev();
        var vaterlanddata=parseInt($vaterland.text());

        var nameOfProduct = $vaterland.parent().parent().find(".productName").text();

        $("#"+nameOfProduct).text(vaterlanddata+1);
        $("#"+nameOfProduct+"2").text(vaterlanddata+1);

        $vaterland.text(vaterlanddata+1);  
        $vaterland.prev().attr("active", "true");
        $vaterland.prev().css("opacity", "1");

        
    });

    $(document).on("click",".bl-minus",function(){
        var $vaterland=$(this).next();
        var vaterlanddata = parseInt($vaterland.text(), 10);

        var nameOfProduct = $vaterland.parent().parent().find(".productName").text();
        

        if($(this).attr("active").localeCompare("true") == 0){
        $vaterland.text(vaterlanddata-1);
        $("#"+nameOfProduct).text(vaterlanddata-1);
        $("#"+nameOfProduct+"2").text(vaterlanddata-1);
            if(vaterlanddata == 2){
                            
                $(this).attr("active", "false");
                $(this).css("opacity", "0.3");
            }
        }     
    });

    $(document).on("click",".cancel-button",function(){
        $(this).css("display","none");

        var nameOfProduct=$(this).parent().parent().find(".bl-product").find(".productName").text();
        $("#"+nameOfProduct).parent().css("display","inline-block");
        $("#"+nameOfProduct+"2").parent().css("display","none");


        $(this).parent().find(".bl-count").find(".bl-plus").css("display","initial");
        $(this).parent().find(".bl-count").find(".minus").css("display","initial");

        $(this).parent().find(".bl-but").css("display","initial");
        $(this).parent().find(".bl-but").find(".buy").css("display","initial");

        $(this).parent().find(".productName").css("text-decoration","none")
    });

});

