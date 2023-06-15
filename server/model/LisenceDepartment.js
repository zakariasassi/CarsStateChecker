const {Sequelize , DataTypes} = require('sequelize');
const db = require('../config/db');






const licnencesdepartment =  db.define('licnencesdepartment' , {
    id: {
        type : DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement : true,
    },
    bord_number : {
        type : DataTypes.INTEGER,
        allowNullValues : false
    },
    counrty  : {
        type : DataTypes.STRING,
        allowNullValues : false
    },
    year_made  : {
        type : DataTypes.INTEGER,
        allowNullValues : false
    },
    body_number : {
        type : DataTypes.INTEGER,
        allowNullValues : false
    },
    engine_power : {
        type : DataTypes.INTEGER,
        allowNullValues : false
    },
    passngers_number : {
        type : DataTypes.INTEGER,
        allowNullValues : false
    },
    wighet  : {
        type : DataTypes.INTEGER,
        allowNullValues : false
    },
    type_of_licence : {
        type : DataTypes.STRING,
        allowNull: false
    },
    place_linked : {
        type : DataTypes.STRING,
        allowNull: false
    },
    type : {
        type : DataTypes.STRING,
        allowNull: false
    },
    car_color : {
        type : DataTypes.STRING,
        allowNull: false
    },

    engine_number : {
        type : DataTypes.INTEGER,
        allowNull: false
    },
    createdAt: {
        type : DataTypes.DATEONLY
    },
    updatedAt: {
        type : DataTypes.DATEONLY
    }

},{
    tableName : 'licnencesdepartment',
    timestamps : true,
    freezeTableName : true,

})



licnencesdepartment.sync({alter : true} ).then(() => {
    console.log("licnencesdepartment Sync")
})


module.exports = licnencesdepartment