<?php

/** 1. MAIN SETTINGS
*******************************************************************/


// ENTER YOUR EMAIL
$emailTo = "yourmail@example.com";


// ENTER IDENTIFIER
$emailIdentifier =  "Message sent via contact form from " . $_SERVER["SERVER_NAME"];



/** 2. MESSAGES
*******************************************************************/


// ERROR OR EMPTY FIELD
$errrorEmptyField = "* This Field is required!";


// ERROR FOR INVALID EMAIL
$errrorEmailInvalid = "* This Email is Invalid!";


// SUCCESS MESSAGE
$successMessage = "* The Email was Sent Successfully!";


/** 3. MAIN SCRIPT
*******************************************************************/


if($_POST) {

    $name = addslashes(trim($_POST["name"]));
    $clientEmail = addslashes(trim($_POST["email"]));
    $message = addslashes(trim($_POST["message"]));
	$fhp_input = addslashes(trim($_POST["phone"]));

    $array = array("nameMessage" => "", "emailMessage" => "", "messageMessage" => "","succesMessage" => "");

    if($name == "") {
    	$array["nameMessage"] = $errrorEmptyField;
    }
	
    if(!filter_var($clientEmail, FILTER_VALIDATE_EMAIL)) {
        $array["emailMessage"] = $errrorEmailInvalid;
    }
	
    if($message == "") {
        $array["messageMessage"] = $errrorEmptyField;
    }
	
    if($name != "" && filter_var($clientEmail, FILTER_VALIDATE_EMAIL) && $message != "" && $fhp_input == "") {
		
		$array["succesMessage"] = $successMessage;
		
		$headers  = "MIME-Version: 1.0" . "\r\n";
        $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
		$headers .= "From: " . $name . " <" . $clientEmail .">\r\n";
		$headers .= "Reply-To: " . $clientEmail;
		
		mail($emailTo, $emailIdentifier, $message, $headers);
		
    }

    echo json_encode($array);

}

?>