import {Router} from "express";
import {createOrder1, createOrder2, createOrder3, createOrder4, createOrder5, createOrder6, createOrder7, 
    createOrder8, createOrder9, createOrder10, createOrder11, createOrder12, 
    createOrder13, createOrder14, createOrder15, createOrder16, createOrder17, 
    createOrder18, receiveWebhook, createOrder19} from "../controllers/payment.controller.js"
import bodyParser from 'body-parser';

const router = Router();

router.post("/create-order1", createOrder1);
router.post("/create-order2", createOrder2);
router.post("/create-order3", createOrder3);
router.post("/create-order4", createOrder4);
router.post("/create-order5", createOrder5);
router.post("/create-order6", createOrder6);
router.post("/create-order7", createOrder7);
router.post("/create-order8", createOrder8);
router.post("/create-order9", createOrder9);
router.post("/create-order10", createOrder10);
router.post("/create-order11", createOrder11);
router.post("/create-order12", createOrder12);
router.post("/create-order13", createOrder13);
router.post("/create-order14", createOrder14);
router.post("/create-order15", createOrder15);
router.post("/create-order16", createOrder16);
router.post("/create-order17", createOrder17);
router.post("/create-order18", createOrder18);
router.post("/create-order19", createOrder19);
router.use(bodyParser.json()); // Analisa solicitações JSON
router.use(bodyParser.urlencoded({ extended: true })); // Analisa solicitações com dados de formulário



router.get("/sucesso",(req,res)=> res.send("sucesso"));

router.get("/falha",(req,res)=> res.send("falha"));

router.get("/pendente",(req,res)=> res.send("pendente"));

router.post("/webhook", (req, res) => {
  receiveWebhook(req, res); 
});

export default router;