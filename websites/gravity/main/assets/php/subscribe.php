<?php

/** 1. MAIN SETTINGS
*******************************************************************/


// SUBSCRIBE FORM MODE [ "file" OR "mailchimp" }
$mode = "file";


/** 1.1. MAIN SETTINGS [ FILE MODE ]
*******************************************************************/


// ENTER PATH TO FILE
$file_path = $_SERVER["DOCUMENT_ROOT"]."/";


// ENTER NAME OF FILE 
$file_name = "subscriber-list.txt";


/** 1.2. MAIN SETTINGS [ MAILCHIMP MODE ]
******************************************************************/


// ENTER MAILCHIMP API KEY
$mailchimp_api_key =  "us3";

			 
// ENTER MAILCHIMP LIST ID
$mailchimp_list_id =  "xx";


/** 3. MESSAGES
*******************************************************************/


// ENTER ERROR MESSAGE
$varError ="* An error occurred!"; 


// ENTER VALIDATION ERROR MESSAGE
$varErrorValidation ="* This email is invalid!"; 


// ENTER EMPTY ERROR MESSAGE
$varErrorEmpty ="* This Field is required!"; 


// ENTER SUCCESS MESSAGE
$varSuccess ="* Thanks for your interest!"; 

/** 4. SLACK HELPER SCRIPT

*******************************************************************/
function slack($message)
{
  define('SLACK_WEBHOOK', getenv('SLACK_WEBHOOK'));
  $msg = array('text' => $message);
  $c = curl_init(SLACK_WEBHOOK);
  curl_setopt($c, CURLOPT_RETURNTRANSFER, true);
  curl_setopt($c, CURLOPT_SSL_VERIFYPEER, false);
  curl_setopt($c, CURLOPT_POST, true);
  curl_setopt($c, CURLOPT_POSTFIELDS, array('payload' => json_encode($msg)));
  $result = curl_exec($c);
  curl_close($c);
}

/** 5. MAIN SCRIPT
*******************************************************************/


if ($mode === "mailchimp") { 
	include("MailChimp.php"); 
}

use \DrewM\MailChimp\MailChimp;

if($_POST) {
	
    $subscriber_email = $_POST['email'];
	$subscriber_fhp_input = $_POST['phone'];
	$array = array();
    
    if( $subscriber_email == "" ) {
        
        $array["valid"] = 0;
        $array["message"] = $varErrorEmpty;
        
    } else {

        if( !filter_var($subscriber_email, FILTER_VALIDATE_EMAIL) || $subscriber_fhp_input != "") {

            $array["valid"] = 0;
            $array["message"] = $varErrorValidation;

        } else {

            if ($mode === "file") {

                file_put_contents($file_path.$file_name, strtolower($subscriber_email)."\r\n", FILE_APPEND);

                if (file_exists($file_path.$file_name)) {   

                    $array["valid"] = 1;
                    $array["message"] = $varSuccess;   

                } else {

                    $array["valid"] = 0;
                    $array["message"] = $varError;

                }

            } 

            if ($mode === "mailchimp") {

                $MailChimp = new MailChimp($mailchimp_api_key);

                $result = $MailChimp->post("lists/$mailchimp_list_id/members", [
                        'email_address' => $subscriber_email,
                        'status'        => 'subscribed',
                ]);

                if ($MailChimp->success()) {

                    $array["valid"] = 1;
                    $array["message"] = $varSuccess;

                } else {

                    $array["valid"] = 0;
                    $array["message"] = $varError;

                }

            }

        }
        
    }
	slack("GRAVITY: Please subscribe: " . $subscriber_email);
	echo json_encode($array);

}

?>
