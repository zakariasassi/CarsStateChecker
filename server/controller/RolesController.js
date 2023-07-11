const Roles = require('../model/Roles')

const { Sequelize } = require("sequelize");





exports.getallroles = async (req , res ) => {
    try {
        const roles =  await Roles.findAll();

        if(!roles) { return res.json({state : false , msg:"no data"})}

        res.json({state : true , data : roles})
    } catch (error) {
        res.status(500).json({state : false , msg:"Internal server error"})
    }

}