import Fleje from "../models/Fleje.js"
import Bobina from "../models/Bobina.js";
// Crear Fleje >> POST Crear
const createFleje = async ( req, res ) => {

    const { body } = req;
    const { idbobina } = req.params

    // game = fleje
    // player = bobina

    try {
        const fleje = Fleje.build ( body );
        fleje.bobinaID = idbobina;

        await fleje.save()
                          .then ( result => {
                            res.json( result );
                            return res.json({mensaje: `El Fleje ${fleje} ha sido creado`});
                           })
                           .catch( err => { 
                            switch ( err.name ) {
                                case "SequelizeValidationError":
                                    res.json( err.errors [ 0 ].message)
                                    break;
                                case "SequelizeDatabaseError":
                                    res.json( err.original.sqlMessage )
                                    break;
                            }
                           });    
                           
            //actualizar el peso actual de la bobina               

           // const bobina = "" /*SQl2 para buscar la bobina con id del fleje.bobinaID;*/
            /*bobina.pesoActual = bobina.pesoActual - fleje.pesoNeto
            bobina.save();
            
            */
    

    } catch ( err ) {
        res.json( err )
    }
}

// Actualizar Fleje >> PUT Actualizar o Modificar
const updateFleje = async( req, res ) => {

    const { id } = req.params;
    const { body } = req;

    try {
        const fleje = await Fleje.findOne(
            { where : {id }
        });
        
        if ( !fleje ) {
            return res.status(404).json({
                mensaje: 'No existe la Fleje con el ID: ' + id 
            })
        } 
        await fleje.update(body);
        res.json( fleje);
    } catch ( err ) {
        res.json(err)
    }
};

// Encontrar Fleje por ID >> GET Consultar Informacion
const findFlejeByID = async( req, res ) => {

    const { id } = req.params;
    const fleje = await Fleje.findOne(
        { where: {id} 
    });

    if ( !fleje ) {
        return res.status(400).json({
            mensaje: 'No existe el fleje con el ID: ' + id + '.'
        });
    } 
    res.json ( fleje );
};


// Econtrar Fleje por Colada >> GET Consultar Informacion
const findFlejeByColada  = async ( req, res ) => {

    const { colada } = req.params;
    const fleje = await Fleje.findOne(
        { where: {colada} 
    });

    if ( !fleje ) {
        return res.status(404).json({
            mensaje: `No existe la Fleje con la colada: ${colada}`
        })
    }
    res.json( fleje );
}; 

// Encontrar Fleje por cuerpofleje >> GET Consultar Informacion
const findFlejeByCuerpofleje = async( req, res ) => {

    const { cuerpofleje } = req.params;
    const fleje = await Fleje.findOne({ where: {cuerpofleje}});

    if ( !fleje ) {
        return res.status(404).json({
            mensaje: `No existe la Fleje con el cuerpo bobina: ${cuerpofleje}`
        })
    }
    res.json( fleje );
};

// Encontrar todos los Flejes >> GET Consultar Informacion
const findAllFlejes = async( req, res ) => {

    const allFlejes = await Fleje.findAll();
    res.json( allFlejes )
    return false;
    
};


// Eliminar Fleje por ID >> DELETE Eliminar
const deleteFlejeByID = async( req, res ) => {

    const { id } = req.params;
    const fleje = await Fleje.findOne({ where : { id } });
 
    if ( !fleje ) {
        return res.status(404).json({
            mensaje : `No existe la Fleje con el ID: ${id}`
        });
    }
    await fleje.destroy();
    res.json({mensaje : `La Fleje con ID ${id} ha sido eliminado`});

};

export {
    createFleje,
    updateFleje,
    findFlejeByID,
    findFlejeByColada,
    findFlejeByCuerpofleje,
    findAllFlejes,
    deleteFlejeByID
}