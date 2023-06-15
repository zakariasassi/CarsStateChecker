const { DataTypes } = require('sequelize');
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
}, {
    tableName : 'InsuranceDocument',
    freezeTableName : true, //
    timestamps : true,
});


InsuranceDocument.sync({alter : true}).then(() => {
    console.log('InsuranceDocument sync successful')
})

module.exports = InsuranceDocument;
