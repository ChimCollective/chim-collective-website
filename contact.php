<?php

<?php
  $name=$_POST['name'];
  $visitor_email=$_POST['email'];
  $message=$_POST['msg'];

  $email_subject="New Form Submission";
  $email_body="User Name: $name.\n".
              "User Email: $visitor_email.\n".
              "User Message: $message.\n";

  $to=sungthongngamkik@gmail.com;
  $headers .=Reply-TO: $visitor_email \r\n";
  mail($to,$email_subject,$email_body,$headers);

  header("Location: index.html");


 ?>
