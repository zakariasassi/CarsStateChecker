import React from 'react'
import { Box } from '@mui/material';
import './Addusers.css'
function AddUser() {
  return (
    <>
        <Box style={{display:"flex" , flexDirection:"coulmn" , justifyContent:'center' , alignItems: "center" , padding: 20 , width:'100%' }}>
           <div className='w-100' style={{  height:'100vh'}}>
           <div className="container-fluid px-1 py-5 mx-auto">
    <div className="row d-flex justify-content-center">
        <div className="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
            <div className="card">
                <h5 className="text-center mb-4">فتح حساب مستخدم جديد</h5>
                <form className="form-card" >
                    <div className="row justify-content-between text-left">
                        <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">الاسم الاول<span className="text-danger"> *</span></label> <input type="text" id="fname" name="fname" placeholder="Enter your first name"  /> </div>
                        <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">اللقب<span className="text-danger"> *</span></label> <input type="text" id="lname" name="lname" placeholder="Enter your last name" /> </div>
                    </div>
                    <div className="row justify-content-between text-left">
                        <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">البريد الالكتروني<span className="text-danger"> *</span></label> <input type="text" id="email" name="email" placeholder="" /> </div>
                        <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">كلمة المرور<span className="text-danger"> *</span></label> <input type="text" id="mob" name="mob" placeholder="" /> </div>
                    </div>
                    <div className="row justify-content-between text-left">
                        <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">الصلاحية<span className="text-danger"> *</span></label> <input type="text" id="job" name="job" placeholder=""  /> </div>
                    </div>
               
                    <div className="row justify-content-end mt-3">
                        <div className="form-group "> <button type="submit" className="btn btn-primary w-50">انشاء حساب</button> </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
           </div>
          </Box>
    </>
  )
}

export default AddUser
