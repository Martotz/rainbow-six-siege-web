/* =============================================
   WEAPONS PAGE - LÓGICA DEL ACORDEÓN
   ============================================= */

/**
 * Inicializa la funcionalidad del acordeón
 */
function initAccordion() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const accordionItem = header.parentElement;
            const isActive = accordionItem.classList.contains('active');

            // Cerrar todos los items abiertos
            document.querySelectorAll('.accordion-item').forEach(item => {
                item.classList.remove('active');
            });

            // Si el item no estaba activo, abrirlo
            if (!isActive) {
                accordionItem.classList.add('active');
            }
        });
    });
}

/**
 * Animación de entrada para los items del acordeón
 */
function animateAccordionItems() {
    const items = document.querySelectorAll('.accordion-item');
    
    items.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, 50);
        }, index * 100);
    });
}

// Ejecutar al cargar el DOM
document.addEventListener('DOMContentLoaded', () => {
    initAccordion();
    animateAccordionItems();
});