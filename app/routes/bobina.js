import express from 'express'; // express para la rutas API
import {
       createBobina,
       updateBobina,
       findBobinaByID,
       findBobinaByColada,
       findBobinaByCuerpobobina,
       findAllBobinas,
       deleteBobinaByID,
       } from '../controllers/bobina.js';

const router = express.Router();


router.post   ( "/bobina/register"                      , createBobina            ), // Crear Bobina                      * Realizado               
router.put    ( "/bobina/update/:id"                    , updateBobina            ), // Actualizar Bobina                 * Realizado    
router.get    ( "/bobina/findid/:id"                    , findBobinaByID          ), // Encontrar Bobina Por id           * Realizado / Pendiente en Front         
router.get    ( "/bobina/findcolada/:colada"            , findBobinaByColada      ), // Encontrar Bobina por colada       * Realizado / Pendiente en Front      
router.get    ( "/bobina/findcuerpobobina/:cuerpobobina", findBobinaByCuerpobobina), // Encontrar Bobina por cuerpobobina * Realizado / Pendiente en Front               
router.get    ( "/bobinas/list/"                        , findAllBobinas          ), // Encontrar todas las Bobinas       * Realizado            
router.delete ( "/bobina/delete/:id"                    , deleteBobinaByID        )  // Borrar Bobina por id              * Realizado  

export default router;

