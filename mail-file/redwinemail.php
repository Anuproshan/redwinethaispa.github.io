<?php
$Firstname=$_POST['Firstname'];
$Email=$_POST['Email'];
$Phoneone=$_POST['Phoneone'];
$Phonetwo=$_POST['Phonetwo'];
$Address=$_POST['Address'];
$Message=$_POST['Message'];
$to = "anoop.dsv@gmail.com";
$subject = "Red Wine And Thai Spa Enquiry";  

$message = "
<html>
<head>
<title>Red Wine And Thai Spa Enquiry</title>
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
<td>".$Phoneone."</td>
</tr>

<tr>
<td>Alter Nate Phone Number: </td>
<td>".$Phonetwo."</td>
</tr>

<tr>
<td>Address: </td>
<td>".$Address."</td>
</tr>

<tr>
<td>Message: </td>
<td>".$Message."</td>
</tr>

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