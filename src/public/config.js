import {config} from "dotenv";
config();

export const PORT = 3000;
export const HOST = `https://listadepresentesbj.netlify.app:${PORT}`;

export const MERCADOPAGO_API_KEY = process.env.MERCADOPAGO_API_KEY;

console.log(MERCADOPAGO_API_KEY);