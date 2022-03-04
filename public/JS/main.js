var request;
var idMedecin = localStorage.getItem('idMedecin');
$(function () {
    const url = window.location.href;

    function listePatients() {
        $.ajax({
            url: 'http://localhost:8000/listing/patient',
            data: 'idMedecin=' + idMedecin
        }).done((data) => {
            let items = [];
            $.each(data, function (key, val) {
                items.push("<tr>");
                items.push("<th scope='row'>" + key + "</th>");
                items.push("<td>" + val.nom + "</td>");
                items.push("<td>" + val.prenom + "</td>");
                items.push("<td>" + val.age + "</td>");
                items.push("<td>" + val.maladie + "</td>");
                items.push("<td>" + val.dateAjout + "</td>");
                items.push("</tr>");
            });

            $(".listePatients tbody").append(items);
            $(".loader").remove();
        });
    }

    function connexion() {
        const identifiant = $('#username').val();
        const mdp = $('#password').val();

        request = $.ajax({
            type: 'POST',
            url: 'http://localhost:8000/api/login',
            data: 'username=' + identifiant + '&password=' + mdp
        });
     
        request.done(function (datas, textStatus, jqXHR) {
            window.href.location = "index.php?page=listePatients";
        });
     
        request.fail(function (jqXHR, textStatus, errorThrown) {
            console.error(
                "Erreur d'authentification: "+
                textStatus, errorThrown
            );
        });
    }

    function inscriptionMedecin() {
        const id = $('#id').val();
        const nom = $('#nom').val();
        const prenom = $('#prenom').val();
        const mdp = $('#mdp').val();
        const mdp_c = $('#mdp').val();

        request = $.ajax({
            type: 'POST',
            url: 'http://localhost:8000/creation/medecin',
            data: 'username=' + id + '&nom=' + nom + '&prenom=' + prenom + '&mdp=' + mdp + '&mdp_confirm=' + mdp_c
        });
     
        request.done(function (datas, textStatus, jqXHR){
            //
        });
     
        request.fail(function (jqXHR, textStatus, errorThrown){
            console.error(
                "The following error occurred: "+
                textStatus, errorThrown
            );
        });
    }

    function inscritionPatient() {
        const nom = $('#nom').val();
        const prenom = $('#prenom').val();
        const dateNaissance = $('#dateNaissance').val();
        const maladie = $('#maladie').val();

        var noSpaceMaladie = maladie.replace(/\s+/g, '');
        var maladies = noSpaceMaladie.split(',');

        request = $.ajax({
            type: 'POST',
            url: 'http://localhost:8000/creation/patient',
            data: 'idMedecin=' + idMedecin + '&nom=' + nom + '&prenom=' + prenom + '&dateNaissance=' + dateNaissance + '&maladies=' + maladies
        });
     
        request.done(function (datas, textStatus, jqXHR){
            //
        });
     
        request.fail(function (jqXHR, textStatus, errorThrown){
            console.error(
                "The following error occurred: "+
                textStatus, errorThrown
            );
        });
    }

    function test() {
        $("#modifierPatient").last().append("<tr><td></td><td></td></tr>");
    }

    if (url.includes("page=listePatients")) {
        listePatients();
    }

    $('#connexion').click((e) => {
        connexion();
    });

    $('#btnInscription').click((e) => {
        inscriptionMedecin();
    });

    $('#btnInscriptionPatient').click((e) => {
        inscritionPatient();
    });

    $('#addMaladie').click((e) => {
        test();
    });
});