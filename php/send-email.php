<?php

// Replace this with your own email address
if (isset($_POST["submit"])) {
   $f_name = $_POST['name'] ;
   $email = $_POST['email'] ;
   $message = $_POST['message'] ;
   
   $to = 'syedharisali444@gmail.com';
         // $to = "naved@webzesty.net";
         $subject = "Request Form";
         
         $body = "From: $f_name\n <br><br> E-Mail: $email\n <br><br> Message:\n $message";
         
         $header = "From: $email \r\n";
     //    $header .= "Cc:afgh@somedomain.com \r\n";
         $header .= "MIME-Version: 1.0\r\n";
         $header .= "Content-type: text/html\r\n";
         
         $retval = mail ($to,$subject,$body,$header);
         
         if( $retval == true  {
             $result =  echo '<script>alert("Thank You! Your request has been submitted successfully.")</script>' ;
         }else {
             $result =  echo '<script>alert("Sorry there was an error sending your message. Please try again later")</script>' ;
            //  $result = "  " ;
         }
       }


 