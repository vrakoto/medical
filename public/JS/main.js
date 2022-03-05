var request;
// var idMedecin = localStorage.getItem('idMedecin');
var idMedecin = sessionStorage.getItem('idMedecin');
var tokenMedecin = sessionStorage.getItem('tokenMedecin');
$(function () {

    if (tokenMedecin) {
        $('nav').removeClass('d-none');
    }

    const url = window.location.href;

    function listePatients() {
        $.ajax({
            url: 'http://localhost:8000/listing/patient',
            data: 'tokenMedecin=' + tokenMedecin
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

        $(".loader").removeClass("d-none");
     
        request.done(function (datas, textStatus, jqXHR) {
            sessionStorage.setItem('tokenMedecin', datas.token);
            sessionStorage.setItem('idMedecin', datas.user);
            $('#message').modal('toggle');
            $('#message .modal-header').addClass("bg-success text-light");
            $('#message .modal-title').append("Connexion réussie !");

            setTimeout(function(){
                $('#message .modal-header').removeClass("bg-success");
                window.location.href = "index.php?page=listePatients";
            }, 3000);
        });
     
        request.fail(function (jqXHR, textStatus, errorThrown) {
            console.error(
                "Erreur d'authentification: "+
                textStatus, errorThrown
            );
            $('#message').modal('toggle');
            $('#message .modal-header').addClass("bg-danger");
            $('#message .modal-title').append("Erreur d'authentification");
            $(".loader").addClass("d-none");
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

        $('.loader').removeClass('d-none');
     
        request.done(function (datas, textStatus, jqXHR){
            $('#message').modal('toggle');
            $('#message .modal-header').addClass("bg-success text-light");
            $('#message .modal-title').text("Inscription terminé ! Vous pouvez désormais vous connecter.");
            
            setTimeout(function(){
                $('#message .modal-header').removeClass("bg-success");
                window.location.href = "index.php?page=connexion";
            }, 3000);
        });
     
        request.fail(function (jqXHR, textStatus, errorThrown){
            console.error(
                "The following error occurred: "+
                textStatus, errorThrown
            );
            $('#message').modal('toggle');
            $('#message .modal-header').addClass("bg-danger text-light");
            $('#message .modal-title').text("Erreur formulaire");
        });

        request.always(function () {
            $('.loader').addClass('d-none');
        })
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
            data: 'tokenMedecin=' + tokenMedecin + '&username=' + idMedecin + '&nom=' + nom + '&prenom=' + prenom + '&dateNaissance=' + dateNaissance + '&maladie=' + maladies
        });

        $('.loader').removeClass('d-none');
     
        request.done(function (datas, textStatus, jqXHR){
            $('#message').modal('toggle');
            $('#message .modal-header').addClass("bg-success text-light");
            $('#message .modal-title').text("Patient ajouté avec succès.");
        });
     
        request.fail(function (jqXHR, textStatus, errorThrown){
            $('#message').modal('toggle');
            $('#message .modal-header').addClass("bg-danger text-light");
            $('#message .modal-title').text("Erreur formulaire");
        });

        request.always(function () {
            $('.loader').addClass('d-none');
        })
    }

    function ajouterMaladie() {
        $("#modifierPatient").last().append("<tr><td></td><td></td></tr>");
    }

    function deconnexion() {
        sessionStorage.removeItem('tokenMedecin');
        sessionStorage.removeItem('idMedecin');
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

    $('#creationPatient').submit((e) => {
        e.preventDefault();
        inscritionPatient();
    });

    $('#addMaladie').click((e) => {
        ajouterMaladie();
    });

    $('#deconnexion').click((e) => {
        deconnexion();
    });
});