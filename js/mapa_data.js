// Este objeto contiene toda la información predefinida para nuestro mapa.
// Para agregar un nuevo estado, simplemente añade una nueva entrada con su nombre.
const mapData = {
    "Oaxaca": {
        titulo: "Análisis de Vegetación: Oaxaca",
        interpretacion: "Oaxaca presenta una alta diversidad de vegetación, desde zonas áridas hasta bosques templados. Los índices muestran una salud vegetal robusta en sus valles y sierras, indicando una biomasa activa y buena retención de humedad, clave para su agricultura de café y agave.",
        polinizadoresTitulo: "Polinizadores Principales",
        polinizadores: [
            "Abejas nativas (Melipona)",
            "Colibríes",
            "Murciélagos magueyeros",
            "Mariposa monarca (en tránsito)"
        ],
        floraTitulo: "Flora Nativa Principal",
        flora: [
            "Agave (diversas especies)",
            "Cazahuate",
            "Copal",
            "Dalia (Flor Nacional)"
        ]
    },
    "Chiapas": {
        titulo: "Análisis de Vegetación: Chiapas",
        interpretacion: "La vegetación en Chiapas es exuberante, dominada por selvas húmedas. Los índices reflejan una biomasa densa y constante durante todo el año. La salud de la vegetación es vital para cultivos como el café y el cacao, aunque es un ecosistema sensible a la deforestación.",
        polinizadoresTitulo: "Polinizadores Principales",
        polinizadores: [
            "Abeja melipona (Melipona beecheii)",
            "Mariposa morfo azul",
            "Colibríes",
            "Escarabajos"
        ],
        floraTitulo: "Flora Nativa Principal",
        flora: [
            "Ceiba",
            "Cacao",
            "Guayacán",
            "Salvia de Chiapas",
            "Orquídeas (diversas especies)"
        ]
    },
    "Guerrero": {
        titulo: "Análisis de Vegetación: Guerrero",
        interpretacion: "Guerrero muestra un contraste entre sus selvas secas y bosques de montaña. La vegetación es resiliente y adaptada a temporadas de sequía. Los índices indican una recuperación rápida tras las lluvias, crucial para el maíz y los frutales tropicales.",
        polinizadoresTitulo: "Polinizadores Principales",
        polinizadores: [
            "Abeja 'cucu de mamey' (Scaptotrigona)",
            "Colibríes",
            "Abejas de las orquídeas",
            "Mariposas"
        ],
        floraTitulo: "Flora Nativa Principal",
        flora: [
            "Calliandra (Huaje)",
            "Bursera (Copal)",
            "Agave cupreata (endémico)",
            "Cactos columnares"
        ]
    },
    // Puedes seguir agregando más estados aquí...
};