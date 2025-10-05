document.addEventListener('DOMContentLoaded', () => {
    const stateButtons = document.querySelectorAll('.region-btn');
    const modelViewer = document.getElementById('island-viewer');
    const designLegend = document.getElementById('design-legend');

    // ====================================================================================
    //  NUESTRA NUEVA "BASE DE DATOS" CON LA FICHA TÉCNICA COMPLETA
    // ====================================================================================
const stateData = {
    "Oaxaca": {
        modelSrc: "modelos/isla_oaxaca.glb",
        infoCompleta: {
            titulo: "Comprehensive Pollinator Island Proposal – Oaxaca",
            contexto: {
                ubicacion: "Oaxaca, Mexico",
                climas: "Temperate sub-humid, dry and humid tropical.",
                usosAgricolas: "Corn, coffee, agave, fruit trees, vegetables.",
                reto: "Loss of pollinators due to deforestation, agrochemicals, and climate change."
            },
            dosel: {
                titulo: "Canopy Layer – Trees",
                beneficios: "Carbon capture, soil restoration, wildlife refuge, support for other plants.",
                especies: [
                    { nombre: "Tepehuaje", cientifico: "Lysiloma acapulcense", funcion: "Nitrogen fixer, shade, flowering for bees." },
                    { nombre: "Mesquite", cientifico: "Prosopis spp.", funcion: "Drought resilient, improves soil, abundant nectar." },
                    { nombre: "Guaje", cientifico: "Leucaena leucocephala", funcion: "Edible, prolonged flowering, good for degraded soils." },
                    { nombre: "Copal", cientifico: "Bursera spp.", funcion: "Provides nectar, cultural resin, food for bees." },
                    { nombre: "Guava", cientifico: "Psidium guajava", funcion: "Fruit tree, flowers pollinated by bees and bats." },
                    { nombre: "Black Sapote", cientifico: "Diospyros digyna", funcion: "Fruit tree, shade, food, and shelter." }
                ]
            },
            sotobosque: {
                titulo: "Understory Layer – Shrubs and Herbaceous Plants",
                beneficios: "Floral diversity, biological pest control, support for specialized pollinators.",
                especies: [
                    { nombre: "Mexican Sage", cientifico: "", funcion: "Attractive flowering for hummingbirds and bees." },
                    { nombre: "Scarlet Dahlia", cientifico: "Mexico's national flower", funcion: "Visual attraction, abundant nectar." },
                    { nombre: "Lantana", cientifico: "Lantana camara", funcion: "Prolonged flowering, drought resistant." },
                    { nombre: "Plumeria", cientifico: "Plumeria rubra", funcion: "Frequently visited by butterflies and hummingbirds." },
                    { nombre: "Bougainvillea", cientifico: "Bougainvillea spectabilis", funcion: "Resistant, shelter for insects, flowers almost all year." }
                ]
            },
            coberturaSuelo: {
                titulo: "Ground Cover",
                beneficios: "Protect the soil, retain moisture, increase drought resilience.",
                especies: [
                    { nombre: "Marigold", cientifico: "Tagetes erecta", funcion: "Pollinators + natural pest control (nematicide)." },
                    { nombre: "Sulfur Cosmos", cientifico: "Cosmos sulphureus", funcion: "Frequently visited by bees and butterflies." },
                    { nombre: "Wild Basil", cientifico: "Ocimum micranthum", funcion: "Aroma, nectar, natural repellent." },
                    { nombre: "Zinnia", cientifico: "Mexican wild flower", funcion: "Long-lasting flower, visited by butterflies and bees." }
                ]
            },
            polinizadores: {
                titulo: "Key Pollinators",
                especies: [
                    { nombre: "Melipona Bee", cientifico: "Melipona beecheii", rol: "Native stingless bee, ideal for agriculture." },
                    { nombre: "European Honey Bee", cientifico: "Apis mellifera", rol: "Generalist pollinator." },
                    { nombre: "Monarch Butterfly", cientifico: "Danaus plexippus", rol: "Migratory, pollinates wildflowers." },
                    { nombre: "Local Hummingbirds", cientifico: "Trochilidae spp.", rol: "Pollinators of tubular flowers." }
                ]
            },
            auxiliares: {
                titulo: "Beneficial Insects",
                especies: [
                    { nombre: "Ladybugs", cientifico: "Coccinellidae", funcion: "Biological control of aphids." },
                    { nombre: "Lacewings", cientifico: "Chrysopidae", funcion: "Predators of agricultural pests." },
                    { nombre: "Dung Beetles", cientifico: "", funcion: "Nutrient recycling and soil improvement." }
                ]
            },
            infraestructura: {
                titulo: "Additional Infrastructure",
                elementos: [
                    "<strong>Insect hotel:</strong> Drilled logs, reeds, clay.",
                    "<strong>Water harvesting system:</strong> Gutters and cistern to maintain humidity.",
                    "<strong>Composting area:</strong> Use of pruning and agricultural waste."
                ]
            }
        }
    },
    "Chiapas": {
        modelSrc: "modelos/isla_chiapas.glb",
        infoCompleta: {
            titulo: "Pollinator Island Proposal – Chiapas",
            contexto: {
                ubicacion: "Chiapas, Mexico.",
                climas: "Humid tropical, humid temperate, low and high jungle.",
                usosAgricolas: "Coffee, cocoa, banana, corn, sugarcane, tropical fruits.",
                reto: "Deforestation, loss of pollinators, intensive agriculture."
            },
            dosel: {
                titulo: "Canopy Layer – Medium and Large Trees",
                beneficios: "Carbon capture, soil restoration, wildlife refuge, support for other plants and pollinators.",
                especies: [
                    { nombre: "Ceiba", cientifico: "Ceiba pentandra", funcion: "Emblematic tree, shade, wildlife refuge, flowers for large pollinators." },
                    { nombre: "Cacao", cientifico: "Theobroma cacao", funcion: "Constant flowering, food for bees and pollinating bats." },
                    { nombre: "Guayacan", cientifico: "Tabebuia spp.", funcion: "Showy flowering, attracts bees and hummingbirds." },
                    { nombre: "Mango", cientifico: "Mangifera indica", funcion: "Fruit tree, flowers and fruits attractive to wildlife and pollinators." },
                    { nombre: "Tzalam", cientifico: "Lysiloma latisiliquum", funcion: "Nitrogen fixer, shade, nectar source for bees." }
                ]
            },
            sotobosque: {
                titulo: "Understory Layer – Shrubs and herbaceous plants",
                beneficios: "Floral diversity, shelter for specialized pollinators and butterflies, staggered flowering.",
                especies: [
                    { nombre: "Chiapas Sage", cientifico: "Salvia chiapensis", funcion: "Flowering for local hummingbirds and bees." },
                    { nombre: "Jungle Geranium", cientifico: "Ixora coccinea", funcion: "Attracts pollinators, long-lasting flowering." },
                    { nombre: "Hibiscus", cientifico: "Hibiscus rosa-sinensis", funcion: "Showy flowering, nectar for bees and hummingbirds." },
                    { nombre: "Heliconia", cientifico: "Heliconia spp.", funcion: "Tubular flowers, important for hummingbirds." },
                    { nombre: "Achiote", cientifico: "Bixa orellana", funcion: "Prolonged flowering, useful seeds, attracts insects." }
                ]
            },
            coberturaSuelo: {
                titulo: "Ground Cover – Grasses and creeping flowers",
                beneficios: "Soil protection, moisture retention, stable microclimate.",
                especies: [
                    { nombre: "Marigold", cientifico: "Tagetes erecta", funcion: "Natural pest control, attracts pollinators." },
                    { nombre: "Native Sunflower", cientifico: "Helianthus annuus var. mexicanus", funcion: "Abundant pollen and nectar, visited by bees." },
                    { nombre: "Purslane", cientifico: "Portulaca oleracea", funcion: "Edible, flowering for small bees." },
                    { nombre: "Spearmint", cientifico: "Mentha spp.", funcion: "Attractive to bees, natural pest repellent." },
                    { nombre: "Zinnia", cientifico: "Mexican wild flower", funcion: "Long-lasting flower, pollinated by bees and butterflies." }
                ]
            },
            polinizadores: {
                titulo: "Key Pollinators in Chiapas",
                especies: [
                    { nombre: "Melipona Bee", cientifico: "Melipona beecheii", rol: "Native stingless bee, efficient pollinator of tropical crops." },
                    { nombre: "European Honey Bee", cientifico: "Apis mellifera", rol: "Generalist pollinator." },
                    { nombre: "Local Hummingbirds", cientifico: "Trochilidae spp.", rol: "Pollinators of tubular flowers and heliconias." },
                    { nombre: "Blue Morpho Butterfly", cientifico: "Morpho peleides", rol: "Occasional pollinator, indicator of ecosystem health." }
                ]
            },
            auxiliares: {
                titulo: "Beneficial Insects",
                especies: [
                    { nombre: "Ladybugs", cientifico: "Coccinellidae", funcion: "Biological control of aphids and mites." },
                    { nombre: "Lacewings", cientifico: "Chrysopidae", funcion: "Predators of agricultural pests." },
                    { nombre: "Dung Beetles", cientifico: "", funcion: "Nutrient recycling and soil improvement." }
                ]
            },
            infraestructura: {
                titulo: "Additional Infrastructure",
                elementos: [
                    "<strong>Insect hotel:</strong> Drilled logs, reeds, and clay.",
                    "<strong>Water harvesting system:</strong> Gutters and cistern for constant humidity.",
                    "<strong>Composting area:</strong> Use of pruning and agricultural waste."
                ]
            }
        }
    },
    "Guerrero": {
        modelSrc: "modelos/isla_guerrero.glb",
        infoCompleta: {
            titulo: "Pollinator Island Proposal – Guerrero",
            contexto: {
                ubicacion: "Guerrero, Mexico.",
                climas: "Low deciduous forests, temperate forests, mangroves, and thorny scrublands.",
                usosAgricolas: "Corn, agave, coffee, tropical fruits, and vegetables.",
                reto: "Protect biodiversity, improve drought resilience, and diversify agriculture."
            },
            dosel: {
                titulo: "Canopy (Native Trees, Shrubs, and Cacti)",
                beneficios: "Drought resilience, carbon capture, flowers and fruits for adapted pollinators.",
                especies: [
                    { nombre: "Hairy Calliandra", cientifico: "Calliandra hirsuta", funcion: "Woody shrub with showy flowers that attract hummingbirds and bees." },
                    { nombre: "Copal", cientifico: "Bursera spp.", funcion: "Various species present in the local woody flora, provide nectar." },
                    { nombre: "Guerrero's Tasajillo", cientifico: "Acanthocereus fosterianus", funcion: "Columnar cactus with nocturnal flowers for insects and bats." },
                    { nombre: "Prickly Pear", cientifico: "Opuntia fuliginosa", funcion: "Yellow flowers and fruits for a wide range of pollinators." }
                ]
            },
            sotobosque: {
                titulo: "Understory (Local Shrubs and Herbaceous Plants)",
                beneficios: "Provide nectaries, protect soil moisture, and attract specialized pollinators.",
                especies: [
                    { nombre: "Malvaceae species", cientifico: "Hibiscus family", funcion: "Group of plants with a diversity of flowers attractive to insects." },
                    { nombre: "Endemic Bromeliads", cientifico: "Epiphytic and terrestrial flora", funcion: "Water and nectar reservoirs, create humid microclimates." },
                    { nombre: "Local flowering shrubs", cientifico: "", funcion: "Selection of native flora with staggered flowering." }
                ]
            },
            coberturaSuelo: {
                titulo: "Ground Cover (Creeping Plants and Succulents)",
                beneficios: "Excellent adaptation to drought, conserve moisture, and prevent erosion.",
                especies: [
                    { nombre: "Succulent plants", cientifico: "", funcion: "Low water consumption and attractive flowers for small insects." },
                    { nombre: "Terrestrial Bromeliads", cientifico: "", funcion: "Cover the ground, conserve moisture, and offer shelter." }
                ]
            },
            polinizadores: {
                titulo: "Key Pollinators in Guerrero",
                especies: [
                    { nombre: "Scaptotrigona hellwegeri", cientifico: "'Mamey's Cucu' Bee", rol: "A native stingless bee crucial for local crops." }
                ]
            }
        }
    }
};


    // Función que se ejecuta al hacer clic en un botón
    function updateDisplay(state) {
        const data = stateData[state];
        
        if (!data || !data.infoCompleta) {
            console.error(`No se encontraron datos completos para el estado: ${state}`);
            modelViewer.src = data ? data.modelSrc : "";
            designLegend.innerHTML = `<h3>Información no disponible</h3><p>Aún no se ha cargado la ficha técnica para ${state}.</p>`;
            return;
        }

        modelViewer.src = data.modelSrc;
        renderLegend(data.infoCompleta); // Enviamos toda la información a la leyenda

        stateButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.state === state);
        });
    }
    
    // ====================================================================================
    //  NUEVA FUNCIÓN PARA RENDERIZAR LA LEYENDA COMO FICHA TÉCNICA
    // ====================================================================================
    function renderLegend(data) {
        let html = `<h2>${data.titulo}</h2>`;

        // Sección de Contexto
        html += `<div class="legend-section">
                    <h4>Región y Contexto</h4>
                    <p><strong>Ubicación:</strong> ${data.contexto.ubicacion}</p>
                    <p><strong>Climas:</strong> ${data.contexto.climas}</p>
                    <p><strong>Cultivos comunes:</strong> ${data.contexto.usosAgricolas}</p>
                    <p><strong>Reto:</strong> ${data.contexto.reto}</p>
                 </div>`;
        
        // Función auxiliar para crear las tablas de flora
        const createFloraTable = (sectionData) => {
            let tableHtml = `<div class="legend-section">
                                <h4>${sectionData.titulo}</h4>
                                <table class="flora-table">
                                    <thead>
                                        <tr><th>Especie</th><th>Función Ecológica</th></tr>
                                    </thead>
                                    <tbody>`;
            sectionData.especies.forEach(e => {
                tableHtml += `<tr>
                                <td><strong>${e.nombre}</strong><br><em>${e.cientifico || ''}</em></td>
                                <td>${e.funcion}</td>
                              </tr>`;
            });
            tableHtml += `</tbody></table><p class="benefits-text"><strong>Beneficios:</strong> ${sectionData.beneficios}</p></div>`;
            return tableHtml;
        };

        html += createFloraTable(data.dosel);
        html += createFloraTable(data.sotobosque);
        html += createFloraTable(data.coberturaSuelo);

        // Sección de Polinizadores
        html += `<div class="legend-section"><h4>${data.polinizadores.titulo}</h4><ul>`;
        data.polinizadores.especies.forEach(p => {
            html += `<li><strong>${p.nombre}</strong> (<em>${p.cientifico}</em>): ${p.rol}</li>`;
        });
        html += `</ul></div>`;
        
        // Sección de Insectos Auxiliares
        html += `<div class="legend-section"><h4>${data.auxiliares.titulo}</h4><ul>`;
        data.auxiliares.especies.forEach(i => {
            html += `<li><strong>${i.nombre}</strong>: ${i.funcion}</li>`;
        });
        html += `</ul></div>`;

        // Sección de Infraestructura
        html += `<div class="legend-section"><h4>${data.infraestructura.titulo}</h4><ul>`;
        data.infraestructura.elementos.forEach(e => {
            html += `<li>${e}</li>`;
        });
        html += `</ul></div>`;

        designLegend.innerHTML = html;
    }
    
    stateButtons.forEach(button => {
        button.addEventListener('click', () => {
            const state = button.dataset.state;
            updateDisplay(state);
        });
    });

    updateDisplay("Oaxaca");
});