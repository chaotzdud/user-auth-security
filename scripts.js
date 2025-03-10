document.addEventListener('DOMContentLoaded', () => {
    // Cadastro
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = btoa(document.getElementById('password').value);

            localStorage.setItem('user', JSON.stringify({ username, password, lastAccess: new Date().toLocaleString(), failedAttempts: 0 }));
            alert('Usuário cadastrado com sucesso!');
            window.location.href = 'login.html';
        });
    }

    // Login
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('loginUsername').value;
            const password = btoa(document.getElementById('loginPassword').value);

            const user = JSON.parse(localStorage.getItem('user'));

                if (user && user.username === username && user.password === password) {
                    user.lastAccess = new Date().toLocaleString();
                    user.failedAttempts = 0;
                    localStorage.setItem('user', JSON.stringify(user));
                    window.location.href = 'dashboard.html';
                } else {
                    user.failedAttempts += 1;
                    localStorage.setItem('user', JSON.stringify(user));
                    alert('Credenciais inválidas!');
                }
        });
    }

    // Pós-login
    const userName = document.getElementById('userName');
    if (userName) {
        const user = JSON.parse(localStorage.getItem('user'));
        userName.textContent = user.username;
        document.getElementById('lastAccess').textContent = user.lastAccess;
        document.getElementById('failedAttempts').textContent = user.failedAttempts;
    }
});

// Logout
function logout() {
    window.location.href = 'index.html';
}
