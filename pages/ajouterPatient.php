<div class="container" id="inscription">
    <div class="loader d-none toploading"></div>
    <div class="login-box">
        <div class="login-key">
            <i class="fa-solid fa-user-injured"></i>
        </div>
        <div class="login-title">
            AJOUTER UN PATIENT
        </div>

        <div class="login-form" method="POST" action="index.php?page=ajouterPatient">
            <div class="form-group">
                <input type="text" id="nom" autofocus autocomplete="off" required>
                <label for="nom"><i class="fa-solid fa-id-card"></i> Nom</label>
            </div>

            <div class="form-group">
                <input type="text" id="prenom" autocomplete="off" required>
                <label for="prenom"><i class="fa-solid fa-id-card"></i> Prénom</label>
            </div>
            
            <div class="form-group">
                <p class="text-muted mb-0"><i class="fa-solid fa-calendar-days"></i> Date Naissance</p>
                <input type="date" id="dateNaissance" autocomplete="off" required>
            </div>

            <div class="form-group">
                <input type="text" id="maladie" autocomplete="off" required>
                <label for="maladie"><i class="fa-solid fa-virus"></i> Maladie</label>
            </div>

            <div class="login-button">
                <button class="btn btn-outline-primary" id="btnInscriptionPatient">CRÉER</button>
            </div>
        </div>
    </div>
</div>
