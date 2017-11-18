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
            // $headers[] = "Subject: {$Subj}";
            $headers[] = "X-Mailer: PHP/".phpversion();

            mail($To, $Subj, $Body, implode("\r\n", $headers));
  }


$post = file_get_contents('php://input');
$user = json_decode($post,true);


if(isset($user["name"]) && isset($user["email"]) && $user["phone"])
{
  $message_to_user = '<p><b>Dear Friend!</b></p><br>Thank you for sent request to us.<br>We will answer your as soon as possible.<p><b>Best regards'
                    . '<br>UMBRETTA TEAM</b></p>';
  $message_to_admin = 'The visitor from website name<b> '.$user["name"].'</b><p><br><b>Asking next question: </b><br>"'.
  $user["question"].'"</p><p><br><b>Contact</b> <br><b>City: </b>'.$user["city"].'<br><b>Phone: </b>'.$user["phone"].'<br>'.
  '<b>Email:</b> '.$user["email"];
  $subj_to_user = 'Welcome to UMBRETTA';
  $subj_to_admin = 'New request from Umbretta website';
  $email_admin ='o.talavas@gmail.com';

  send_email($email_admin, $subj_to_admin, $message_to_admin);
  send_email($user["email"], $subj_to_user, $message_to_user);
  $res["show"] = true;
	echo json_encode($res['show']);
}
else
{
	echo var_dump($user);
	/*echo "Email was not sent due to technical issues on a server";*/
}
?>
