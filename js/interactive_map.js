// js/interactive_map.js

// ====================================================================================
//  BASE DE DATOS PREDEFINIDA CON TODA LA INFORMACIÓN
// ====================================================================================
const predefinedStateData = {
    "Chiapas": {
        ndvi: 0.82,
        nbr: 0.65,
        evi: 0.68,
        status: { text: "Very Dense and Healthy Vegetation", class: "alert-success" },
        analysis: `<h2>Ecosystem Analysis: Chiapas</h2>
                   <p>Dominated by high-altitude jungles and cloud forests, Chiapas displays exceptionally high plant biomass. Its climate is <strong>warm and humid</strong>, with heavy rains from May to October.</p>
                   <h3>Impact on Flora and Agriculture</h3>
                   <p>The high humidity favors crops like <strong>high-altitude coffee and cacao</strong>. Flowering is constant, offering continuous resources for pollinators.</p>
                   <h3>Key Pollinators</h3>
                   <ul><li>Melipona Bee (Native)</li><li>Blue Morpho Butterfly</li><li>Cinnamon-bellied Hummingbird</li></ul>
                   <small class="text-muted">Sources: CONABIO, Naturalista.mx</small>`,
        flora: [
            { src: "img/flora/chiapas_ceiba.jpg", alt: "Ceiba Tree" },
            { src: "img/flora/chiapas_orquidea.jpg", alt: "Orchid" },
            { src: "img/flora/chiapas_guayacan.jpg", alt: "Guayacan Tree" }
        ]
    },
    "Oaxaca": {
        ndvi: 0.65,
        nbr: 0.50,
        evi: 0.55,
        status: { text: "Diverse and Adapted Vegetation", class: "alert-info" },
        analysis: `<h2>Ecosystem Analysis: Oaxaca</h2>
                   <p>Oaxaca is a mosaic of ecosystems, from dry forests to temperate forests. Its climate varies from <strong>semi-arid to temperate</strong>, with a well-defined dry season from November to April.</p>
                   <h3>Impact on Flora and Agriculture</h3>
                   <p>Species like <strong>agave</strong> thrive here. The dry season concentrates the flowering of cacti, creating pulses of resources for pollinators like bats.</p>
                   <h3>Key Pollinators</h3>
                   <ul><li>Lesser Long-nosed Bat</li><li>Oaxaca Hummingbird (endemic)</li><li>Orchid Bees</li></ul>
                   <small class="text-muted">Sources: Institute of Biology (UNAM), SEMARNAT</small>`,
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
        status: { text: "Resilient Dry Forest Vegetation", class: "alert-warning" },
        analysis: `<h2>Ecosystem Analysis: Guerrero</h2>
                   <p>The low deciduous forest, which loses its leaves in the dry season, predominates. The climate is <strong>warm sub-humid</strong>. The vegetation recovers vigorously with the first rains.</p>
                   <h3>Impact on Flora and Agriculture</h3>
                   <p>Agriculture of <strong>corn, hibiscus (jamaica), and sesame</strong> depends on the rains. Mass flowering occurs at the end of the dry season, a critical moment for pollinators.</p>
                   <h3>Key Pollinators</h3>
                   <ul><li>'Cucu de Mamey' Bee</li><li>Mexican Sheartail Hummingbird</li><li>Native Butterflies</li></ul>
                   <small class="text-muted">Sources: UAGRO, CONABIO</small>`,
        flora: [
            { src: "img/flora/guerrero_calliandra.jpg", alt: "Calliandra" },
            { src: "img/flora/guerrero_agave_cupreata.jpg", alt: "Agave Cupreata" },
            { src: "img/flora/guerrero_bonete.jpg", alt: "Bonete Tree" }
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