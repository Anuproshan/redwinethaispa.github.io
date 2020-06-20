<?php
$Firstname=$_POST['Firstname-popup'];
$Email=$_POST['Email-popup'];
$Phone=$_POST['Phone-popup'];
$Package=$_POST['Package-popup'];
$to = "anoop.dsv@gmail.com";
$subject = "Red Wine And Spa Enquiry";  

$message = "
<html>
<head>
<title>Shri Padmnabham Enquiry</title>
</head>
<body>
<p>Appointment User Contact Information</p>
<table>
<tr>
<td>Name: </td>
<td>".$Firstname."</td>
</tr>

<tr>
<td>Email Address: </td>
<td>".$Email."</td>
</tr>

<tr>
<td>Phone Number: </td>
<td>".$Phone."</td>
</tr>

<tr>
<td>Description: </td>
<td>".$Package."</td>
</tr>
<tr>


</table>
</body>
</html>
";

$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// More headers
$headers .= 'From: <info@dsvwebtech.in >' . "\r\n";
$mail=mail($to,$subject,$message,$headers);
if($mail)
{
   echo 'Thanks for connecting us we will contact you shortly';
}
else
{  
  echo 'Email Not Sent Please Try Again';
}

?>