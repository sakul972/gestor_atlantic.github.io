document.addEventListener('DOMContentLoaded', function() {
    const formAgregarCliente = document.getElementById('formAgregarCliente');
    const tablaClientes = document.getElementById('tablaClientes');

    // 1. CARGAR CLIENTES AL ABRIR LA PÁGINA
    // 1. CARGAR CLIENTES (Con datos semilla si está vacío)
    function cargarClientes() {
        // Datos de ejemplo iniciales
        const datosIniciales = [
            { nombre: "Carlos Rodríguez", email: "carlos@email.com", telefono: "987654321", tipo: "VIP", nivelVip: "Platinum" },
            { nombre: "María González", email: "maria@email.com", telefono: "912345678", tipo: "Frecuente", nivelVip: "Gold" },
            { nombre: "Juan Martínez", email: "juan@email.com", telefono: "998877665", tipo: "Regular", nivelVip: "Bronze" }
        ];

        let clientesGuardados = JSON.parse(localStorage.getItem('listaClientes'));

        // Si el localStorage está vacío, guardamos los iniciales
        if (!clientesGuardados || clientesGuardados.length === 0) {
            localStorage.setItem('listaClientes', JSON.stringify(datosIniciales));
            clientesGuardados = datosIniciales;
        }

        tablaClientes.innerHTML = ''; 
        clientesGuardados.forEach(c => agregarFilaTabla(c));
    }

    // 2. FUNCIÓN PARA DIBUJAR LA FILA
    function agregarFilaTabla(c) {
        const fila = `
            <tr>
                <td>
                    <div class="d-flex align-items-center">
                        <div class="bg-light rounded-circle d-flex justify-content-center align-items-center text-primary fw-bold me-3" style="width: 40px; height: 40px;">${c.nombre.charAt(0).toUpperCase()}</div>
                        <div>
                            <h6 class="mb-0 fw-bold">${c.nombre}</h6>
                            <small class="text-muted">${c.tipo}</small>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="small fw-semibold">${c.email}</div>
                    <div class="small text-muted">${c.telefono}</div>
                </td>
                <td><span class="badge-vip vip-${c.nivelVip.toLowerCase()}">${c.nivelVip}</span></td>
                <td class="fw-bold">$0</td>
                <td>0</td>
                <td class="text-muted small">Hoy</td>
                <td><a href="#" class="btn btn-sm btn-light border text-primary fw-semibold">Ver Perfil</a></td>
            </tr>
        `;
        tablaClientes.insertAdjacentHTML('afterbegin', fila);
    }

    // 3. GUARDAR NUEVO CLIENTE
    if (formAgregarCliente) {
        formAgregarCliente.addEventListener('submit', function(event) {
            event.preventDefault();

            const nuevoCliente = {
                nombre: document.getElementById('nombreCliente').value,
                email: document.getElementById('emailCliente').value,
                telefono: document.getElementById('telefonoCliente').value,
                tipo: document.getElementById('tipoCliente').value,
                nivelVip: document.getElementById('nivelVipCliente').value
            };

            // Guardar en el array y en localStorage
            const lista = JSON.parse(localStorage.getItem('listaClientes')) || [];
            lista.push(nuevoCliente);
            localStorage.setItem('listaClientes', JSON.stringify(lista));

            agregarFilaTabla(nuevoCliente);
            bootstrap.Modal.getInstance(document.getElementById('modalAgregarCliente')).hide();
            formAgregarCliente.reset();
        });
    }

    cargarClientes(); // Ejecutamos al iniciar
});