

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { MercadoPagoConfig, Preference } from 'mercadopago';

dotenv.config(); 

 const Token = 'TEST-3543939747532160-030112-bb772a2fa74013abd4c13e5dc60d7bd6-206419978'

// 🔴 Inicializar MercadoPago con `MercadoPagoConfig`
const client = new MercadoPagoConfig({ accessToken: Token });
const preference = new Preference(client);

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.post("/create-preference", async (req, res) => {
  try {
    console.log("Cuerpo de la solicitud:", req.body);

    if (!req.body.items || !Array.isArray(req.body.items) || req.body.items.length === 0) {
      return res.status(400).json({ error: "Faltan items en el cuerpo de la solicitud" });
    }

    const preferenceData = {
      body: {
        items: req.body.items.map(item => ({
          title: item.title,
          quantity: Number(item.quantity),
          unit_price: Number(item.unit_price),
          currency_id: 'ARS',
        })),
        back_urls: {
          success: 'https://portafolio-chi-gilt.vercel.app',
          failure: 'https://mail.google.com/mail/u/1/#inbox',
          pending: 'https://kick.com',
        },
        auto_return: 'approved',
      }
    };

    console.log("Cuerpo de la preferencia:", preferenceData);

    const response = await preference.create(preferenceData);
    console.log("Preferencia creada:", response);

    res.json({ id: response.id });
  } catch (error) {
    console.error("Error al crear la preferencia:", error);
    res.status(500).json({ error: 'Error al crear la preferencia' });
  }
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
