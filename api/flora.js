// Archivo: api/flora.js

import { fetch } from 'undici';

const SERVER_IP = "192.100.170.152";
const SERVER_PORT = "8040";

export default async function handler(req, res) {
  // Obtenemos los parámetros
  const { temperatura, humedad, altitud, grafica } = req.query;

  // Construimos la URL real de tu API de flora
  const apiUrl = `http://${SERVER_IP}:${SERVER_PORT}/floraEndemica/?temperatura=${temperatura}&humedad=${humedad}&altitud=${altitud}&grafica=${grafica}`;

  try {
    const apiResponse = await fetch(apiUrl);

    if (!apiResponse.ok) {
      return res.status(apiResponse.status).send('Error en el servidor de ML');
    }

    // Copiamos la cabecera Content-Type
    res.setHeader('Content-Type', apiResponse.headers.get('content-type'));

    // Enviamos la respuesta de vuelta al navegador
    return apiResponse.body.pipe(res);

  } catch (error) {
    console.error("Error en el proxy de flora:", error);
    res.status(500).json({ error: 'No se pudo conectar con el servicio de predicción.' });
  }
}