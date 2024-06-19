document.addEventListener('DOMContentLoaded', () => {
    const editButtons = document.querySelectorAll('.edit');
    const deleteButtons = document.querySelectorAll('.delete');

    editButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Editar usuario');
        });
    });

    deleteButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (confirm('¿Seguro que deseas eliminar este usuario?')) {
                alert('Usuario eliminado');
            }
        });
    });
});
