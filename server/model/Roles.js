const {Sequelize , DataTypes} = require('sequelize');

const db = require('../config/db');




const Roles = db.define("Roles" , {
    id : {
        type : DataTypes.INTEGER,
        autoIncrement : true , 
        primaryKey : true
    },
    name : {
        type : DataTypes.STRING,
        allowNull : false ,
    },
    
},{
    timestamps : true ,
    tableName : 'Roles',
    freezeTableName : true
}
)




Roles.sync({alter : true}).then(() => console.log("Roles Sync"))




module.exports = Roles