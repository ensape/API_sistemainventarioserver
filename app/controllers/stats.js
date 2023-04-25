/* Consulta de la vista de total de flejes por bobina*/
// SELECT * from vw_total_flejes_por_bobina;

import Bobina from '../models/Bobina';
import Fleje from '../models/Fleje';

const viewTotalFlejesByBobina = async ( req, res) => {
    const TotalFlejesByBobina = await Fleje.sequelize.query('SELECT * from vw_total_flejes_por_bobina');
    res.json(TotalFlejesByBobina)
};

export  {
    viewTotalFlejesByBobina
}