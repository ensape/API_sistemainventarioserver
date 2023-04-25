import express from "express";
import { viewTotalFlejesByBobina, 
 } from "../controllers/stats";


const router = express.Router();

router.get    ( "/total/flejes/bobina" , viewTotalFlejesByBobina      ) // Encontrar Fleje por colada                   
