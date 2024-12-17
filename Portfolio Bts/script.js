function checkPassword() {
    const password = document.getElementById('password').value;
    const correctPassword = 'monmotdepasse'; // Change ici avec ton mot de passe

    if (password === correctPassword) {
        document.getElementById('document-content').style.display = 'block';
    } else {
        alert('Mot de passe incorrect');
    }
}
