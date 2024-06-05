// Función para cargar la barra de navegación
function cargarNavegacion() {
    const navigationContainer = document.getElementById('navigation-container');
    // Realizar una solicitud HTTP para cargar la barra de navegación desde un archivo HTML externo
    fetch('navigation.html')
        .then(response => response.text())
        .then(data => {
            navigationContainer.innerHTML = data;
        })
        .catch(error => console.error('Error al cargar la barra de navegación:', error));
}

// Función para mostrar y ocultar vistas
function mostrarVista(vistaId) {
    const contentContainer = document.getElementById('content-container');
    const vistas = {
        'crear-usuario': `<h2>Crear Usuario</h2><form id="crear-usuario-form">...</form>`,
        'editar-usuario': `<h2>Editar Usuario</h2><form id="editar-usuario-form">...</form>`,
        'eliminar-usuario': `<h2>Eliminar Usuario</h2><form id="eliminar-usuario-form">...</form>`,
        'crear-proyecto': `<h2>Crear Proyecto</h2><form id="crear-proyecto-form">...</form>`,
        'editar-proyecto': `<h2>Editar Proyecto</h2><form id="editar-proyecto-form">...</form>`,
        'eliminar-proyecto': `<h2>Eliminar Proyecto</h2><form id="eliminar-proyecto-form">...</form>`,
        'crear-tarea': `<h2>Crear Tarea</h2><form id="crear-tarea-form">...</form>`,
        'editar-tarea': `<h2>Editar Tarea</h2><form id="editar-tarea-form">...</form>`,
        'eliminar-tarea': `<h2>Eliminar Tarea</h2><form id="eliminar-tarea-form">...</form>`,
        'ver-usuarios': `<h2>Usuarios</h2><ul id="usuarios-list"></ul>`,
        'ver-proyectos': `<h2>Proyectos</h2><ul id="proyectos-list"></ul>`,
        'ver-tareas': `<h2>Tareas</h2><ul id="tareas-list"></ul>`
    };
    contentContainer.innerHTML = vistas[vistaId];
}

// Llamar a la función para cargar la navegación al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    cargarNavegacion();
    // Mostrar la vista inicial (por ejemplo, crear usuario)
    mostrarVista('crear-usuario');
});
