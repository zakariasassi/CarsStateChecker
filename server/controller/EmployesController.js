const Employes =  require('../model/Employes')






exports.createnewemploy = async (req , res) => {
    const  {username  , email , password , fullname , role } = req.body
    if(!username || !email || !password || !fullname || !role)
{
  return   (
    res.json({
      msg : 'يرجي تعبئة كل البيانات',
      state : 0
  })
  )
}

 const finuserame = await Employes.findOne({
  where :{
    username  : username
  }
})

if(finuserame){
  return(
    res.json({
      
        msg : ' اسم المستخدم مستعمل ',
        state : 1
    
    })
  )
}
    await Employes.create({
        username , email , password , fullname , role
    }).then(() => {
        res.json(
            {
                msg : 'تم اضافة موظف استعلام',
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
        message: 'تم تفعيل الحساب',
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
        message: 'تم تفييد الحساب',
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
        message  : 'تم حدف الحساب',
        state : 1,
      })
    }).catch(err => {
      console.log(err)
    })
   }







   exports.loginemployee = async (req , res) => {
      const {username , password } = req.body ;

      console.log(req.body)
      await Employes.findOne({
        where : {
          username : username
        }
      }).then( resulte => {

        if(resulte.state === 0 ) {
          res.json({
            msg : "تم تقييد الحساب راجع الادارة",
            state: 0
          })
        }else {
          if(resulte){
            if(resulte.password === password){
              res.status(200).json({
                msg : "sfasasf",
                state: 1 , 
                user : resulte
              })
            }else{
              res.json({
                msg : "خطآ في كلمة المرور",
                state: 0
              })
            }
          }else{
            res.json({
              msg : "اسم المتسخدم غير موجود",
              state: 0
            })
          }
        }

   
      }).catch(err => {
        res.status(401).json({
          msg : "اسم المتسخدم غير موجود",
          state: 0
        })
        console.log(err)
      })

 
   }