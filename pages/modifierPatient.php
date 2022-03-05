<div class="container">
    <div class="login-box">
        <div class="login-key">
            <i class="fa-solid fa-notes-medical"></i>
        </div>
        <i class="d-none fas fa-spinner fa-spin fa-2x mt-2 text-light loading"></i>

        <div class="login-title">
            MODIFIER LE PATIENT N° <span id="identifiantPatient"></span>
        </div>

        <div class="login-form">
            <table class="listePatients table table-bordered mt-3" id="modifierPatient">
                <thead>
                    <tr>
                        <th scope="col">Maladie</th>
                        <th scope="col">Description</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>

            <div class="login-key text-center">
                <i class="fa-solid fa-file-medical" id="addMaladie"></i>
            </div>

            <div class="login-button">
                <button class="btn btn-outline-primary" id="modification">MODIFIER</button>
                <button class="btn btn-outline-danger" id="suppression">SUPPRIMER LE PATIENT</button>
            </div>
        </div>
    </div>
</div>