const Employes =  require('../model/Employes')






exports.createnewemploy = async (req , res) => {
    const  {username  , email , password , fullname } = req.body


    await Employes.create({
        username , email , password , fullname
    }).then(() => {
        res.json(
            {
                msg : 'تم انتشاء اضافة موظف استعلام',
                state : 1
            }
        )
    }).catch( err => {
        console.log(err)
        res.json({
            msg : 'مشكلة في النظام ',
            state : 0
        })
    })
}


exports.getallemployes = async (req , res ) => {

    await Employes.findAll().then((data)  => {
        res.json(
            {
                msg :'',
                state : 1,
                data : data
            }
        )
    }).catch( err => {
        console.log(err)
        res.json({
            msg : 'مشكلة في النظام ',
            state : 0
        })
    })
}

exports.getallemployesById = async (req , res ) => {
    res.state(200)
}

exports.updateEmploy = async (req , res ) => {
    res.state(200)
}

exports.deleteEmploy = async (req , res ) => {
    res.state(200)
}



exports.activeEmploy = async ( req , res , next ) => {
    const {id} = req.params

    await Employes.update({
      state: 1,
    },
    {
      where : {
        id: id,
      }
    }

    ).then(() => {
      res.json({
        message: 'Admin Activited',
        state:1
      })
    }).catch( err => {
      console.log(err)
    })
   }


   
   exports.restrictEmploy = async ( req , res , next ) => {
    const {id} = req.params

    await Employes.update({
      state: 0,
    },
    {
      where : {
        id: id,
      }
    }

    ).then(() => {
      res.json({
        message: 'Admin Restricted',
        state:1
      })
    }).catch( err => {
      console.log(err)
    })
   }



   exports.deleteEmploy = async ( req , res ) => {

    await Employes.destroy({
      where : {
        id : req.params.id,
      }
    }).then(() => {
      res.json({
        message  : 'Admin deleted',
        state : 1,
      })
    }).catch(err => {
      console.log(err)
    })
   }

