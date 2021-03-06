<div class="container" id="inscription">
    <div class="loader d-none toploading"></div>
    <div class="login-box">
        <div class="login-key">
            <i class="fa-solid fa-user-injured"></i>
        </div>
        <i class="d-none fas fa-spinner fa-spin fa-2x mt-2 text-light loading"></i>

        <div class="login-title">
            CRÉER UN PATIENT
        </div>

        <form class="login-form" id="creationPatient" method="POST">
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
                <input type="date" id="dateNaissance" class="text-light" autocomplete="off" required>
            </div>

            <div class="form-group">
                <input type="text" id="maladie" autocomplete="off">
                <label for="maladie"><i class="fa-solid fa-virus"></i> Maladie</label>
            </div>

            <div class="login-button">
                <button type="submit" class="btn btn-outline-primary">CRÉER</button>
            </div>
        </form>
    </div>
</div>