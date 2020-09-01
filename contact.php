<?php
require 'PHPMailer/PHPMailerAutoload.php';

$name=$_POST['name'];
$visitor_email=$_POST['email'];
$phone=$_POST['phone'];
$message=$_POST['msg'];

$mail = new PHPMailer(true);
$mail ->IsSmtp();

$mail ->CharSet = "utf-8";
$mail ->SMTPAuth = true;
$mail ->SMTPSecure = 'tls';
$mail ->Host = "smtp.gmail.com";
$mail ->Port = 587; // or 587
$mail ->IsHTML(true);
$mail ->Username = "Chimweb09@gmail.com"; //sender mail
$mail ->Password = "KIKkok1992"; //pw sender mail
$mail ->SetFrom("Chimweb09@gmail.com", "Chimweb09"); //name of sender mail

  $email_subject="New Form Submission";
  $email_body=" Name: $name.<br>".
              " Email: $visitor_email.<br>".
			  "Number: $phone.<br>".
              "Message: $message.<br>";

$mail->Subject = $email_subject;
$mail->msgHTML($email_body);
$mail ->AddAddress('sungthongngamkik@gmail.com'); //receiver mail
$mail ->AddAddress('sungthongngam@hotmail.co.th');//receiver mail

if(!$mail->Send()){
	echo "Mail Not Sent";
}
else{
	echo "Mail Sent";
}


$mail2 = new PHPMailer(true);
$mail2 ->IsSmtp();

$mail2 ->CharSet = "utf-8";
$mail2 ->SMTPAuth = true;
$mail2 ->SMTPSecure = 'tls';
$mail2 ->Host = "smtp.gmail.com";
$mail2 ->Port = 587; // or 587
$mail2 ->IsHTML(true);
$mail2 ->Username = "Chimweb09@gmail.com"; //sender mail
$mail2 ->Password = "KIKkok1992"; //pw
$mail2 ->SetFrom("Chimweb09@gmail.com", "Chimweb09"); //name of sender mail

  $email_subject="New Form Submission";
  $email_body="<h2>Hi $name,</h2>".
              "Thank you for submission the form.We are glad you took the time to reach out to us.<br>".
			  "Your form will be reviewed and you will hear back from us as soon as possible.<br><br><br>".
              "Best,<br>".
			  "Chim <br>".
			  "New York<br>".
			  "888-888-888<br>";

$mail2->Subject = $email_subject;
$mail2->msgHTML($email_body);
$mail2 ->AddAddress($visitor_email); //receiver mail

if(!$mail2->Send()){
	echo "Mail Not Sent";
}
else{
	echo "Mail Sent";
}

header("Location: index.html");


?>
