// En el Carpeta Modelos en el Archivo Bobina.js donde se agredan las propiedades de materia prima extrayendo los datos del Front-end src/components/paginas/NuevaBobina
// bobina = cuerpobobina ,descripcion , tipo, calibre, anchoreal, espesorreal, stockkilogramos, proveedor, fechaingreso, colada, observacion

import { DataTypes, Model } from "sequelize";
import db from '../config/db.js'
 
// Bobina tiene muchos flejes
const Bobina = db.define( "tb_bobina",  {


    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement : true 
      },//////////// prueba id 

    cuerpobobina   : {
        type : DataTypes.STRING,
        allowNull: false,
        unique: true,
    },

    descripcion    : {
        type : DataTypes.STRING,
        allowNull : false,
    },

    tipo           : {
        type : DataTypes.STRING,
        allowNull : false,
    },

    calibre        : {
        type : DataTypes.STRING,
        allowNull : false
    },

    anchoreal      : {
        type : DataTypes.STRING,
        allowNull : false
    },

    espesorreal    : {
        type : DataTypes.STRING,
        allowNull : false
    },

    pesoActual : { // stockkilogramo
        type : DataTypes.STRING,
        allowNull : false
    },

    proveedor      : {
        type : DataTypes.STRING,
        allowNull : false,
    },

    fechaingreso   : {
        type : DataTypes.DATE,
        allowNull : false
    },

    tipocambio      : {
        type: DataTypes.STRING,
        allowNull : false
    },
     
    colada         : {
        type : DataTypes.STRING,
        allowNull : false,
    }, 

    // se agregaron nuevos datos  (numericos) como costodolarfactura, costodolarprorrateado, costomn, fisicokilogramo, cantidadrollo, sobrante
        costodolarfactura      : {
            type: DataTypes.STRING,
            allowNull : false
        },

        costodolarprorroteado    : {
            type: DataTypes.STRING,
            allowNull : false
        },

        costomn      : {
            type: DataTypes.STRING,
            allowNull : false
        },

        pesoNeto      : { // pesofisicokilogramo
            type: DataTypes.STRING,
            allowNull : false
        },

        sobrante      : {
            type: DataTypes.STRING,
            allowNull : false
        },
        
        // status      : {   // boton select (disponible, no disponible)
        //     type: DataTypes.BOOLEAN,
        //     allowNull : false
        // },
    
        observacion    : {
        type : DataTypes.STRING,
        allowNull : false
    }, 
 });

/** 
 db.sync({ alter : true }); // force true
 db.sync().then(() => {
     console.log(' La tabla tb_bobina ha sido creada con exito 😁');
    }).catch((error) => {
        console.error(' No se puede crear tabla 😑',  error);
    });
**/
export default Bobina;