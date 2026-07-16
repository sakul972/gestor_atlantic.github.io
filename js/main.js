// Esperamos a que el HTML cargue
document.addEventListener("DOMContentLoaded", function() {
    
    // Lógica para el botón hamburguesa (Diseño Responsivo)
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.querySelector('.sidebar');
    
    if(menuToggle && sidebar) {
        menuToggle.addEventListener('click', function() {
            sidebar.classList.toggle('show-sidebar');
        });
    }
    
});