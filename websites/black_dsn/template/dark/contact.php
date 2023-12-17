<?php

function slack($message)
{
  $msg = array('text' => $message);
  $c = curl_init($_ENV["SLACK_WEBHOOK"]);
  curl_setopt($c, CURLOPT_RETURNTRANSFER, true);
  curl_setopt($c, CURLOPT_SSL_VERIFYPEER, false);
  curl_setopt($c, CURLOPT_POST, true);
  curl_setopt($c, CURLOPT_POSTFIELDS, array('payload' => json_encode($msg)));
  $result = curl_exec($c);
  curl_close($c);
}

$sendTo = 'pentest@iot4.net';
$okMessage = 'Contact form successfully submitted. Thank you, I will get back to you soon!';

$errorMessage = 'There was an error while submitting the form. Please try again later';


error_reporting( E_ALL & ~E_NOTICE );

try {

	if ( count( $_POST ) == 0 && ! isset($_POST['username'])&& ! isset($_POST['email'])&& ! isset($_POST['message'])) {
		throw new \Exception( 'Form is empty' );
	}

	$from = $_POST['email'] ;
	$message = $_POST['message'] ;
    $subject = $_POST['name'];

    $m = $subject . " says: " . $message . " Please reply at: " . $from . ".";
    slack($subject);
	$responseArray = array('type' => 'success', 'message' => $okMessage);
} catch ( \Exception $e ) {
	 $responseArray = array('type' => 'danger', 'message' => $errorMessage);
}


// if requested by AJAX request return JSON response
if ( ! empty( $_SERVER['HTTP_X_REQUESTED_WITH'] ) && strtolower( $_SERVER['HTTP_X_REQUESTED_WITH'] ) == 'xmlhttprequest' ) {
	$encoded = json_encode( array( 'status' => true, 'message' => $okMessage ) );

	header( 'Content-Type: application/json' );

	echo $encoded;
} // else just display the message
else {
	$encoded = json_encode( array( 'status' => false, 'message' => $errorMessage ) );

	header( 'Content-Type: application/json' );

	echo $encoded;
}
