<?php
$root = dirname(__DIR__) . DIRECTORY_SEPARATOR;
$pages = $root . 'pages' . DIRECTORY_SEPARATOR;
$elements = $root . 'elements' . DIRECTORY_SEPARATOR;

$page = $_REQUEST['page'] ?? 'accueil';

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
        if (isset($_POST['id'], $_POST['nom'], $_POST['prenom'], $_POST['mdp'], $_POST['mdp_c'])) {
            $errors = [];
            $id = htmlentities($_POST['id']);
            $nom = htmlentities($_POST['nom']);
            $prenom = htmlentities($_POST['prenom']);
            $mdp = htmlentities($_POST['mdp']);
            $mdp_c = htmlentities($_POST['mdp_c']);

            if (mb_strlen($id) <= 0) {
                $erreurs['id'] = 'Identifiant incorrect';
            }

            if (mb_strlen($nom) <= 0) {
                $erreurs['nom'] = 'Nom est incorrect';
            }

            if (mb_strlen($prenom) <= 0) {
                $erreurs['prenom'] = 'Prénom est incorrect';
            }

            if (mb_strlen($mdp) <= 3 || mb_strlen($mdp) >= 255 ) {
                $erreurs['mdp'] = 'Mot de passe trop court';
            }

            if ($mdp_c !== $mdp) {
                $erreurs['mdp_c'] = 'Les mots de passe ne coresspondent pas';
            }

            if (empty($errors)) {
                $erreur = 'Erreur formulaire';
            } else {
                header('Location:index.php?page=accueil');
                exit();
            }
        }
        require_once $pages . 'inscription.php';
    break;

    default:
        require_once $pages . '404.php';
    break;
}

require_once $elements . 'footer.php';