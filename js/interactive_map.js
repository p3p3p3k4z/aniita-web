// js/interactive_map.js

// ====================================================================================
//  BASE DE DATOS PREDEFINIDA CON TODA LA INFORMACIÓN
// ====================================================================================
const predefinedStateData = {
    "Chiapas": {
        ndvi: 0.82,
        nbr: 0.65,
        evi: 0.68,
        status: { text: "Vegetación Muy Densa y Saludable", class: "alert-success" },
        analysis: `<h2>Análisis del Ecosistema: Chiapas</h2>
                   <p>Dominado por selvas altas y bosques de niebla, Chiapas muestra una biomasa vegetal excepcionalmente alta. Su clima es <strong>cálido y húmedo</strong>, con fuertes lluvias de mayo a octubre.</p>
                   <h3>Impacto en Flora y Agricultura</h3>
                   <p>La alta humedad favorece cultivos como <strong>café de altura y cacao</strong>. La floración es constante, ofreciendo recursos continuos para los polinizadores.</p>
                   <h3>Polinizadores Clave</h3>
                   <ul><li>Abeja Melipona (Nativa)</li><li>Mariposa Morfo Azul</li><li>Colibrí Vientre Canelo</li></ul>
                   <small class="text-muted">Fuentes: CONABIO, Naturalista.mx</small>`,
        flora: [
            { src: "img/flora/chiapas_ceiba.jpg", alt: "Árbol de Ceiba" },
            { src: "img/flora/chiapas_orquidea.jpg", alt: "Orquídea" },
            { src: "img/flora/chiapas_guayacan.jpg", alt: "Árbol de Guayacán" }
        ]
    },
    "Oaxaca": {
        ndvi: 0.65,
        nbr: 0.50,
        evi: 0.55,
        status: { text: "Vegetación Diversa y Adaptada", class: "alert-info" },
        analysis: `<h2>Análisis del Ecosistema: Oaxaca</h2>
                   <p>Oaxaca es un mosaico de ecosistemas, desde selvas secas hasta bosques templados. Su clima varía de <strong>semiárido a templado</strong>, con una temporada seca bien definida de noviembre a abril.</p>
                   <h3>Impacto en Flora y Agricultura</h3>
                   <p>Especies como el <strong>agave</strong> prosperan aquí. La temporada seca concentra la floración de cactáceas, creando pulsos de recursos para polinizadores como los murciélagos.</p>
                   <h3>Polinizadores Clave</h3>
                   <ul><li>Murciélago Magueyero Menor</li><li>Colibrí Oaxaqueño (endémico)</li><li>Abejas de las Orquídeas</li></ul>
                   <small class="text-muted">Fuentes: Instituto de Biología (UNAM), SEMARNAT</small>`,
        flora: [
            { src: "img/flora/oaxaca_agave.jpg", alt: "Agave" },
            { src: "img/flora/oaxaca_copal.jpg", alt: "Copal" },
            { src: "img/flora/oaxaca_dalia.jpg", alt: "Dalia" }
        ]
    },
    "Guerrero": {
        ndvi: 0.58,
        nbr: 0.48,
        evi: 0.51,
        status: { text: "Vegetación Resiliente de Selva Seca", class: "alert-warning" },
        analysis: `<h2>Análisis del Ecosistema: Guerrero</h2>
                   <p>Predomina la selva baja caducifolia, que pierde sus hojas en la temporada seca. El clima es <strong>cálido subhúmedo</strong>. La vegetación se recupera vigorosamente con las primeras lluvias.</p>
                   <h3>Impacto en Flora y Agricultura</h3>
                   <p>La agricultura de <strong>maíz, jamaica y ajonjolí</strong> depende de las lluvias. Ocurre una floración masiva al final de la temporada seca, un momento crítico para los polinizadores.</p>
                   <h3>Polinizadores Clave</h3>
                   <ul><li>Abeja 'Cucú de Mamey'</li><li>Colibrí Tijereta Mexicano</li><li>Mariposas Nativas</li></ul>
                   <small class="text-muted">Fuentes: UAGRO, CONABIO</small>`,
        flora: [
            { src: "img/flora/guerrero_calliandra.jpg", alt: "Calliandra (Cabellito de Ángel)" },
            { src: "img/flora/guerrero_agave_cupreata.jpg", alt: "Agave Cupreata (Maguey Papalote)" },
            { src: "img/flora/guerrero_bonete.jpg", alt: "Árbol de Bonete" }
        ]
    }
};

// --- LÓGICA PRINCIPAL DEL MAPA ---
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. DIBUJAR EL MAPA EN LA PÁGINA
    const mapaContainer = document.getElementById('estados-mexico');
    if (typeof datos !== 'undefined') {
        mapaContainer.innerHTML = datos;
    } else {
        console.error("Error: La variable 'datos' con el SVG del mapa no se encontró. Asegúrate de que el archivo 'data_mapa.js' esté cargado antes que este script.");
        return;
    }

    // 2. AÑADIR LA INTERACTIVIDAD (EVENTOS DE CLIC)
    // Buscamos los estados DESPUÉS de haberlos dibujado
    const allStates = document.querySelectorAll('path[data-estado]');

    allStates.forEach(statePath => {
        statePath.addEventListener('click', () => {
            const stateName = statePath.getAttribute('data-estado');
            const data = predefinedStateData[stateName];
            
            // Lógica para mantener el estado activo en azul
            allStates.forEach(s => s.classList.remove('active'));
            statePath.classList.add('active');

            if (data) {
                // Si encontramos datos para el estado, llenamos el modal
                
                // Parte 1: Llenar los datos básicos y el análisis
                document.getElementById('stateName').textContent = stateName;
                document.getElementById('ndviValue').textContent = data.ndvi || '--';
                document.getElementById('nbrValue').textContent = data.nbr || '--';
                document.getElementById('eviValue').textContent = data.evi || '--';
                
                const vegetationStatusDiv = document.getElementById('vegetationStatus');
                vegetationStatusDiv.textContent = data.status.text;
                vegetationStatusDiv.className = `alert ${data.status.class}`;
                
                document.getElementById('analysisResult').innerHTML = data.analysis;
                
                // Parte 2: Llenar las imágenes de la flora
                const floraImagesContainer = document.getElementById('floraImages');
                floraImagesContainer.innerHTML = ''; // Limpiamos imágenes anteriores

                if (data.flora && data.flora.length > 0) {
                    data.flora.forEach(item => {
                        const imgDiv = document.createElement('div');
                        imgDiv.className = 'text-center mx-2 my-2';
                        imgDiv.style.width = '100px';

                        const imgElement = document.createElement('img');
                        imgElement.src = item.src;
                        imgElement.alt = item.alt;
                        imgElement.className = 'img-fluid rounded-circle border border-info p-1';
                        imgElement.style.width = '80px';
                        imgElement.style.height = '80px';
                        imgElement.style.objectFit = 'cover';

                        const imgCaption = document.createElement('p');
                        imgCaption.className = 'mt-1 mb-0 small';
                        imgCaption.textContent = item.alt;

                        imgDiv.appendChild(imgElement);
                        imgDiv.appendChild(imgCaption);
                        floraImagesContainer.appendChild(imgDiv);
                    });
                } else {
                    floraImagesContainer.innerHTML = '<p class="text-muted text-center w-100">No hay imágenes de flora disponibles.</p>';
                }

                // Parte 3: Mostrar el modal
                $('#stateModal').modal('show');
                
            } else {
                // Si no hay datos predefinidos para ese estado
                alert(`Información para "${stateName}" no disponible.`);
            }
        });
    });
});