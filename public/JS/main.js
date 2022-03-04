$(function () {
    $.getJSON("JS/patients.json", function (data) {
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
    });
    $(".ajax").click((e)=>{
        $.ajax({
            url: "http://localhost:8000/listing/patient",
        }).done((e)=>{
            console.log(e)
        })
    })
})