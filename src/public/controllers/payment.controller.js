import mercadopago from 'mercadopago';
import { HOST, MERCADOPAGO_API_KEY } from "../config.js";

export const createOrder1 = async (req, res) => {

    mercadopago.configure({
        access_token: MERCADOPAGO_API_KEY,
    });
    const result = await mercadopago.preferences.create({

        items: [
            {
                
                title: "Jogo de Panela Antiaderente",
                unit_price: 242.90,
                currency_id: "BRL",
                quantity: 1,
                picture_url:"",
            }

        ],
        back_urls: {
            success: `${HOST}/sucesso`,
            failure: `${HOST}/falha`,
            pending: `${HOST}/pendente`,
        },
        notification_url: "https://182a-164-163-20-198.ngrok.io/webhook",

    });
    

    console.log(result);
    res.send(result.body);
};
export const createOrder2 = async (req, res) => {

    mercadopago.configure({
        access_token: MERCADOPAGO_API_KEY,
    });
    const result = await mercadopago.preferences.create({

        items: [
            {
                title: "Micro-ondas Espelhado Philco",
                description: "Microondas Philco PMO30EP 28 Litros Preto Com Porta Espelhada 1400w",
                unit_price: 569.00,
                currency_id: "BRL",
                quantity: 1,
                picture_url:"https://a-static.mlcdn.com.br/800x560/jogo-de-panelas-eirilar-antiaderente-de-aluminio-grafite-14-pecas-especial/magazineluiza/235128200/3593fc92689b0a99b3f512e3f0ec5f50.jpg"

            }

        ],
        back_urls: {
            success: `${HOST}/sucesso`,
            failure: `${HOST}/falha`,
            pending: `${HOST}/pendente`,
        },
        notification_url: "https://182a-164-163-20-198.ngrok.io/webhook",

    });
    

    console.log(result);
    res.send(result.body);
};
export const createOrder3 = async (req, res) => {

    mercadopago.configure({
        access_token: MERCADOPAGO_API_KEY,
    });
    const result = await mercadopago.preferences.create({

        items: [
            {
                title: "Jogo de panelas",
                description: "Jogo de panelas",
                unit_price: 194.90,
                currency_id: "BRL",
                quantity: 1,
                picture_url:"https://a-static.mlcdn.com.br/800x560/jogo-de-panelas-eirilar-antiaderente-de-aluminio-grafite-14-pecas-especial/magazineluiza/235128200/3593fc92689b0a99b3f512e3f0ec5f50.jpg"

            }

        ],
        back_urls: {
            success: `${HOST}/sucesso`,
            failure: `${HOST}/falha`,
            pending: `${HOST}/pendente`,
        },
        notification_url: "https://182a-164-163-20-198.ngrok.io/webhook",

    });
    

    console.log(result);
    res.send(result.body);
};
export const createOrder4 = async (req, res) => {

    mercadopago.configure({
        access_token: MERCADOPAGO_API_KEY,
    });
    const result = await mercadopago.preferences.create({

        items: [
            {
                title: "Tábua de passar roupas",
                description: "Tábua de passar roupas",
                unit_price: 129.90,
                currency_id: "BRL",
                quantity: 1,
                picture_url:"https://a-static.mlcdn.com.br/800x560/jogo-de-panelas-eirilar-antiaderente-de-aluminio-grafite-14-pecas-especial/magazineluiza/235128200/3593fc92689b0a99b3f512e3f0ec5f50.jpg"

            }

        ],
        back_urls: {
            success: `${HOST}/sucesso`,
            failure: `${HOST}/falha`,
            pending: `${HOST}/pendente`,
        },
        notification_url: "https://182a-164-163-20-198.ngrok.io/webhook",

    });
    

    console.log(result);
    res.send(result.body);
};
export const createOrder5 = async (req, res) => {

    mercadopago.configure({
        access_token: MERCADOPAGO_API_KEY,
    });
    const result = await mercadopago.preferences.create({

        items: [
            {
                title: "Ventilador turbo",
                description: "Ventilador turbo",
                unit_price: 230.00,
                currency_id: "BRL",
                quantity: 1,
                picture_url:"https://a-static.mlcdn.com.br/800x560/jogo-de-panelas-eirilar-antiaderente-de-aluminio-grafite-14-pecas-especial/magazineluiza/235128200/3593fc92689b0a99b3f512e3f0ec5f50.jpg"

            }

        ],
        back_urls: {
            success: `${HOST}/sucesso`,
            failure: `${HOST}/falha`,
            pending: `${HOST}/pendente`,
        },
        notification_url: "https://182a-164-163-20-198.ngrok.io/webhook",

    });
    

    console.log(result);
    res.send(result.body);
};
export const createOrder6 = async (req, res) => {

    mercadopago.configure({
        access_token: MERCADOPAGO_API_KEY,
    });
    const result = await mercadopago.preferences.create({

        items: [
            {
                title: "Aparelho de jantar",
                description: "Aparelho de jantar",
                unit_price: 220.00,
                currency_id: "BRL",
                quantity: 1,
                picture_url:"https://a-static.mlcdn.com.br/800x560/jogo-de-panelas-eirilar-antiaderente-de-aluminio-grafite-14-pecas-especial/magazineluiza/235128200/3593fc92689b0a99b3f512e3f0ec5f50.jpg"

            }

        ],
        back_urls: {
            success: `${HOST}/sucesso`,
            failure: `${HOST}/falha`,
            pending: `${HOST}/pendente`,
        },
        notification_url: "https://182a-164-163-20-198.ngrok.io/webhook",

    });
    

    console.log(result);
    res.send(result.body);
};
export const createOrder7 = async (req, res) => {

    mercadopago.configure({
        access_token: MERCADOPAGO_API_KEY,
    });
    const result = await mercadopago.preferences.create({

        items: [
            {
                title: "Kit potes herméticos",
                description: "Kit potes herméticos",
                unit_price: 130.00,
                currency_id: "BRL",
                quantity: 1,
                picture_url:"https://a-static.mlcdn.com.br/800x560/jogo-de-panelas-eirilar-antiaderente-de-aluminio-grafite-14-pecas-especial/magazineluiza/235128200/3593fc92689b0a99b3f512e3f0ec5f50.jpg"

            }

        ],
        back_urls: {
            success: `${HOST}/sucesso`,
            failure: `${HOST}/falha`,
            pending: `${HOST}/pendente`,
        },
        notification_url: "https://182a-164-163-20-198.ngrok.io/webhook",

    });
    

    console.log(result);
    res.send(result.body);
};
export const createOrder8 = async (req, res) => {

    mercadopago.configure({
        access_token: MERCADOPAGO_API_KEY,
    });
    const result = await mercadopago.preferences.create({

        items: [
            {
                title: "Edredom casal",
                description: "Edredom casal",
                unit_price: 179.90,
                currency_id: "BRL",
                quantity: 1,
                picture_url:"https://a-static.mlcdn.com.br/800x560/jogo-de-panelas-eirilar-antiaderente-de-aluminio-grafite-14-pecas-especial/magazineluiza/235128200/3593fc92689b0a99b3f512e3f0ec5f50.jpg"

            }

        ],
        back_urls: {
            success: `${HOST}/sucesso`,
            failure: `${HOST}/falha`,
            pending: `${HOST}/pendente`,
        },
        notification_url: "https://182a-164-163-20-198.ngrok.io/webhook",

    });
    

    console.log(result);
    res.send(result.body);
};
export const createOrder9 = async (req, res) => {

    mercadopago.configure({
        access_token: MERCADOPAGO_API_KEY,
    });
    const result = await mercadopago.preferences.create({

        items: [
            {
                title: "Jogo de toalhas 5 - Pçs",
                description: "Jogo de toalhas 5 - Pçs",
                unit_price: 105.90,
                currency_id: "BRL",
                quantity: 1,
                picture_url:"https://a-static.mlcdn.com.br/800x560/jogo-de-panelas-eirilar-antiaderente-de-aluminio-grafite-14-pecas-especial/magazineluiza/235128200/3593fc92689b0a99b3f512e3f0ec5f50.jpg"

            }

        ],
        back_urls: {
            success: `${HOST}/sucesso`,
            failure: `${HOST}/falha`,
            pending: `${HOST}/pendente`,
        },
        notification_url: "https://182a-164-163-20-198.ngrok.io/webhook",

    });
    

    console.log(result);
    res.send(result.body);
};
export const createOrder10 = async (req, res) => {

    mercadopago.configure({
        access_token: MERCADOPAGO_API_KEY,
    });
    const result = await mercadopago.preferences.create({

        items: [
            {
                title: "Jogo de cama casal",
                description: "Jogo de cama casal",
                unit_price: 128.99,
                currency_id: "BRL",
                quantity: 1,
                picture_url:"https://a-static.mlcdn.com.br/800x560/jogo-de-panelas-eirilar-antiaderente-de-aluminio-grafite-14-pecas-especial/magazineluiza/235128200/3593fc92689b0a99b3f512e3f0ec5f50.jpg"

            }

        ],
        back_urls: {
            success: `${HOST}/sucesso`,
            failure: `${HOST}/falha`,
            pending: `${HOST}/pendente`,
        },
        notification_url: "https://182a-164-163-20-198.ngrok.io/webhook",

    });
    

    console.log(result);
    res.send(result.body);
};
export const createOrder11 = async (req, res) => {

    mercadopago.configure({
        access_token: MERCADOPAGO_API_KEY,
    });
    const result = await mercadopago.preferences.create({

        items: [
            {
                title: "Jogo de sobremesa",
                description: "Jogo de sobremesa",
                unit_price: 67.40,
                currency_id: "BRL",
                quantity: 1,
                picture_url:"https://a-static.mlcdn.com.br/800x560/jogo-de-panelas-eirilar-antiaderente-de-aluminio-grafite-14-pecas-especial/magazineluiza/235128200/3593fc92689b0a99b3f512e3f0ec5f50.jpg"

            }

        ],
        back_urls: {
            success: `${HOST}/sucesso`,
            failure: `${HOST}/falha`,
            pending: `${HOST}/pendente`,
        },
        notification_url: "https://182a-164-163-20-198.ngrok.io/webhook",

    });
    

    console.log(result);
    res.send(result.body);
};
export const createOrder12 = async (req, res) => {

    mercadopago.configure({
        access_token: MERCADOPAGO_API_KEY,
    });
    const result = await mercadopago.preferences.create({

        items: [
            {
                title: "Jogo descansos de panela 6 - Pçs",
                description: "Jogo descansos de panela 6 - Pçs",
                unit_price: 59.90,
                currency_id: "BRL",
                quantity: 1,
                picture_url:"https://a-static.mlcdn.com.br/800x560/jogo-de-panelas-eirilar-antiaderente-de-aluminio-grafite-14-pecas-especial/magazineluiza/235128200/3593fc92689b0a99b3f512e3f0ec5f50.jpg"

            }

        ],
        back_urls: {
            success: `${HOST}/sucesso`,
            failure: `${HOST}/falha`,
            pending: `${HOST}/pendente`,
        },
        notification_url: "https://182a-164-163-20-198.ngrok.io/webhook",

    });
    

    console.log(result);
    res.send(result.body);
};
export const createOrder13 = async (req, res) => {

    mercadopago.configure({
        access_token: MERCADOPAGO_API_KEY,
    });
    const result = await mercadopago.preferences.create({

        items: [
            {
                title: "Jogo americano (sousplat)",
                description: "Jogo americano (sousplat)",
                unit_price: 59.00,
                currency_id: "BRL",
                quantity: 1,
                picture_url:"https://a-static.mlcdn.com.br/800x560/jogo-de-panelas-eirilar-antiaderente-de-aluminio-grafite-14-pecas-especial/magazineluiza/235128200/3593fc92689b0a99b3f512e3f0ec5f50.jpg"

            }

        ],
        back_urls: {
            success: `${HOST}/sucesso`,
            failure: `${HOST}/falha`,
            pending: `${HOST}/pendente`,
        },
        notification_url: "https://182a-164-163-20-198.ngrok.io/webhook",

    });
    

    console.log(result);
    res.send(result.body);
};
export const createOrder14 = async (req, res) => {

    mercadopago.configure({
        access_token: MERCADOPAGO_API_KEY,
    });
    const result = await mercadopago.preferences.create({

        items: [
            {
                title: "Porta copos de sofá",
                description: "Porta copos de sofá",
                unit_price: 39.90,
                currency_id: "BRL",
                quantity: 1,
                picture_url:"https://a-static.mlcdn.com.br/800x560/jogo-de-panelas-eirilar-antiaderente-de-aluminio-grafite-14-pecas-especial/magazineluiza/235128200/3593fc92689b0a99b3f512e3f0ec5f50.jpg"

            }

        ],
        back_urls: {
            success: `${HOST}/sucesso`,
            failure: `${HOST}/falha`,
            pending: `${HOST}/pendente`,
        },
        notification_url: "https://182a-164-163-20-198.ngrok.io/webhook",

    });
    

    console.log(result);
    res.send(result.body);
};
export const createOrder15 = async (req, res) => {

    mercadopago.configure({
        access_token: MERCADOPAGO_API_KEY,
    });
    const result = await mercadopago.preferences.create({

        items: [
            {
                title: "Escorredor de pratos",
                description: "Escorredor de pratos",
                unit_price: 170.00,
                currency_id: "BRL",
                quantity: 1,
                picture_url:"https://a-static.mlcdn.com.br/800x560/jogo-de-panelas-eirilar-antiaderente-de-aluminio-grafite-14-pecas-especial/magazineluiza/235128200/3593fc92689b0a99b3f512e3f0ec5f50.jpg"

            }

        ],
        back_urls: {
            success: `${HOST}/sucesso`,
            failure: `${HOST}/falha`,
            pending: `${HOST}/pendente`,
        },
        notification_url: "https://182a-164-163-20-198.ngrok.io/webhook",

    });
    

    console.log(result);
    res.send(result.body);
};
export const createOrder16 = async (req, res) => {

    mercadopago.configure({
        access_token: MERCADOPAGO_API_KEY,
    });
    const result = await mercadopago.preferences.create({

        items: [
            {
                title: "Cesto de roupas",
                description: "Cesto de roupas",
                unit_price: 80.00,
                currency_id: "BRL",
                quantity: 1,
                picture_url:"https://a-static.mlcdn.com.br/800x560/jogo-de-panelas-eirilar-antiaderente-de-aluminio-grafite-14-pecas-especial/magazineluiza/235128200/3593fc92689b0a99b3f512e3f0ec5f50.jpg"

            }

        ],
        back_urls: {
            success: `${HOST}/sucesso`,
            failure: `${HOST}/falha`,
            pending: `${HOST}/pendente`,
        },
        notification_url: "https://182a-164-163-20-198.ngrok.io/webhook",

    });
    

    console.log(result);
    res.send(result.body);
};
export const createOrder17 = async (req, res) => {

    mercadopago.configure({
        access_token: MERCADOPAGO_API_KEY,
    });
    const result = await mercadopago.preferences.create({

        items: [
            {
                title: "Cafeteira expresso de capsulas",
                description: "Cafeteira expresso de capsulas",
                unit_price: 239.00,
                currency_id: "BRL",
                quantity: 1,
                picture_url:"https://a-static.mlcdn.com.br/800x560/jogo-de-panelas-eirilar-antiaderente-de-aluminio-grafite-14-pecas-especial/magazineluiza/235128200/3593fc92689b0a99b3f512e3f0ec5f50.jpg"

            }

        ],
        back_urls: {
            success: `${HOST}/sucesso`,
            failure: `${HOST}/falha`,
            pending: `${HOST}/pendente`,
        },
        notification_url: "https://182a-164-163-20-198.ngrok.io/webhook",

    });
    

    console.log(result);
    res.send(result.body);
};
export const createOrder18 = async (req, res) => {

    mercadopago.configure({
        access_token: MERCADOPAGO_API_KEY,
    });
    const result = await mercadopago.preferences.create({

        items: [
            {
                title: "Aspirador de pó vertical",
                description: "Aspirador de pó vertical",
                unit_price: 149.90,
                currency_id: "BRL",
                quantity: 1,
                picture_url:"https://a-static.mlcdn.com.br/800x560/jogo-de-panelas-eirilar-antiaderente-de-aluminio-grafite-14-pecas-especial/magazineluiza/235128200/3593fc92689b0a99b3f512e3f0ec5f50.jpg"

            }

        ],
        back_urls: {
            success: `${HOST}/sucesso`,
            failure: `${HOST}/falha`,
            pending: `${HOST}/pendente`,
        },
        notification_url: "https://182a-164-163-20-198.ngrok.io/webhook",

    });
    

    console.log(result);
    res.send(result.body);
};
export const createOrder19 = async (req, res) => {

    mercadopago.configure({
        access_token: MERCADOPAGO_API_KEY,
    });
    const result = await mercadopago.preferences.create({

        items: [
            {
                title: "Cortina blackout 200x140cm",
                description: "Cortina blackout 200x140cm",
                unit_price: 52.90,
                currency_id: "BRL",
                quantity: 1,
                picture_url:"https://a-static.mlcdn.com.br/800x560/jogo-de-panelas-eirilar-antiaderente-de-aluminio-grafite-14-pecas-especial/magazineluiza/235128200/3593fc92689b0a99b3f512e3f0ec5f50.jpg"

            }

        ],
        back_urls: {
            success: `${HOST}/sucesso`,
            failure: `${HOST}/falha`,
            pending: `${HOST}/pendente`,
        },
        notification_url: "https://182a-164-163-20-198.ngrok.io/webhook",

    });
    

    console.log(result);
    res.send(result.body);
};


export const receiveWebhook = async (req, res) => {
    const payment = req.query;
    try {
        if (payment.type === "payment") {
            const data = await mercadopago.payment.findById(payment["data.id"]);
            console.log(data);

            //guardar em base de dados
        }
        res.sendStatus(204);
    } catch (error) {
        console.log(error);
        return res.sendStatus(500).json({ error: error.message });
    }
}

