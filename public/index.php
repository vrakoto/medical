<?php
session_start();
$root = dirname(__DIR__) . DIRECTORY_SEPARATOR;
$pages = $root . 'pages' . DIRECTORY_SEPARATOR;
$elements = $root . 'elements' . DIRECTORY_SEPARATOR;

$page = $_REQUEST['page'] ?? 'accueil';

require_once $elements . 'header.php';

switch ($page) {
    case 'accueil':
        require_once $pages . 'accueil.php';
    break;

    case 'connexion':
        require_once $pages . 'connexion.php';
    break;

    case 'listePatients':
        require_once $pages . 'listePatients.php';
    break;

    case 'ajouterPatient':
        require_once $pages . 'ajouterPatient.php';
    break;

    case 'modifierPatient':
        require_once $pages . 'modifierPatient.php';
    break;

    case 'inscription':
        require_once $pages . 'inscription.php';
    break;

    default:
        require_once $pages . '404.php';
    break;
}

require_once $elements . 'footer.php';