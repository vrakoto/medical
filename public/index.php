<?php
session_start();
$root = dirname(__DIR__) . DIRECTORY_SEPARATOR;
$pages = $root . 'pages' . DIRECTORY_SEPARATOR;
$elements = $root . 'elements' . DIRECTORY_SEPARATOR;

$page = $_REQUEST['page'] ?? 'accueil';

$sid = $_SESSION['id'] ?? '';

/* $access = ['accueil', 'inscription'];
if (!empty($sid)) {
    $access = ['listePatients', 'ajouterPatient', 'deconnexion'];
}

if (!in_array($page, $access)) {
    header('Location:index.php?page=accueil');
    exit();
} */


require_once $elements . 'header.php';

switch ($page) {
    case 'accueil':
        require_once $pages . 'accueil.php';
    break;

    case 'listePatients':
        require_once $pages . 'medecin.php';
    break;

    case 'ajouterPatient':
        require_once $pages . 'ajouterPatient.php';
    break;

    case 'inscription':
        require_once $pages . 'inscription.php';
    break;

    case 'deconnexion':
        unset($_SESSION['id']);
        header('Location:index.php?page=accueil');
        exit();
    break;

    default:
        require_once $pages . '404.php';
    break;
}

require_once $elements . 'footer.php';