<?php


$conn=new mysqli("localhost","root","","shop");
if($conn){
    echo"<script>alert('connection successful')</script>";
}else{
    echo"<script>alert('connection fail')</script>";
}

?>