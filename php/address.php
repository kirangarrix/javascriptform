<?php
include("../php/connection.php");

if(isset($_POST['submit'])){

    if( !empty($_POST['name']) && !empty($_POST['phone'])&& !empty($_POST['address'])&&!empty($_POST['state'])&&!empty($_POST['postal'])){

        $name=$_POST['name'];
        $phone=$_POST['phone'];
        $address=$_POST['address'];
        $state=$_POST['state'];
        $postal=$_POST['postal'];

        $qry="INSERT INTO address(name,mobile,address,state,postal) VALUES('$name','$phone','$address','$state','$postal');";
        $result=mysqli_query($conn,$qry) || die(mysqli_error($conn));
        if($result){
            echo "Data Successfully Saved!";
            session_start();
        $_SESSION["user_logined"]==true;
        header("Location: ../product.html");
        exit;
          }else{
              echo"An error";
          }

    }else{
        echo"form is empty";
    }


}else{
    echo "not working";
}

?>