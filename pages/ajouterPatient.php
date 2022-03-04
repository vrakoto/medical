<div class="container" id="inscription">
    <div class="login-box">
        <div class="login-key">
            <i class="fa-solid fa-user-injured"></i>
        </div>
        <div class="login-title">
            AJOUTER UN PATIENT
        </div>

        <div class="login-form" method="POST" action="index.php?page=ajouterPatient">
            <div class="form-group">
                <input type="text" id="nom" autocomplete="off" required>
                <label for="nom"><i class="fa-solid fa-id-card"></i> Nom</label>
            </div>

            <div class="form-group">
                <input type="text" id="prenom" autocomplete="off" required>
                <label for="prenom"><i class="fa-solid fa-id-card"></i> Prénom</label>
            </div>
            
            <div class="form-group">
                <input type="text" id="age" autocomplete="off" required>
                <label for="age"><i class="fa-solid fa-calendar-days"></i> Age</label>
            </div>

            <div class="form-group">
                <input type="text" id="maladie" autocomplete="off" required>
                <label for="maladie"><i class="fa-solid fa-virus"></i> Maladie</label>
            </div>

            <div class="login-button">
                <button class="btn btn-outline-primary" id="btnInscription">CRÉER</button>
            </div>
        </div>
    </div>
</div>
<button class="ajax">btn</button>
