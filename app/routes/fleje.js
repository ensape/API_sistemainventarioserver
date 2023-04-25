import  express  from "express";
import { 
    createFleje,
    updateFleje,
    findFlejeByID,
    findFlejeByColada,
    findFlejeByCuerpofleje,
    findAllFlejes,
    deleteFlejeByID
    
    } from "../controllers/fleje.js";

const router = express.Router();

router.post   ( "/fleje/register/:idbobina"             , createFleje            ), // Crear Fleje en registro de id Bobina    
router.put    ( "/fleje/update/:id"                     , updateFleje            ), // Actualizar Fleje por su id              
router.get    ( "/fleje/findid/:id"                     , findFlejeByID          ), // Encontrar Fleje Por id              Aqui me quede para las pruebas     
router.get    ( "/fleje/findcolada/:colada"             , findFlejeByColada      ), // Encontrar Fleje por colada                   
router.get    ( "/fleje/findcuerpofleje/:cuerpofleje"   , findFlejeByCuerpofleje ), // Encontrar Fleje por cuerpobobina            
router.get    ( "/flejes/list/"                         , findAllFlejes          ),  // Encontrar todos los Flejes                  
router.delete ( "/fleje/delete/:id"                     , deleteFlejeByID        )  // Borrar Bobina por id

export default router;

