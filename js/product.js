$(document).ready(function () {
    
    
$("#name_error").hide();
$("#category_error").hide();
$("#description_error").hide();
$("#price_error").hide();
$("#specification_error").hide();
$("#file_error").hide();
$("#color_error").hide();




var name_error = false;
var category_error = false;
var description_error = false;
var price_error = false;
var specification_error = false;
var file_error = false;
var color_error=false

$("#name").focusout(function(){
    productname();
});
$("#category").focusout(function(){
    category();
});
$("#description").focusout(function(){
    description();
});
$("#price").focusout(function(){
    price();
});
$("#specification").focusout(function(){
    specification();
});
$("#file").focusout(function(){
    file();
});
$("#color").focusout(function(){
    color();
});



function productname(){
   // var name=$("#name").val().trim().split(' ').length;
   var name=$("#name").val();
   if(name!==''){
     name=$("#name").val().trim().split(' ').length;
     if(name < 20){
        $("#name_error").hide();
        $("#name").css("border-bottom","4px solid #34F458");
     }
   }else{
    $("#name_error").html("20 Characters only");
    $("#name_error").show();
    $("#name").css("border-bottom","4px solid #F90A0A");
    name_error=true;
   }

}

function category(){
    var category=$("#category").val();
        if(category !=='')
        {
         $("#category_error").hide();
         $("#category").css("border-bottom","4px solid #34F458");
        }
        else{
         $("#category_error").html("please select");
         $("#category_error").show();
         $("#category").css("border-bottom","4px solid #F90A0A");
         category_error = true;
        
        }
}




function description(){

   //var count =$.trim($("textarea").val()).split(' ').length;
       //var count= $("#description").val().trim().match(/\S+/g);
   // var count = $("#description").val().trim().split(' ').length;
   var count = $("#description").val();
    if(count!==''){
         count = $("#description").val().trim().split(' ').length;
           if(count < 250){
            $("#description_error").hide();
            $("#description").css("border-bottom","4px solid #34F458");
           }
    }else{
        $("#description_error").html("please Enter words");
        $("#description_error").show();
        $("#description").css("border-bottom","4px solid #F90A0A");
        description_error = true;
    }
    
}




function price(){

    var price=$.trim($("#price").val());
    var amt=200000;
    if((price !=="")&&(price<amt)){
        $("#price_error").hide();
        $("#price").css("border-bottom","4px solid #34F458");
    }else{
        $("#price_error").html("please enter price less than 2lakh");
        $("#price_error").show();
        $("#price").css("border-bottom","4px solid #F90A0A");
        price_error = true;
    }
    
}




function specification(){
  var specification = $("#specification").val();
  if(specification !==''){
      $("#specification").css("border-bottom","4px solid #34F458");
      $("#specification_error").hide();
  }
  else{
    $("#specification_error").html("please type specification");
    $("#specification_error").show();
    $("#specification").css("border-bottom","4px solid #F90A0A");
  }
}

function file(){
   var ext = $("#file").val().split('.').pop().toLowerCase();
    if ($.inArray(ext, ['gif','png','jpg','jpeg']) == -1)
     {
        $("#file").val('');
        $("#file_error").html("please upload images only");
        $("#file_error").show();
        $("#file").css("border-bottom","4px solid #F90A0A");
        file_error = true;
       
     }
     else
     {
        $("#file_error").hide();
        $("#file").css("border-bottom","4px solid #34F458");
       
     }
}

function color(){
    var color=$("#color").val();
    if(color !=='')
    {
      $("#color_error").hide();
      $("#color").css("border-bottom","4px solid #34F458");
    }
    else{
      $("#color_error").html("please select colors");
      $("#color_error").show();
      $("#color").css("border-bottom","4px solid #F90A0A");
       color_error = true;
    }

}


$("#register").submit(function () { 
     name_error = false;
     category_error = false;
     description_error = false;
     price_error = false;
     specification_error = false;
     file_error = false;
     color_error=false

     productname();
     category();
     description();
     price();
     specification();
     file();
     color();


    

    
if (name_error === false&&category_error === false&&description_error === false&&price_error===false&&specification_error===false&&file_error===false&&color_error===false) {
   alert("Registration Successfull");
  // window.location.href ="./viewproduct.html";
   return true;
}
else{
   alert("Please Fill the form Correctly");
   return false;
}


   
});









});