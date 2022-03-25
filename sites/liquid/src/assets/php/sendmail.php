<?php
/*! in-sendmail.php | https://github.com/Divlo/Contact-Form | Divlo | MIT License */

    $array = array("name" => "", "email" => "", "subject" => "", "message" => "", "nameError" => "", "emailError" => "", "subjectError" => "", "messageError" => "", "isSuccess" => false); 
    $emailTo = "edunet09@gmail.com"; // Email to replace by your
    $message  = nl2br($_POST['message']);

    if ($_SERVER["REQUEST_METHOD"] == "POST") { 
        $array["name"] = verifyInput($_POST["name"]);
        $array["email"] = verifyInput($_POST["email"]);
        $array["subject"] = verifyInput($_POST["subject"]);
        $array["message"] = verifyInput($_POST["message"]);
        $array["isSuccess"] = true;  
        $emailText = "";            

        if (empty($array["name"])) {
            $array["nameError"] = "You didn't enter a name";
            $array["isSuccess"] = false; 
        }

        if(!isEmail($array["email"])) {
            $array["emailError"] = "You need to enter your email if you want to have an answer";
            $array["isSuccess"] = false; 
        }

        if(empty($array["subject"])) {
            $array["subjectError"] = "No subject? If you don't have one you can type 'No Subject'";
            $array["isSuccess"] = false; 
        }

        if (empty($array["message"])) {
            $array["messageError"] = "There is no reason to contact me if you have nothing to say";
            $array["isSuccess"] = false; 
        }
        else {
            $emailText .= "$message\n <br><br> From : {$array['name']}\n <br> Email : {$array['email']}\n";
        }
        
        if($array["isSuccess"]) {
            $headers = "MIME-Version: 1.0\r\n";
            $headers .= "Content-type: text/html; charset=utf-8\r\n";
            $headers .= "From: {$array['name']} <{$array['email']}>\r\nReply-To: {$array['name']} <{$array['email']}>\r\nX-Mailer: PHP/" . phpversion();
            mail($emailTo, $array['subject'], $emailText, $headers);
        }
        
        echo json_encode($array);
    }

    function isEmail($email) {
        return filter_var($email, FILTER_VALIDATE_EMAIL); 
    }

    function verifyInput($data) {
        $data = trim($data);                
        $data = stripcslashes($data);     
        $data = htmlspecialchars($data); 
        return $data;                    
    }
    
?>