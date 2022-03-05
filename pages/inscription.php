<div class="container" id="inscription">
    <div class="loader d-none toploading"></div>

    <div class="login-box">
        <div class="login-key">
            <i class="fa-solid fa-keyboard"></i>
        </div>
        <i class="d-none fas fa-spinner fa-spin fa-2x mt-2 text-light loading"></i>

        <div class="login-title">
            INSCRIPTION
        </div>

        <form class="login-form" method="POST" id="inscriptionMedecin">
        
            <div class="form-group">
                <input type="text" id="id" autofocus autocomplete="off" required>
                <label for="id"><i class="fa-solid fa-fingerprint"></i> Identifiant</label>
            </div>

            <div class="form-group">
                <input type="text" id="nom" autocomplete="off" required>
                <label for="nom"><i class="fa-solid fa-id-card"></i> Nom</label>
            </div>

            <div class="form-group">
                <input type="text" id="prenom" autocomplete="off" required>
                <label for="username"><i class="fa-solid fa-id-card"></i> Prénom</label>
            </div>
            
            <div class="form-group">
                <input type="password" id="mdp" autocomplete="off" required>
                <label for="mdp"><i class="fa-solid fa-key"></i> Mot de passe</label>
            </div>

            <div class="form-group">
                <input type="password" id="mdp_c" autocomplete="off" required>
                <label for="mdp_c"><i class="fa-solid fa-key"></i> Confirmer le mot de passe</label>
            </div>

            <div class="login-button">
                <button class="btn btn-outline-primary" type="submit">S'INSCRIRE</button>
                <a href="index.php?page=connexion" class="btn btn-outline-primary">SE CONNECTER</a>
            </div>
        </form>
    </div>
</div>