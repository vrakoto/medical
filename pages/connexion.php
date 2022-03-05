<div class="container" id="accueil">
    <div class="login-box">
        <div class="login-key">
            <i class="fa-solid fa-user-doctor" aria-hidden="true"></i>
        </div>
        <i class="d-none fas fa-spinner fa-spin fa-2x mt-2 text-light loading"></i>

        <div class="login-title">
            CONNEXION
        </div>

        <form class="login-form" method="POST" id="connexion">
            <div class="form-group">
                <input type="text" id="username" autofocus autocomplete="off" required>
                <label for="username"><i class="fa-solid fa-fingerprint"></i> Identifiant</label>
            </div>
            
            <div class="form-group">
                <input type="password" id="password" autocomplete="off" required>
                <label for="password"><i class="fa-solid fa-key"></i> Mot de passe</label>
            </div>

            <div class="login-button d-flex align-items-center">
                <button class="btn btn-outline-primary" type="submit">SE CONNECTER</button>
                <a href="index.php?page=inscription" class="btn btn-outline-primary mx-2">INSCRIPTION</a>
            </div>
        </form>
    </div>
</div>