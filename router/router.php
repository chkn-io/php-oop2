<?php
require_once('../class/class.accounts.php');
require_once('../class/class.messages.php');
$accounts = new Accounts;
$messages = new Messages;

if($_GET['ind'] == 'login'){
    echo $accounts->login();
}

if($_GET['ind'] == 'send'){
    echo $messages->send();
}

if($_GET['ind'] == 'refresh'){
    echo $messages->refresh();
}
