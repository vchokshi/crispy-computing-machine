<?php
    // The user isn't logged in.

require 'vendor/autoload.php';

(Dotenv\Dotenv::createImmutable(__DIR__))->load();

$auth0 = new \Auth0\SDK\Auth0([
    'domain' => $_ENV['AUTH0_DOMAIN'],
    'clientId' => $_ENV['AUTH0_CLIENT_ID'],
    'clientSecret' => $_ENV['AUTH0_CLIENT_SECRET'],
    'cookieSecret' => $_ENV['AUTH0_COOKIE_SECRET']
]);

use Steampixel\Route;

define('ROUTE_URL_INDEX', rtrim($_ENV['AUTH0_BASE_URL'], '/'));
define('ROUTE_URL_LOGIN', ROUTE_URL_INDEX . '/login');
define('ROUTE_URL_CALLBACK', ROUTE_URL_INDEX . '/callback');
define('ROUTE_URL_LOGOUT', ROUTE_URL_INDEX . '/logout');

Route::add('/', function() use ($auth0) {
  $session = $auth0->getCredentials();

  if ($session === null) {
    echo '<p>Please <a href="/login">log in</a>.</p>';
    return;
  }

  // The user is logged in.
  echo '<pre>';
  print_r($session->user);
  echo '</pre>';

  echo '<p>You can now <a href="/logout">log out</a>.</p>';
});

$name = $session->user['name'] ?? $session->user['nickname'] ?? $session->user['email'] ?? 'Unknown';

error_log($name, true);

Route::add('/login', function() use ($auth0) {
    $auth0->clear();
    header("Location: " . $auth0->login(ROUTE_URL_CALLBACK));
    exit;
});

Route::add('/callback', function() use ($auth0) {
    $auth0->exchange(ROUTE_URL_CALLBACK);
    header("Location: " . ROUTE_URL_INDEX);
    exit;
});

Route::add('/logout', function() use ($auth0) {
    header("Location: " . $auth0->logout(ROUTE_URL_INDEX));
    exit;
});

Route::run('/');


