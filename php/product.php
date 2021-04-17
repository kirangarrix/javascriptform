<?php
include("../php/connection.php");

if(isset($_POST['submit'])){

    if( !empty($_POST['productname']) && !empty($_POST['product'])&& !empty($_POST['description'])&&!empty($_POST['price'])&&!empty($_POST['specification'])&&!empty($_POST['color'])){
      
      $dob=date('Y-m-d');
      $pdctname=$_POST['productname'];
      $pdct=$_POST['product'];
      $des=$_POST['description'];
      $price=$_POST['price'];
      $spec=$_POST['specification'];
      $color=$_POST['color'];
      

      $pname=rand(1000,10000)."-".$_FILES['file']['name'];
      $tname=$_FILES['file']['tmp_name'];
      $upload_dir='../img';
    move_uploaded_file($tname,$upload_dir.'/'.$pname);
      $test='./img'.'/'.$pname;

      $qry="INSERT INTO product(dob,productname,product,description,price,specification,file,color)VALUES('$dob','$pdctname','$pdct','$des','$price','$spec','$test','$color');";
      $result=mysqli_query($conn,$qry) || die(mysqli_error($conn));
      if($result){
          echo "Data Successfully Saved!";
          session_start();
        $_SESSION["user_logined"]==true;
        header("Location: ../viewproduct.php");
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