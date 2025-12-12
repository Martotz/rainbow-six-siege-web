/* =============================================
   OPERATORS PAGE - LÓGICA DE FILTRADO Y CARGA
   ============================================= */

// Elementos del DOM
const filterBtns = document.querySelectorAll('.filter-btn');
const operatorsGrid = document.querySelector('.operators__grid');

// Estado actual del filtro
let activeFilter = null;
let operatorsData = [];

/**
 * Carga los operadores desde el archivo JSON
 */
async function loadOperators() {
    try {
        const response = await fetch('data/operators.json');
        if (!response.ok) {
            throw new Error('Error al cargar operadores');
        }
        operatorsData = await response.json();
        renderOperators(operatorsData);
    } catch (error) {
        console.error('Error al cargar operadores:', error);
        operatorsGrid.innerHTML = '<p style="color: #fff; text-align: center;">Error al cargar los operadores.</p>';
    }
}

/**
 * Renderiza las tarjetas de operadores en el DOM
 * @param {Array} operators - Array de operadores
 */
function renderOperators(operators) {
    operatorsGrid.innerHTML = '';

    operators.forEach(operator => {
        const roleClass = operator.rol === 'ATACANTE' ? 'attacker' : 'defender';
        
        // Todos los operadores ahora van a plantilla-agente.html con su ID
        const linkHref = `plantilla-agente.html?id=${operator.id}`;
        
        // Crear el enlace contenedor
        const link = document.createElement('a');
        link.href = linkHref;
        link.className = 'operator-card-link';
        
        // Crear la tarjeta
        const card = document.createElement('article');
        card.className = `operator-card ${roleClass}`;
        card.setAttribute('data-role', roleClass);

        card.innerHTML = `
            <figure class="operator-card__figure">
                <img src="${operator.imagen}" alt="${operator.nombre}" class="operator-img">
            </figure>
            <div class="operator-info">
                <img src="R6_Imagenes/Icons - Operadores/${operator.nombre}.png" 
                     alt="Icono ${operator.nombre}" 
                     class="operator-icon"
                     onerror="this.style.display='none'">
                <h3 class="operator-name">${operator.nombre}</h3>
            </div>
        `;

        link.appendChild(card);
        operatorsGrid.appendChild(link);
    });
}

/**
 * Aplica filtro según el tipo seleccionado
 * @param {string} filterType - 'attackers' o 'defenders'
 */
function applyFilter(filterType) {
    const operatorCards = document.querySelectorAll('.operator-card');

    // Si se presiona el mismo filtro, se desactiva
    if (activeFilter === filterType) {
        clearFilter();
        return;
    }

    // Establecer filtro activo
    activeFilter = filterType;

    // Actualizar estado de botones
    updateButtonStates(filterType);

    // Filtrar tarjetas
    operatorCards.forEach(card => {
        const isAttacker = card.classList.contains('attacker');
        const isDefender = card.classList.contains('defender');

        if (
            (filterType === 'attackers' && isAttacker) ||
            (filterType === 'defenders' && isDefender)
        ) {
            card.classList.remove('hidden');
            card.classList.add('visible');
        } else {
            card.classList.add('hidden');
            card.classList.remove('visible');
        }
    });
}

/**
 * Limpia el filtro y muestra todas las tarjetas
 */
function clearFilter() {
    activeFilter = null;
    const operatorCards = document.querySelectorAll('.operator-card');

    // Remover clase activa de todos los botones
    filterBtns.forEach(btn => btn.classList.remove('filter-btn--active'));

    // Mostrar todas las tarjetas
    operatorCards.forEach(card => {
        card.classList.remove('hidden', 'visible');
    });
}

/**
 * Actualiza el estado visual de los botones
 * @param {string} activeFilterType - Tipo de filtro activo
 */
function updateButtonStates(activeFilterType) {
    filterBtns.forEach(btn => {
        const btnFilter = btn.getAttribute('data-filter');

        if (btnFilter === activeFilterType) {
            btn.classList.add('filter-btn--active');
        } else {
            btn.classList.remove('filter-btn--active');
        }
    });
}

/**
 * Inicializa los event listeners
 */
function initializeFilters() {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filterType = btn.getAttribute('data-filter');
            applyFilter(filterType);
        });
    });
}

/**
 * Inicializa la página
 */
async function init() {
    await loadOperators();
    initializeFilters();
}

// Ejecutar al cargar el DOM
document.addEventListener('DOMContentLoaded', init);