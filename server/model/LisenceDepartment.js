const {Sequelize , DataTypes} = require('sequelize');
const db = require('../config/db');






const licnencesdepartment =  db.define('licnencesdepartment' , {
    id: {
        type : DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement : true,
    },
    car_id : {
        type : DataTypes.INTEGER,
        allowNullValues : false
    },
    license_section  : {
        type : DataTypes.STRING,
        allowNullValues : false
    },
    vehicle_number : {
        type : DataTypes.INTEGER,
        allowNullValues : false
    },
    usable_for : {
        type : DataTypes.STRING,
        allowNullValues : false
    },
    examiners_name : {
        type : DataTypes.STRING,
        allowNullValues : false
    },
    examination_date : {
        type : DataTypes.DATE,
        allowNullValues : false
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