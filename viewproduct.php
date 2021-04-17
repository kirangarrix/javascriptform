<?php
include("./php/connection.php");

$query="SELECT * FROM product";
$result=mysqli_query($conn,$query);

?>

<!doctype html>
<html lang="en">
  <head>
    <title>Title</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
    <link rel="stylesheet" href="css/index.css">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  </head>
  <body>

    <header>

        <div class="container-fluid">
                  <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container"> 
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
              
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                      <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="address.html">Address</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="product.html">Products</a>
                    </li>
                    <li class="nav-item active">
                      <a class="nav-link" href="viewproduct.php">view products</a>
                    </li>     
                    <li> <a href="php/logout.php" class="mx-auto "><button class="btn btn-primary float-right">logout</button></a></li>              
                    
                  </ul>
                </div>
              </div>
        
              </nav>
              </div>
    
            </header>


            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 col-md-12 col-lg-12">
                      <div class="table-responsive">
                        <table class="table">
                            <thead>
                              <tr>
                                <th scope="col">Date</th>
                                <th scope="col">Id</th>
                                <th scope="col">Product name</th>
                                <th scope="col">Product price</th>
                                <th scope="col">Product description</th>
                                <th scope="col">Specification</th>
                                <th scope="col">Color</th>
                                <th scope="col">Image</th>
                                <th scope="col">Specification</th>
                              </tr>
                            </thead>

                            <?php
                            while($row=mysqli_fetch_assoc($result))
                            {
                            ?>
                            <tbody>
                              <tr>
                                <td><?php echo $row['dob']; ?></td>
                                <td><?php echo $row['id']; ?></td>
                                <td><?php echo $row['productname']; ?></td>
                                <td><?php echo $row['price']; ?></td>
                                <td><?php echo $row['description']; ?></td>
                                <td><?php echo $row['specification'] ;?></td>
                                <td><?php echo $row['color']; ?></td>
                                <td><img src="<?php echo $row['file']; ?>" width="50" height="50"></td>
                                <td><?php echo $row['color']; ?></td>        
                             </tr>
                            <?php
                             }
                            ?>                           
                            </tbody>
                          </table>
                        </div>
        
                    </div>
        
                </div>
        
            </div>

            
 
      
   <br>
   
   <footer class="text-center text-white" style="background-color: #f1f1f1;">
       <div class="container pt-4 py-5">
         <section class="mb-4">
           <a
             class="btn btn-link btn-floating btn-lg text-dark m-1"
             href="#!"
             role="button"
             ><i class="fab fa-facebook-f"></i
           ></a>
           <a
             class="btn btn-link btn-floating btn-lg text-dark m-1"
             href="#!"
             role="button"
             ><i class="fab fa-twitter"></i
           ></a>
           <a
             class="btn btn-link btn-floating btn-lg text-dark m-1"
             href="#!"
             role="button"
             ><i class="fab fa-google"></i
           ></a>
           <a
             class="btn btn-link btn-floating btn-lg text-dark m-1"
             href="#!"
             role="button"
             ><i class="fab fa-instagram"></i
           ></a>
           <a
             class="btn btn-link btn-floating btn-lg text-dark m-1"
             href="#!"
             role="button"
             ><i class="fab fa-linkedin"></i
           ></a>
           <a
             class="btn btn-link btn-floating btn-lg text-dark m-1"
             href="#!"
             role="button"
             
             ><i class="fab fa-github"></i
           ></a>
         </section>
         <div>
           <p class="p-5 text-center text-dark">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
         </div>
       </div>
       <div class="text-center text-dark p-3" style="background-color: rgba(0, 0, 0, 0.2);">
         © 2020 Copyright:
         <a class="text-dark" href="https://google.com/">Google.com</a>
       </div>
     </footer>
    
      
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
  </body>
</html>