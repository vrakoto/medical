<?php
session_start();
$idMedecin = $_REQUEST['idMedecin'];

$_SESSION['id'] = $idMedecin;