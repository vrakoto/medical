<div class="container mt-5" id="listePatients">
    <h1>Liste des patients</h1>
    <table class="listePatients table table-bordered mt-3">
        <thead>
            <tr>
                <th scope="col">Identifiant</th>
                <th scope="col">Nom</th>
                <th scope="col">Prénom</th>
                <th scope="col">Age</th>
                <th scope="col">Maladie</th>
                <th scope="col">Date de naissance</th>
            </tr>
        </thead>
        <tbody class="test">
            <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>45</td>
                <td>Sida</td>
                <td>15/05/1990</td>
                <td><a href="index.php?page=modifierPatient&" class="btn btn-primary">Modifier</a></td>
            </tr>
        </tbody>
    </table>
    <i class="d-flex justify-content-center fas fa-spinner fa-spin fa-5x mt-5 loading"></i>
</div>