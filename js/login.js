// Esperamos a que todo el HTML cargue antes de ejecutar la lógica
document.addEventListener('DOMContentLoaded', function() {
    
    // Seleccionamos el formulario
    const loginForm = document.getElementById('loginForm');

    // Verificamos que el formulario exista en la página actual
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            // 1. Evitamos que la página se recargue
            event.preventDefault(); 

            // 2. Capturamos lo que el usuario escribió
            const email = document.getElementById('emailInput').value;
            const password = document.getElementById('passwordInput').value;
            const errorDiv = document.getElementById('loginError');

            // 3. Validamos contra las credenciales de prueba
            // 3. Validamos contra las credenciales de prueba
            if (email === 'admin@atlanticcasino.com' && password === '123456') {
                
                // --- NUEVO: Guardamos la sesión en el navegador ---
                localStorage.setItem('crm_auth', 'true'); 
                
                // Lo enviamos al Dashboard
                window.location.href = 'index.html';
                
            } else {
                // Si es incorrecto, inyectamos un mensaje de alerta rojo
                errorDiv.innerHTML = `
                    <div class="alert alert-danger p-2 small mt-3 mb-0 border-0 d-flex align-items-center" style="background-color: rgba(220, 53, 69, 0.1); color: #ff6b6b;">
                        <i class="bi bi-exclamation-triangle-fill me-2 fs-5"></i>
                        <span>Credenciales incorrectas. Por favor, verifica tu usuario o contraseña.</span>
                    </div>
                `;
            }
        });
    }
});