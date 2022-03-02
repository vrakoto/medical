$(function() {
    
    function btnInscription() {
        const erreurs = [];
        const id = $('#id').val();
        const nom = $('#nom').val();        
        const prenom = $('#prenom').val();        
        const mdp = $('#mdp').val();        
        const mdp_c = $('#mdp_c').val();
        
        if (id.length <= 0) {
            erreurs['id'] = 'id incorrect';
        }

        if (nom.length <= 0) {
            erreurs['nom'] = 'nom incorrect';
        }

        if (prenom.length <= 0) {
            erreurs['prenom'] = 'prenom incorrect';
        }

        if (mdp.length < 3) {
            erreurs['mdp'] = 'mot de passe incorrect';
        }

        if (mdp_c != mdp) {
            erreurs['mdp_c'] = 'les mots de passe ne correspondent pas';
        }

        if (erreurs.length === 0) {
            console.log("ok");
        } else {
            console.log("des erreurs");
        }
    }

    $('#btnInscription').on('click', function (e) {
        btnInscription();
    });
    
});