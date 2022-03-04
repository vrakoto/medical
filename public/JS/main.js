var request;
var idMedecin = localStorage.getItem('idMedecin');
$(function () {
    const url = window.location.href;

    if (url.includes("page=listePatients")) {
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

    $('#connexion').click((e) => {
        const identifiant = $('#username').val();
        const mdp = $('#mdp').val();

        request = $.ajax({
            type: 'POST',
            url: 'http://localhost:8000/api/login',
            data: 'identifiant=' + identifiant + '&mdp=' + mdp
        });
     
        request.done(function (datas, textStatus, jqXHR){
            localStorage.setItem('idMedecin', datas);
        });
     
        request.fail(function (jqXHR, textStatus, errorThrown){
            console.error(
                "Erreur d'authentification: "+
                textStatus, errorThrown
            );
        });

        /* request = $.ajax({
            type: 'GET',
            url: 'JS/idConnecte.php',
            data: 'idMedecin=' + identifiant
        });
     
        request.done(function (datas, textStatus, jqXHR) {
            localStorage.setItem('idMedecin', identifiant);
            window.location.href= "index.php?page=listePatients";
        });
     
        request.fail(function (jqXHR, textStatus, errorThrown){
            console.error(
                "Erreur d'authentification: "+
                textStatus, errorThrown
            );
        }); */
    });

    $('#btnInscription').click((e) => {
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
    });

    $('#btnInscriptionPatient').click((e) => {
        const idMedecin = localStorage.getItem('idMedecin');
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

    });
});