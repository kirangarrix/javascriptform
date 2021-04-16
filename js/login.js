$(document).ready(function () {
    
    

    $(document).on('click', 'input[type="checkbox"]', function() {      
        $('input[type="checkbox"]').not(this).prop('checked', false);      
    });  
 
    $(".loginphn").hide(); 
$("#check1").change(function () { 
   
    if(this.checked){
        $(".loginphn").hide();  
        $(".loginem").show();     
    }
    else{
        $(".loginphn").hide();
        $(".loginem").show();
        
    }
});
$("#check2").change(function(){
    if(this.checked){
        $(".loginem").hide();
        $(".loginphn").show();
    }
    else{
        $(".loginphn").hide();
        $(".loginem").show();
    }
});

$("#email_error").hide();
$("#password_error").hide();
$("#phone_error").hide();
$("#password_error2").hide();



         var email_error = false;
         var password_error = false;
         var phoneno_error=false;
         var password2_error = false;


$("#gmail").focusout(function(){
    emailcheck();
});
$("#pass1").focusout(function(){
    pass1check();
});
$("#phn").focusout(function(){
    phncheck();
})
$("#pass2").focusout(function(){
    pass2check();
})

function emailcheck(){
    var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    var email=$("#gmail").val();
    if(pattern.test(email)&&email !=='')
    {
      $("#email_error").hide();
      $("#gmail").css("border-bottom","4px solid #34F458");
    }
    else{
        $("#email_error").html("Invalid Email");
        $("#email_error").show();
        $("#gmail").css("border-bottom","4px solid #F90A0A");
         email_error = true;
    }
}
 function pass1check(){
    var pass_length = $("#pass1").val().length;
    if(pass_length < 6){
        $("#password_error").html("Atleast 6 Characters");
        $("#password_error").show();
        $("#pass1").css("border-bottom","4px solid #F90A0A");
        password_error=true;
    }
    else{
        $("#password_error").hide();
        $("#pass1").css("border-bottom","4px solid #34F458");
    }
 }


function phncheck(){
    var telcheck = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
    var phn=$("#phn").val();
    if(telcheck.test(phn)&&phn !=='')
    {
        $("#phone_error").hide();
        $("#phn").css("border-bottom","4px solid #34F458");
    }
    else{
        $("#phone_error").html("invalid phone number");
        $("#phone_error").show();
        $("#phn").css("border-bottom","4px solid #F90A0A");
         phoneno_error= true;

    }

}
function pass2check(){
    var pass2_length = $("#pass2").val().length;
    if(pass2_length < 6){
        $("#password_error2").html("Atleast 6 characters");
        $("#password_error2").show();
        $("#pass2").css("border-bottom","4px solid #F90A0A");
        password2_error = true;
    }
    else{
        $("#password_error2").hide();
        $("#pass2").css("border-bottom","4px solid #34F458");

    }
}

$("#register").submit(function () { 

     email_error = false;
     password_error = false;
     phoneno_error=false;
     password2_error = false;


    emailcheck();
    pass1check();
    phncheck();
    pass2check();

    if (email_error === false && password_error === false) {
        alert("Registration Successfull");
        window.location.href ="./address.html";
        return false;
    }
    else if(phoneno_error === false && password2_error === false){
        alert("Registration Successfull");
        window.location.href ="./address.html";
        return false;
       
    }
    else{
        alert("Please Fill the form Correctly");
        return false;
    }

    
    
});





    








});