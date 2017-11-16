<?php
header('Access-Control-Allow-Origin: *'); 
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization');

  function send_email($To, $Subj, $Body) {
            $headers   = array();
            $headers[] = "MIME-Version: 1.0";
            $headers[] = "Content-type: text/html; charset=utf8";
			$headers[] = "From: UMBRETTA.COM <info@umbretta.com>";
            $headers[] = "Reply-To: UmbrettaInformationService <info@umbretta.com>";
            $headers[] = "Subject: {$Subj}";
            $headers[] = "X-Mailer: PHP/".phpversion();

            mail($To, $Subj, $Body, implode("\r\n", $headers));
  }


$post = file_get_contents('php://input');
$user = json_decode($post,true);


if(isset($user["name"]) && isset($user["email"]) && $user["phone"])
{
	send_email($user["email"], $user["phone"], $user["name"]);
	
	echo "Email has been succesfully sent to ".$user["email"];
}
else
{
	echo var_dump($user);
	/*echo "Email was not sent due to technical issues on a server";*/
}
?>