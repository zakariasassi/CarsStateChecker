const { DataTypes } = require("sequelize");
const CarModel = require('./Car')
const db = require("../config/db"); // Adjust the path to your Sequelize configuration file

const jomrok = db.define(
  "jomrok",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    release_permit_number: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    Place_of_customs_possession: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    ship_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    arrival_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    importer_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    customs_declaration_number: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    customs_receipt_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    goods_storage_location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    warehouse_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    parcels_count: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    parcels_details: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    total_amount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },

    shipping_policy: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    agent_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    goods_description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATEONLY,
    },
    updatedAt: {
      type: DataTypes.DATEONLY,
    },
  },
  {
    tableName: "jomrok",
    timestamps: true,
    freezeTableName: true,
  }
);


CarModel.hasMany(jomrok)
jomrok.belongsTo(CarModel)


jomrok.sync({ alter: true }).then(() => {
  console.log("jomrok Sync");
});
module.exports = jomrok;
