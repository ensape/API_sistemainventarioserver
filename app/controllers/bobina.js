
import Bobina from '../models/Bobina.js';
import {where} from 'sequelize';
 // game = fleje
// player = bobina

// Crear Bobina >> POST Crear
const createBobina = async( req, res ) => {

    const { cuerpobobina, descripcion, tipo, calibre, anchoreal, espesorreal, pesoActual,
            proveedor, fechaingreso, tipocambio, colada, 
            costodolarfactura, costodolarprorroteado, costomn, pesoNeto, sobrante, estado,  // se agregaron NUEVOS CAMPOS
            observacion } = req.body;
    try {
        const existsBobinacuerpobobina = await Bobina.findOne( { where: { cuerpobobina } })
    
        if ( existsBobinacuerpobobina ) {
             return res.json({ mensaje: `El cuerpo bobina: ${cuerpobobina} ya esta en existencia` })
        } else {
            const newBobina = await Bobina.create ( {     
                cuerpobobina,           
                descripcion,
                tipo,
                calibre,
                anchoreal,
                espesorreal,
                pesoActual,
                proveedor, 
                fechaingreso,
                tipocambio,
                colada,
                    costodolarfactura,
                    costodolarprorroteado,
                    costomn,
                    pesoNeto,
                    sobrante,
                    estado,
                observacion
            } )
            return res.json({ mensaje : ` La Bobina ${newBobina} ha sido creado con exito` });
        }
    } catch( error ) {
        console.log( error )
        return res.json({ mensaje : `Error al crear la Bobina ` })
    }
};

// Actualizar Bobina >> PUT Actualizar o Modificar
const updateBobina = async( req, res ) => {

    const { id } = req.params;
    const { body } = req;

    try {
        const bobina = await Bobina.findOne(
            { where : {id }
        });
        
        if ( !bobina ) {
            return res.status(404).json({
                mensaje: 'No existe la Bobina con el ID: ' + id 
            })
        } 
        await bobina.update(body);
        res.json( bobina);
    } catch ( err ) {
        res.json(err)
    }
};

// Encontrar Bobina por ID >> GET Consultar Informacion
const findBobinaByID = async( req, res ) => {

    const { id } = req.params;
    const bobina = await Bobina.findOne({ where: {id} });

    if ( !bobina ) {
        return res.status(400).json({
            mensaje: 'No existe la Bobina con el ID: ' + id + '.'
        });
    } res.json ( bobina );
};

// Econtrar Bobina por Colada >> GET Consultar Informacion
const findBobinaByColada  = async ( req, res ) => {

    const { colada } = req.params;
    const bobina = await Bobina.findOne({ where: {colada} });

    if ( !bobina ) {
        return res.status(404).json({
            mensaje: `No existe la Bobina con la colada: ${colada}`
        })
    }
    res.json( bobina );
}; 

// Encontrar Bobina por cuerpobobina >> GET Consultar Informacion
const findBobinaByCuerpobobina = async( req, res ) => {

    const { cuerpobobina } = req.params;
    const bobina = await Bobina.findOne({ where: {cuerpobobina}});

    if ( !bobina ) {
        return res.status(404).json({
            mensaje: `No existe la Bobina con el cuerpo bobina: ${cuerpobobina}`
        })
    }
    res.json( bobina );
};

// Encontrar todas las Bobinas >> GET Consultar Informacion
const findAllBobinas = async( req, res ) => {

    const allBobinas = await Bobina.findAll();
    res.json( allBobinas )
    return false;
};

// Eliminar Bobina por ID >> DELETE Eliminar
const deleteBobinaByID = async( req, res ) => {

    const { id } = req.params;
    const bobina = await Bobina.findOne({ where : { id } });
 
    if ( !bobina ) {
        return res.status(404).json({
            mensaje : `No existe la Bobina con el ID: ${id} `
        });
    }
    await bobina.destroy();
    res.json({mensaje : `La Bobina con ID ${id} ha sido eliminado`});

};






export  {
    createBobina,
    updateBobina,
    findBobinaByID,
    findBobinaByColada,
    findBobinaByCuerpobobina,
    findAllBobinas,
    deleteBobinaByID,
    
}



