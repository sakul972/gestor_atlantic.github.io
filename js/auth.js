// Este script se ejecuta inmediatamente para proteger la página

// 1. Buscamos la llave en la memoria del navegador
const isAuthenticated = localStorage.getItem('crm_auth');

// 2. Si NO tiene la llave, lo expulsamos al login
if (isAuthenticated !== 'true') {
    window.location.replace('login.html');
}

// 3. Función global para cerrar sesión
function cerrarSesion() {
    // Borramos la llave
    localStorage.removeItem('crm_auth');
    // Lo enviamos al login
    window.location.replace('login.html');
}