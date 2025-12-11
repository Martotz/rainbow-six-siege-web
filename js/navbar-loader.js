// Carga automática del navbar en todas las páginas
(function() {
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-container').innerHTML = data;
        })
        .catch(error => console.error('Error cargando navbar:', error));
})();