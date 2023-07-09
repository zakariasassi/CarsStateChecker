const { DataTypes } = require('sequelize');
const CarModel = require('./Car')
const db = require('../config/db'); // Replace with your database connection

const InsuranceDocument = db.define('InsuranceDocument', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  companyName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  insuranceType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  documentNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  issuingBranch: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  insuranceStartDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  insuranceEndDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  customerNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  insuredName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  insuredAddress: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  
  Value_of_installment: {
    type: DataTypes.INTEGER,
    allowNull: false,
    
  },
  Tax : {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  Entry_fee : {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  Stamp : {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  Issuance_exp : {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  Total: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  createdAt: {
      type : DataTypes.DATEONLY
  },
  updatedAt: {
      type : DataTypes.DATEONLY
  }
}, {
    tableName : 'InsuranceDocument',
    freezeTableName : true, //
    timestamps : true,
});


CarModel.hasMany(InsuranceDocument)
InsuranceDocument.belongsTo(CarModel)


InsuranceDocument.sync({alter : true}).then(() => {
    console.log('InsuranceDocument sync successful')
})

module.exports = InsuranceDocument;
