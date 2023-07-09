
const {Sequelize , DataTypes} = require('sequelize');

const db = require('../config/db');


const Car = db.define('Car', {
    carId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    boardNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    chassisNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    vehicleId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    typeOfCar: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    carClass: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    carColour: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    yearMade: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    countryOfManufacture: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    carStatus: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    horsePower: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    carLoad: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fuelType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    typeOfJob: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    numberOfPassengers: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    placeOfRegistration: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
        type : DataTypes.DATEONLY
    },
    updatedAt: {
        type : DataTypes.DATEONLY
    }
    
  }, {
    freezeTableName : true,
    tableName: 'cars',
    timestamps: false,
    
  });



  
  Car.sync({alter : true}).then(() => { console.log("Car table sync successful")});


  module.exports = Car;