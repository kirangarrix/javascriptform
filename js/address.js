$(document).ready(function () {
    

    $("#name_error").hide();
    $("#mobile_error").hide();
    $("#address_error").hide();
    $("#select_error").hide();
    $("#postal_error").hide();
    
    var name_error=false;
    var mobile_error=false;
    var address_error=false;
    var select_error=false;
    var postal_error=false;

    $("#name").focusout(function(){
        namecheck();
    });
  
    $("#telephn").focusout(function(){
        mobilecheck();
    });

    $("#addr").focusout(function(){
        addresscheck();
    });

    $("#state").focusout(function(){
        statecheck();
    });
    $("#postal").focusout(function(){
         postalcheck();
    });


  function namecheck(){
      var pattern = /^[A-Za-z._\-\s]{0,25}$/;
      var name=$("#name").val();
      if(pattern.test(name)&&name !=='')
      {
        $("#name_error").hide();
        $("#name").css("border-bottom","4px solid #34F458");
      }
      else{
        $("#name_error").html("Invalid name");
        $("#name_error").show();
        $("#name").css("border-bottom","4px solid #F90A0A");
          name_error = true;
      }

    }

    function mobilecheck(){

      var moblpattern= /^[0-9-+]{10}$/;
      var phnno=$("#telephn").val();
      if(moblpattern.test(phnno)&&phnno !=='')
      {
        $("#mobile_error").hide();
        $("#telephn").css("border-bottom","4px solid #34F458");
      }
      else{
        $("#mobile_error").html("please enter 10 digit mobile number");
        $("#mobile_error").show();
        $("#telephn").css("border-bottom","4px solid #F90A0A");
         mobile_error = true;
      }

    }

    function addresscheck(){
      var address=$("#addr").val();
      if(address !=='')
      {
        $("#address_error").hide();
        $("#addr").css("border-bottom","4px solid #34F458");
      }
      else{
        $("#address_error").html("please enter address");
        $("#address_error").show();
        $("#addr").css("border-bottom","4px solid #F90A0A");
        address_error = true;
      }
    }

    function statecheck(){
        var state=$("#state").val();
        if(state !=='')
        {
         $("#select_error").hide();
         $("#state").css("border-bottom","4px solid #34F458");
        }
        else{
         $("#select_error").html("please select state");
         $("#select_error").show();
         $("#state").css("border-bottom","4px solid #F90A0A");
          select_error = true;
        
        }
    }

    function postalcheck(){
        var postpattern= /^[0-9]{6}$/;
        var postalcode=$("#postal").val();
        if(postpattern.test(postalcode)&&postalcode.length==6&&postalcode !=='')
        {
         $("#postal_error").hide();
         $("#postal").css("border-bottom","4px solid #34F458");
        }
        else{
            $("#postal_error").html("please enter 6 digit postal code");
            $("#postal_error").show();
            $("#postal").css("border-bottom","4px solid #F90A0A");
             postal_error = true;

        }
        
    }


    $("#register").submit(function () { 
        
         name_error=false;
         mobile_error=false;
         address_error=false;
         select_error=false;
         postal_error=false;


         namecheck();
         mobilecheck();
         addresscheck();
         statecheck();
         postalcheck();


         
    if (name_error === false &&  mobile_error === false&& address_error === false&&select_error===false&&postal_error===false) {
        alert("Registration Successfull");
        //window.location.href ="./product.html";
        return true;
    }
    else{
        alert("Please Fill the form Correctly");
          return false;
    }


        
  });





});