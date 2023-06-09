const Admins = require('../model/Admins')





exports.createnewadmin  = async (req , res ) => {
    const {username , passwors , role , fullname , email } = req.body  

    if ( !username || !passwors || !role , !fullname || !email ) {
        res.json({
            message : 'الرجاء ادخال البيانات'
        })
    }else{
        await Admins.
    }
 }