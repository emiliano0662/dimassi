<?php if(isset($_POST['name']) && isset($_POST['email']) && isset($_POST['subject']) && isset($_POST['message']) && !empty($_POST['name']) && !empty($_POST['email']) && !empty($_POST['subject']) && !empty($_POST['message'])) {

    $to      = 'emiliano0662@gmail.com';
	$subject = "Nuevo mensaje de contacto - ".$_POST['subject'];

	$headers = "From: " . strip_tags($_POST['email']) . "\r\n";
    $headers .= "Reply-To: ". strip_tags($_POST['email']) . "\r\n";
    
	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

	$message = '<html><body>';
	$message .='<div style="background: #FFF;"><img src="http://www.dimassi.com.ve/assets/img/logo.png" alt="Logo Dimassi" width="200"/></div>';
	$message .= '<table rules="all" style="border-color: #666;" cellpadding="10">';
	$message .= "<tr style='background: #eee;'><td><strong>Nombre:</strong> </td><td>" . strip_tags($_POST['name']) . "</td></tr>";
	$message .= "<tr><td><strong>E-mail:</strong> </td><td>" . strip_tags($_POST['email']) . "</td></tr>";
	$message .= "<tr style='background: #eee;'><td><strong>Asunto:</strong> </td><td>" . strip_tags($_POST['subject']) . "</td></tr>";
    
    $curText = htmlentities($_POST['message']);           
    
    if (($curText) != '') {

        $message .= "<tr><td><strong>Mensaje:</strong> </td><td>" . $curText . "</td></tr>";
	}
    
    $message .= "</table>";
	$message .= "</body></html>";
	
	if(mail($to, $subject, $message, $headers)) {
        
        echo 1;

    }else {

        echo 0;
    }
} ?> 