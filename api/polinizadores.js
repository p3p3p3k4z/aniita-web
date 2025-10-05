// Archivo: api/polinizadores.js

// Usamos 'undici' porque es el fetch estándar moderno recomendado para Node.js y Vercel.
import { fetch } from 'undici';

// IP y puerto de tu servidor de ML. Mantenlos aquí, en el backend.
const SERVER_IP = "192.100.170.152";
const SERVER_PORT = "8040";

export default async function handler(req, res) {
  // Obtenemos los parámetros de la URL que nos mandó el frontend
  const { temperatura, altitud, grafica } = req.query;

  // Construimos la URL real de tu API
  const apiUrl = `http://${SERVER_IP}:${SERVER_PORT}/polinizadores/?temperatura=${temperatura}&altitud=${altitud}&grafica=${grafica}`;

  try {
    const apiResponse = await fetch(apiUrl);

    // Si la respuesta de tu API no es exitosa, devolvemos el error
    if (!apiResponse.ok) {
      return res.status(apiResponse.status).send('Error en el servidor de ML');
    }

    // Copiamos las cabeceras importantes (como Content-Type) de la respuesta original
    // Esto es CRÍTICO para que el navegador sepa si es una imagen o un JSON
    res.setHeader('Content-Type', apiResponse.headers.get('content-type'));

    // Enviamos la respuesta de tu API de vuelta al navegador
    // Esto funciona tanto para el JSON como para la imagen (blob)
    return apiResponse.body.pipe(res);

  } catch (error) {
    console.error("Error en el proxy de polinizadores:", error);
    res.status(500).json({ error: 'No se pudo conectar con el servicio de predicción.' });
  }
}