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
            titulo: "Propuesta Integral de Isla Polinizadora – Oaxaca",
            contexto: {
                ubicacion: "Oaxaca, México",
                climas: "Templado subhúmedo, seco y tropical húmedo.",
                usosAgricolas: "Maíz, café, agave, frutales, hortalizas.",
                reto: "Pérdida de polinizadores por deforestación, agroquímicos y cambio climático."
            },
            dosel: {
                titulo: "Estrato Dosel – Árboles",
                beneficios: "Captura de carbono, restauración de suelo, refugio de fauna, soporte para otras plantas.",
                especies: [
                    { nombre: "Tepehuaje", cientifico: "Lysiloma acapulcense", funcion: "Fijador de nitrógeno, sombra, floración para abejas." },
                    { nombre: "Mezquite", cientifico: "Prosopis spp.", funcion: "Resiliente a sequía, mejora suelo, néctar abundante." },
                    { nombre: "Guaje", cientifico: "Leucaena leucocephala", funcion: "Comestible, floración prolongada, bueno para suelos degradados." },
                    { nombre: "Copal", cientifico: "Bursera spp.", funcion: "Aporta néctar, resina cultural, alimento para abejas." },
                    { nombre: "Guayaba", cientifico: "Psidium guajava", funcion: "Frutal, flores polinizadas por abejas y murciélagos." },
                    { nombre: "Zapote Negro", cientifico: "Diospyros digyna", funcion: "Frutal, sombra, alimento y refugio." }
                ]
            },
            sotobosque: {
                titulo: "Estrato Sotobosque – Arbustos y Herbáceas",
                beneficios: "Diversidad floral, control biológico de plagas, sustento para polinizadores especialistas.",
                especies: [
                    { nombre: "Salvia Mexicana", cientifico: "", funcion: "Floración atractiva para colibríes y abejas." },
                    { nombre: "Dalia Roja", cientifico: "Flor nacional de México", funcion: "Atracción visual, néctar abundante." },
                    { nombre: "Lantana", cientifico: "Lantana camara", funcion: "Floración prolongada, resistente a sequía." },
                    { nombre: "Cacaloxóchitl (Plumeria)", cientifico: "Plumeria rubra", funcion: "Visitada frecuentemente por mariposas y colibríes." },
                    { nombre: "Bugambilia", cientifico: "Bougainvillea spectabilis", funcion: "Resistente, refugio insectos, flores casi todo el año." }
                ]
            },
            coberturaSuelo: {
                titulo: "Cobertura de Suelo",
                beneficios: "Protegen el suelo, retienen humedad, aumentan resiliencia a sequía.",
                especies: [
                    { nombre: "Cempasúchil", cientifico: "Tagetes erecta", funcion: "Polinizadores + control plagas natural (nematicida)." },
                    { nombre: "Cosmos", cientifico: "Cosmos sulphureus", funcion: "Visitada frecuentemente por abejas y mariposas." },
                    { nombre: "Albahaca de Monte", cientifico: "Ocimum micranthum", funcion: "Aroma, néctar, repelente natural." },
                    { nombre: "Zinnia", cientifico: "Flor silvestre mexicana", funcion: "Floración duradera, visitada por mariposas y abejas." }
                ]
            },
            polinizadores: {
                titulo: "Polinizadores Clave",
                especies: [
                    { nombre: "Abeja Melipona", cientifico: "Melipona beecheii", rol: "Nativa sin aguijón, ideal para agricultura." },
                    { nombre: "Abeja Europea", cientifico: "Apis mellifera", rol: "Polinizador generalista." },
                    { nombre: "Mariposa Monarca", cientifico: "Danaus plexippus", rol: "Migratoria, poliniza flores silvestres." },
                    { nombre: "Colibríes Locales", cientifico: "Trochilidae spp.", rol: "Polinizadores de flores tubulares." }
                ]
            },
            auxiliares: {
                titulo: "Insectos Benéficos",
                especies: [
                    { nombre: "Catarinas", cientifico: "Coccinellidae", funcion: "Control biológico de pulgones." },
                    { nombre: "Crisopas", cientifico: "Chrysopidae", funcion: "Depredadores de plagas agrícolas." },
                    { nombre: "Escarabajos Estiercoleros", cientifico: "", funcion: "Reciclaje de nutrientes y mejora de suelo." }
                ]
            },
            infraestructura: {
                titulo: "Infraestructura Adicional",
                elementos: [
                    "<strong>Hotel de insectos:</strong> Troncos perforados, cañas, barro.",
                    "<strong>Sistema de captación de agua:</strong> Canaletas y cisterna para mantener humedad.",
                    "<strong>Zona de compostaje:</strong> Uso de poda y residuos agrícolas."
                ]
            }
        }
    },
    "Chiapas": {
        modelSrc: "modelos/isla_chiapas.glb",
        infoCompleta: {
            titulo: "Propuesta de Isla Polinizadora – Chiapas",
            contexto: {
                ubicacion: "Chiapas, México.",
                climas: "Tropical húmedo, templado húmedo, selva baja y alta.",
                usosAgricolas: "Café, cacao, plátano, maíz, caña, frutales tropicales.",
                reto: "Deforestación, pérdida de polinizadores, agricultura intensiva."
            },
            dosel: {
                titulo: "Estrato Dosel – Árboles Medianos y Grandes",
                beneficios: "Captura de carbono, restauración de suelo, refugio de fauna, soporte para otras plantas y polinizadores.",
                especies: [
                    { nombre: "Ceiba", cientifico: "Ceiba pentandra", funcion: "Árbol emblemático, sombra, refugio fauna, flores para polinizadores grandes." },
                    { nombre: "Cacao", cientifico: "Theobroma cacao", funcion: "Floración constante, alimento para abejas y murciélagos polinizadores." },
                    { nombre: "Guayacán", cientifico: "Tabebuia spp.", funcion: "Floración vistosa, atrae abejas y colibríes." },
                    { nombre: "Mango", cientifico: "Mangifera indica", funcion: "Frutal, flores y frutos atractivos para fauna y polinizadores." },
                    { nombre: "Tzalam", cientifico: "Lysiloma latisiliquum", funcion: "Fijador de nitrógeno, sombra, fuente de néctar para abejas." }
                ]
            },
            sotobosque: {
                titulo: "Estrato Sotobosque – Arbustos y herbáceas",
                beneficios: "Diversidad floral, refugio polinizadores especialistas y mariposas, floración escalonada.",
                especies: [
                    { nombre: "Salvia de Chiapas", cientifico: "Salvia chiapensis", funcion: "Floración para colibríes y abejas locales." },
                    { nombre: "Ixora", cientifico: "Ixora coccinea", funcion: "Atrae polinizadores, floración duradera." },
                    { nombre: "Tulipán (Hibisco)", cientifico: "Hibiscus rosa-sinensis", funcion: "Floración vistosa, néctar para abejas y colibríes." },
                    { nombre: "Heliconia", cientifico: "Heliconia spp.", funcion: "Flores tubulares, importante para colibríes." },
                    { nombre: "Achiote", cientifico: "Bixa orellana", funcion: "Floración prolongada, semillas útiles, atrae insectos." }
                ]
            },
            coberturaSuelo: {
                titulo: "Cobertura de Suelo – Pastos y flores rastreras",
                beneficios: "Protección suelo, retención humedad, microclima estable.",
                especies: [
                    { nombre: "Cempasúchil", cientifico: "Tagetes erecta", funcion: "Control natural plagas, atrae polinizadores." },
                    { nombre: "Girasol nativo", cientifico: "Helianthus annuus var. mexicanus", funcion: "Polen y néctar abundante, visitada por abejas." },
                    { nombre: "Verdolaga", cientifico: "Portulaca oleracea", funcion: "Comestible, floración para abejas pequeñas." },
                    { nombre: "Hierbabuena/Menta", cientifico: "Mentha spp.", funcion: "Atractiva para abejas, repelente natural de plagas." },
                    { nombre: "Zinnia", cientifico: "Flor silvestre mexicana", funcion: "Floración duradera, polinizada por abejas y mariposas." }
                ]
            },
            polinizadores: {
                titulo: "Polinizadores Clave en Chiapas",
                especies: [
                    { nombre: "Abeja Melipona", cientifico: "Melipona beecheii", rol: "Nativa sin aguijón, polinizador eficiente de cultivos tropicales." },
                    { nombre: "Abeja Europea", cientifico: "Apis mellifera", rol: "Polinizador generalista." },
                    { nombre: "Colibríes Locales", cientifico: "Trochilidae spp.", rol: "Polinizadores de flores tubulares y heliconias." },
                    { nombre: "Mariposa Morfo Azul", cientifico: "Morpho peleides", rol: "Polinizador ocasional, indicador de salud del ecosistema." }
                ]
            },
            auxiliares: {
                titulo: "Insectos Benéficos",
                especies: [
                    { nombre: "Catarinas", cientifico: "Coccinellidae", funcion: "Control biológico de pulgones y ácaros." },
                    { nombre: "Crisopas", cientifico: "Chrysopidae", funcion: "Depredadores de plagas agrícolas." },
                    { nombre: "Escarabajos Estiercoleros", cientifico: "", funcion: "Reciclaje de nutrientes y mejora de suelo." }
                ]
            },
            infraestructura: {
                titulo: "Infraestructura Adicional",
                elementos: [
                    "<strong>Hotel de insectos:</strong> Troncos perforados, cañas y barro.",
                    "<strong>Sistema de captación de agua:</strong> Canaletas y cisterna para humedad constante.",
                    "<strong>Zona de compostaje:</strong> Uso de poda y residuos agrícolas."
                ]
            }
        }
    },
    "Guerrero": {
        modelSrc: "modelos/isla_guerrero.glb",
        infoCompleta: {
            titulo: "Propuesta de Isla Polinizadora – Guerrero",
            contexto: {
                ubicacion: "Guerrero, México.",
                climas: "Selvas bajas caducifolias, bosques templados, manglares y matorrales espinosos.",
                usosAgricolas: "Maíz, agave, café, frutales tropicales y hortalizas.",
                reto: "Proteger biodiversidad, mejorar resiliencia a sequía y diversificar agricultura."
            },
            dosel: {
                titulo: "Dosel (Árboles Nativos, Arbustos y Cactáceas)",
                beneficios: "Resiliencia a sequía, captura carbono, flores y frutos para polinizadores adaptados.",
                especies: [
                    { nombre: "Cabellito de Ángel", cientifico: "Calliandra hirsuta", funcion: "Arbusto leñoso con flores vistosas que atraen colibríes y abejas." },
                    { nombre: "Copal", cientifico: "Bursera spp.", funcion: "Varias especies presentes en la flora leñosa local, aportan néctar." },
                    { nombre: "Tasajillo de Guerrero", cientifico: "Acanthocereus fosterianus", funcion: "Cactácea columnar con flores nocturnas para insectos y murciélagos." },
                    { nombre: "Nopal", cientifico: "Opuntia fuliginosa", funcion: "Flores amarillas y frutos para amplia gama de polinizadores." }
                ]
            },
            sotobosque: {
                titulo: "Sotobosque (Arbustos y Herbáceas Locales)",
                beneficios: "Proveen nectarios, protegen humedad del suelo y atraen polinizadores especialistas.",
                especies: [
                    { nombre: "Especies de Malvaceae", cientifico: "Familia del Hibisco", funcion: "Grupo de plantas con diversidad de flores atractivas para insectos." },
                    { nombre: "Bromelias Endémicas", cientifico: "Flora epífita y terrestre", funcion: "Reservorios de agua y néctar, crean microclimas húmedos." },
                    { nombre: "Arbustos florales locales", cientifico: "", funcion: "Selección de flora nativa con floración escalonada." }
                ]
            },
            coberturaSuelo: {
                titulo: "Cobertura de Suelo (Plantas Rastreras y Suculentas)",
                beneficios: "Excelente adaptación a la sequía, conservan humedad y previenen erosión.",
                especies: [
                    { nombre: "Plantas suculentas", cientifico: "", funcion: "Bajo consumo de agua y flores atractivas para insectos pequeños." },
                    { nombre: "Bromelias terrestres", cientifico: "", funcion: "Cubren el suelo, conservan humedad y ofrecen refugio." }
                ]
            },
            polinizadores: {
                titulo: "Polinizadores Clave en Guerrero",
                especies: [
                    { nombre: "Scaptotrigona hellwegeri", cientifico: "Abeja 'Cucú de mamey'", rol: "Abeja nativa sin aguijón crucial para cultivos locales." }
                ]
            },
            auxiliares: {
                titulo: "Insectos Benéficos",
                especies: [
                    { nombre: "Catarinas", cientifico: "Coccinellidae", funcion: "Control biológico de pulgones." },
                    { nombre: "Crisopas", cientifico: "Chrysopidae", funcion: "Depredadores de plagas agrícolas." },
                    { nombre: "Escarabajos Estiercoleros", cientifico: "", funcion: "Reciclaje de nutrientes y mejora de suelo." }
                ]
            },
            infraestructura: {
                titulo: "Infraestructura Adicional",
                elementos: [
                    "<strong>Hotel de insectos:</strong> Troncos perforados, cañas, barro.",
                    "<strong>Sistema de captación de agua:</strong> Canaletas y cisterna para mantener humedad.",
                    "<strong>Zona de compostaje:</strong> Uso de poda y residuos agrícolas."
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
        if (data.auxiliares) {
            html += `<div class="legend-section"><h4>${data.auxiliares.titulo}</h4><ul>`;
            data.auxiliares.especies.forEach(i => {
                html += `<li><strong>${i.nombre}</strong>: ${i.funcion}</li>`;
            });
            html += `</ul></div>`;
        }

        // Sección de Infraestructura
        if (data.infraestructura) {
            html += `<div class="legend-section"><h4>${data.infraestructura.titulo}</h4><ul>`;
            data.infraestructura.elementos.forEach(e => {
                html += `<li>${e}</li>`;
            });
            html += `</ul></div>`;
        }

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