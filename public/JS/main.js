var request;
var idMedecin = sessionStorage.getItem('idMedecin');
var tokenMedecin = sessionStorage.getItem('tokenMedecin');
var urlPage = window.location.href;
$(function () {

    const laPage = urlPage.split('page=')[1];
    var access;
    var redirect;

    if (!tokenMedecin) {
        access = ["accueil", "connexion", "inscription"];
        redirect = 'index.php?page=accueil';
    } else {
        access = ["listePatients", "ajouterPatient", "modifierPatient"];
        redirect = 'index.php?page=listePatients';
        $('nav').removeClass('d-none');
        $('.navbar-brand').text(idMedecin);
    }
    
    if (!access.includes(laPage)) {
        window.location.href = redirect;
    }


    function listePatients() {
        $.ajax({
            url: 'http://localhost:8000/listing/patient',
            data: 'tokenMedecin=' + tokenMedecin
        }).done((data) => {
            if (data.length <= 0) {
                $('#statutListe').empty();
                $('#statutListe').append("Aucun patient.");
                $('.container').append("<a class='d-flex justify-content-center btn btn-primary' href='index.php?page=ajouterPatient'>Ajouter des patients</a>");
            } else {
                for (let i = 0; i < data.length; i++) {
                    const val = data[i];
                    $(".listePatients").last().append("<tr><th scope='row'>" + val.id + "</th> <td>" + val.nom + "</td> <td>" + val.prenom + "</td> <td>" + val.age + "</td> <td>" + val.maladie + "</td> <td>" + val.dateNaissance + "</td> <td> <a href='index.php?page=modifierPatient&id="+ val.id + "' class='btn btn-primary'>Modifier</a> </td> </tr>");
                }
            }

            $(".loading").remove();
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

        // pendant le chargement
        $(".loading").removeClass("d-none");
        $("#connexion").css({ filter: 'blur(5px)' });
        $('#connexion').css('pointer-events', 'none');


        request.done(function (datas, textStatus, jqXHR) {
            sessionStorage.setItem('tokenMedecin', datas.token);
            sessionStorage.setItem('idMedecin', datas.user);

            $('#message .modal-title').empty();
            $('#message').modal('toggle');
            $('#message .modal-header').addClass("bg-success text-light");
            $('#message .modal-title').append("Connexion réussie !");

            setTimeout(function () {
                $('#message .modal-header').removeClass("bg-success");
                window.location.href = "index.php?page=listePatients";
            }, 3000);
        });

        request.fail(function (jqXHR, textStatus, errorThrown) {
            $('#message .modal-title').empty();
            $('#message').modal('toggle');
            $('#message .modal-header').addClass("bg-danger text-light");
            $('#message .modal-title').append("Erreur d'authentification");
        });

        request.always(function () {
            $(".loading").addClass("d-none");
            $('#connexion').removeAttr('style');
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

        // pendant le chargement
        $(".loading").removeClass("d-none");
        $("#inscriptionMedecin").css({ filter: 'blur(5px)' });
        $('#inscriptionMedecin').css('pointer-events', 'none');

        request.done(function (datas, textStatus, jqXHR) {
            $('#message').modal('toggle');
            $('#message .modal-header').addClass("bg-success text-light");
            $('#message .modal-title').text("Inscription terminé ! Vous pouvez désormais vous connecter.");

            setTimeout(function () {
                $('#message .modal-header').removeClass("bg-success");
                window.location.href = "index.php?page=connexion";
            }, 3000);
        });

        request.fail(function (jqXHR, textStatus, errorThrown) {
            $('#message').modal('toggle');
            $('#message .modal-header').addClass("bg-danger text-light");
            $('#message .modal-title').text("Erreur formulaire");
        });

        request.always(function () {
            $('.loading').addClass('d-none');
            $('#inscriptionMedecin').removeAttr('style');
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

        // pendant le chargement
        $('.loading').removeClass('d-none');
        $('.login-title').empty();
        $('.login-title').text("CRÉATION PATIENT EN COURS ...");
        $("#creationPatient").css({ filter: 'blur(5px)' });
        $('#creationPatient').css('pointer-events', 'none');

        request.done(function (datas, textStatus, jqXHR) {
            $('#message').modal('toggle');
            $('#message .modal-header').addClass("bg-success text-light");
            $('#message .modal-title').text("Patient ajouté avec succès.");
        });

        request.fail(function (jqXHR, textStatus, errorThrown) {
            $('#message').modal('toggle');
            $('#message .modal-header').addClass("bg-danger text-light");
            $('#message .modal-title').text("Erreur formulaire");
        });

        request.always(function () {
            $('.loading').addClass('d-none');
            $('.login-title').empty();
            $('.login-title').text("CRÉER UN PATIENT");
            $('#creationPatient').removeAttr('style');
        });
    }

    function ajouterMaladie() {
        $("#modifierPatient").last().append("<tr><td class='laMaladie' contenteditable></td><td class='laDescription' contenteditable></td></tr>");
    }

    function modifierPatient() {
        var idPatient = urlPage.replace(/\D/g, ""); // recupère only number from string

        var infos = [];
        const lesMaladies = $('.laMaladie');
        const lesDescriptions = $('.laDescription');

        for (let i = 0; i < lesMaladies.length; i++) {
            const maladie = $(lesMaladies[i]).text();
            const description = $(lesDescriptions[i]).text();

            infos.push({maladie: maladie, description: description});
        }

        const m = JSON.stringify(infos);

        request = $.ajax({
            type: 'POST',
            url: 'http://localhost:8000/modification/patient',
            data: 'medecinToken=' + tokenMedecin + '&idPatient=' + idPatient + '&lesMaladies=' + m
        });

        // pendant le chargement
        $('.loading').removeClass('d-none');
        $(".login-form").css({ filter: 'blur(5px)' });
        $('.login-form').css('pointer-events', 'none');

        request.done(function (datas, textStatus, jqXHR) {
            $('#message').modal('toggle');
            $('#message .modal-header').addClass("bg-success text-light");
            $('#message .modal-title').text("Modification terminée.");
        });

        request.fail(function (jqXHR, textStatus, errorThrown) {
            $('#message').modal('toggle');
            $('#message .modal-header').addClass("bg-danger text-light");
            $('#message .modal-title').text("Erreur modification");
        });

        request.always(function () {
            $('.loading').addClass('d-none');
            $('.login-form').removeAttr('style');
        });
    }

    function supprimerPatient() {
        var idPatient = urlPage.replace(/\D/g, ""); // recupère only number from string

        request = $.ajax({
            type: 'POST',
            url: 'http://localhost:8000/modification/patient/suppression',
            data: 'medecinToken=' + tokenMedecin + '&idPatient=' + idPatient
        });

        // pendant le chargement
        $('.loading').removeClass('d-none');
        $(".login-form").css({ filter: 'blur(5px)' });
        $('.login-form').css('pointer-events', 'none');

        request.done(function (datas, textStatus, jqXHR) {
            $('#message').modal('toggle');
            $('#message .modal-header').addClass("bg-success text-light");
            $('#message .modal-title').text("Patient supprimé.");

            setTimeout(function () {
                $('#message .modal-header').removeClass("bg-success");
                window.location.href = "index.php?page=listePatients";
            }, 3000);
        });

        request.fail(function (jqXHR, textStatus, errorThrown) {
            $('#message').modal('toggle');
            $('#message .modal-header').addClass("bg-danger text-light");
            $('#message .modal-title').text("Erreur suppression");
        });

        request.always(function () {
            $('.loading').addClass('d-none');
            $('.login-form').removeAttr('style');
        });
    }

    function getMaladiesPatient() {
        const idPatient = urlPage.replace(/\D/g, "");
        $('#identifiantPatient').empty();
        $('#identifiantPatient').append(idPatient);

        request = $.ajax({
            type: 'POST',
            url: 'http://localhost:8000/modification/patient/recuperation',
            data: 'tokenMedecin=' + tokenMedecin + '&idPatient=' + idPatient
        });

        $('.loading').removeClass("d-none");

        request.done(function (datas, textStatus, jqXHR) {
            datas.forEach(element => {
                console.log(element);
                $("#modifierPatient").last().append("<tr><td class='laMaladie' contenteditable>" + element.maladie + "</td><td class='laDescription' contenteditable>" + element.description + "</td></tr>");
            });
        });

        request.fail(function (jqXHR, textStatus, errorThrown) {
            $('#message').modal('toggle');
            $('#message .modal-header').addClass("bg-danger text-light");
            $('#message .modal-title').text("Erreur récupération maladies");
        });

        request.always(function () {
            $('.loading').addClass('d-none');
        })
    }

    function deconnexion() {
        sessionStorage.removeItem('tokenMedecin');
        sessionStorage.removeItem('idMedecin');
    }

    if (urlPage.includes("page=listePatients")) {
        $('.link-listePatients').addClass('active');
        listePatients();
    } else if (urlPage.includes("page=modifierPatient")) {
        getMaladiesPatient();
    } else if (urlPage.includes("page=ajouterPatient")) {
        $('.link-ajouterPatient').addClass('active');
    }

    $('#connexion').submit((e) => {
        e.preventDefault();
        connexion();
    });

    $('#inscriptionMedecin').submit((e) => {
        e.preventDefault();
        inscriptionMedecin();
    });

    $('#creationPatient').submit((e) => {
        e.preventDefault();
        inscritionPatient();
    });

    $('#addMaladie').click((e) => {
        ajouterMaladie();
    });

    $('#modification').click((e) => {
        modifierPatient();
    });

    $('#suppression').click((e) => {
        supprimerPatient();
    })

    $('#deconnexion').click((e) => {
        deconnexion();
    });
});