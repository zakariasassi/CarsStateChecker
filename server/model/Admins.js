const {Sequelize , DataTypes} = require('sequelize');
const db = require('../config/db');

const admin =  db.define('admins' , {
    id : {
        type : DataTypes.INTEGER,
        allowNull : false,
        autoIncrement : true,
        primaryKey : true,
    },
    username :{
        type : DataTypes.STRING,
        allowNull : false,
    },
    email : {
        type : DataTypes.STRING,
        allowNull : false,
    },
    password: {
        type : DataTypes.STRING,
        allowNull : false,
        
    },
fullname : {
      type : DataTypes.STRING,
        allowNull : false,
        
},

    role : {
        type : DataTypes.INTEGER,
        allowNull : false, //Make sure to change this
    },


    state : {
        type : DataTypes.INTEGER,
        allowNull : false,
        defaultValue : 1, 
    },
    create_at : {
        type : DataTypes.DATEONLY,
        defaultValue : Sequelize.NOW , 
        allowNull: false,
    },
    last_login : {
        type : DataTypes.DATEONLY,
        allowNull: true,
    },
    createdAt: {
        type : DataTypes.DATEONLY
    },
    updatedAt: {
        type : DataTypes.DATEONLY
    }
    
    
},{
    freezeTableName : true,
    tableName : 'admins',
    timestamps :true,
});


admin.sync({alter : true}).then(() => { console.log("Admins table sync successful")});


module.exports = admin;