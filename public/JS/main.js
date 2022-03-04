$(function () {

    // $.getJSON("JS/patients.json", function (data) {
    //     let items = [];
    //     $.each(data, function (key, val) {
    //         items.push("<tr>");
    //         items.push("<th scope='row'>" + key + "</th>");
    //         items.push("<td>" + val.nom + "</td>");
    //         items.push("<td>" + val.prenom + "</td>");
    //         items.push("<td>" + val.age + "</td>");
    //         items.push("<td>" + val.maladie + "</td>");
    //         items.push("<td>" + val.dateAjout + "</td>");
    //         items.push("</tr>");
    //     });

    //     $(".listePatients tbody").append(items);
    // });

    $.ajax({
        url: 'http://localhost:8000/listing/patient'
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

    $('#btnInscription').click((e) => {
        const id = $('#id').val();
        const nom = $('#nom').val();
        const prenom = $('#prenom').val();
        const mdp = $('#mdp').val();
        const mdp_c = $('#mdp').val();
        $.ajax({
            method: 'post',
            url: 'http://localhost:8000/creation/medecin',
            data: 'username=' + id + '&nom=' + nom + '&prenom=' + prenom + '&mdp=' + mdp + '&mdp_confirm=' + mdp_c
        }).done((e) => {

        });
    });

    $('#btnInscriptionPatient').click((e) => {
        const nom = $('#nom').val();
        const prenom = $('#prenom').val();
        const age = $('#age').val();
        const maladie = $('#maladie').val();
        $.ajax({
            method: 'post',
            url: 'http://localhost:8000/creation/patient',
            data: 'nom=' + nom + '&prenom=' + prenom + '&age=' + age + '&maladie=' + maladie
        }).done((e) => {

        });
    })
})