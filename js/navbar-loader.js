// Carga automática del navbar en todas las páginas
(function() {
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-container').innerHTML = data;
            
            // Inicializar funcionalidad del menú hamburguesa
            const hamburger = document.getElementById('hamburger');
            const navbarMenu = document.getElementById('navbarMenu');
            
            if (hamburger && navbarMenu) {
                // Toggle del menú hamburguesa
                hamburger.addEventListener('click', function() {
                    hamburger.classList.toggle('active');
                    navbarMenu.classList.toggle('active');
                });
                
                // Cerrar menú al hacer clic en un enlace
                const navLinks = navbarMenu.querySelectorAll('.navbar__link');
                navLinks.forEach(link => {
                    link.addEventListener('click', function() {
                        hamburger.classList.remove('active');
                        navbarMenu.classList.remove('active');
                    });
                });
                
                // Cerrar menú al hacer clic fuera
                document.addEventListener('click', function(event) {
                    const isClickInsideNav = navbarMenu.contains(event.target) || hamburger.contains(event.target);
                    if (!isClickInsideNav && navbarMenu.classList.contains('active')) {
                        hamburger.classList.remove('active');
                        navbarMenu.classList.remove('active');
                    }
                });
            }
        })
        .catch(error => console.error('Error cargando navbar:', error));
})();