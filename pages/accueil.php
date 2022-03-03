<div class="container" id="accueil">
    <div class="login-box">
        <div class="login-key">
            <i class="fa-solid fa-user-doctor" aria-hidden="true"></i>
        </div>
        <div class="login-title">
            DOCTOR PANEL
        </div>

        <form class="login-form" method="POST" action="index.php?page=accueil">
            <div class="form-group">
                <input type="text" id="username" autofocus autocomplete="off" required>
                <label for="username"><i class="fa-solid fa-fingerprint"></i> Identifiant</label>
            </div>
            
            <div class="form-group">
                <input type="password" id="password" autocomplete="off" required>
                <label for="password"><i class="fa-solid fa-key"></i> Mot de passe</label>
            </div>

            <div class="login-button">
                <button class="btn btn-outline-primary" type="submit">SE CONNECTER</button>
                <a href="index.php?page=inscription" class="btn btn-outline-primary">INSCRIPTION</a>
            </div>
        </form>
    </div>
</div>
<div class="ajax">Btn</div>