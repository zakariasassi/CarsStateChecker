const Admins = require('../model/Admins')





exports.createnewadmin  = async (req , res ) => {
    const {username , password , role , fullname , email } = req.body  

    if ( !username || !password || !role , !fullname || !email ) {
        res.json({
            message : 'الرجاء ادخال البيانات'
        })
    }else{
        await Admins.create({
            username,
            password ,
            role,
            fullname,
            email
        }).then( resulte => {
            if(resulte) {
                res.json({
                    message : 'تم انشاء حساب المستخدم ',
                    state : 1
                    
                })
            }else{
                res.json({
                    message : '  فشل انشاء حساب المستخدم ',
                    state : 0
                    
                })   
            }
        }).catch(err => {
            console.log(err)
            res.json({
                message : '  فشل انشاء حساب المستخدم ',
                state : 0
                
            })   
        })
    }
 }



 exports.loginadmin = async (req, res) => {
    const {username , password} = req.body
    await Admins.findOne({
        where : {
            username : username
        }
    }).then(( resulte ) => {
            console.log(resulte)
            if(resulte.password === password) {
                res.json({
                    message : 'تمت مصادقة الحساب',
                    state : 1
                    
                }) 
          
         }else{
            res.json({
                message : 'كلمة المرور خطآ',
                state : 1
                
            }) 
         }
    } ).catch ( err => {
        console.log(err)
        res.json({
            message : 'قشلت مصادقة الحساب',
            state : 0
            
        }) 
    })
 }