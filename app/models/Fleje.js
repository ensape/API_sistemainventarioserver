import { DataTypes } from "sequelize";
import db from '../config/db.js'
import Bobina from './Bobina.js'

const Fleje = db.define("tb_fleje", {

    /**
    fleje_id : {
         type: DataTypes.INTEGER,
         allowNull: false,
         primaryKey: true,
         autoIncrement : true 
    },*/
     
    cuerpofleje             : {
        type : DataTypes.STRING,
        alloZwNull: false,
        unique: true
    },

    descripcion             : {
        type : DataTypes.STRING,
        allowNull : false,
    },

    tipo                    : {
        type : DataTypes.STRING,
        allowNull : false,
    },

    calibre                 : {
        type : DataTypes.STRING,
        allowNull : false
    },

    espesormilimetros       : {
        type : DataTypes.STRING,
        allowNull : false
    },

    colada                   : {
        type : DataTypes.STRING,
        allowNull : false,
    }, 

    almacen                 : {// 13
        type : DataTypes.STRING,
        allowNull : false
    },

    tipofleje               : {// boton select ( REDONDO, SOBRANTE, CORTAR )
        type : DataTypes.STRING,
        allowNull : false
    },

    medida                  : {
        type : DataTypes.STRING,
        allowNull : false
    },

    pesoNeto          : { // stockkilogramo
        type : DataTypes.STRING,
        allowNull : false
    },

    proveedor               : {
        type : DataTypes.STRING,
        allowNull : false,
    },

    fechallegada          : {
        type : DataTypes.DATE,
        allowNull : false
    },

    fechasalida           : {
        type : DataTypes.DATE,
        allowNull : false
    },

    tipocambio             : {
        type: DataTypes.STRING,
        allowNull : false
    },

    // pesokilogramofisico    : {
    //     type: DataTypes.STRING,
    //     allowNull : false
    // },

    cantidad               : {
        type: DataTypes.STRING,
        allowNull : false
    },

    tubosporcorte          : {
        type: DataTypes.STRING,
        allowNull : false
    },

    // status      : {   // boton select (disponible, no disponible)
    //     type: DataTypes.BOOLEAN,
    //     allowNull : false
    // },

    observacion             : {
        type : DataTypes.STRING,
        allowNull : false
    }
});
//  uno a muchos 
 //Bobina.hasMany( Fleje)
 Bobina.hasMany( Fleje, {foreignKey : "bobinaID",
  as: 'tb_fleje'})

 Fleje.belongsTo( Bobina, {foreignKey : "bobinaID",
  as: 'tb_bobina'})


export default Fleje;

