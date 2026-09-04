document.getElementById('search-input').addEventListener('input', filtroBusqueda);

function filtroBusqueda() {
    const texto = document.getElementById('search-input').value.toLowerCase();
    const tarjetas = document.querySelectorAll('.card');

    tarjetas.forEach(tarjeta => {
        if (filtroAnimalRaza(tarjeta, texto)) {
            tarjeta.style.display = "block";
        } else {
            tarjeta.style.display = "none";
        }
    });
}

function filtroAnimalRaza(elemento, busqueda) {
    if (busqueda === "") return true;
    const nombre = elemento.getAttribute('data-animal').toLowerCase();
    return nombre.includes(busqueda);
}