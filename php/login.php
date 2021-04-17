<?php
include("../php/connection.php");

if(isset($_POST['submit'])){
    
    if( !empty($_POST['phone']) && !empty($_POST['pass2'])){

        $phone=$_POST['phone'];
        $pass2=$_POST['pass2'];

        $query1="INSERT INTO login(email,password1,phone,password2) VALUES('','','$phone','$pass2');";
        $result=mysqli_query($conn,$query1) || die(mysqli_error($conn));
        
      if($result){
        echo "Data Successfully Saved!";
        session_start();
        $_SESSION["user_logined"]==true;
        header("Location: ../address.html");
        exit;
      }else{
          echo"An error";
      }

    }else if(!empty($_POST['email']) && !empty($_POST['pass1'])){

        $email=$_POST['email'];
        $pass1=$_POST['pass1'];
        

        $query2="INSERT INTO login(email,password1,phone,password2) VALUES ('$email','$pass1','','');";

        $result=mysqli_query($conn,$query2) || die(mysqli_error($conn));



      if($result){
        echo "Data Successfully Saved!";
        session_start();
        $_SESSION["user_logined"]==true;
        header("Location: ../address.html");
        exit;
      }else{
          echo"An error";
      }

    }else{
   
      
        echo"form is empty";
    }



}else{
    echo"not working";
}

?>