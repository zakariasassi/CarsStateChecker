import React from 'react'
import { Box } from '@mui/material';

function AddNewJomrocCard() {
  return (
    <>
        <Box
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 20,
          width: "100%",
        }}
      >
        <div className="w-100" style={{ height: "100vh" }}>
          <div className="p-lg-5" style={{float:'right' , width:'100%'}}>

            <h3 style={{textAlign:'right'}}>ادخال بيانات مركبة جديده</h3>
       
          <div className="row">
            <div className="col">
            <input type="text" className="form-control" id="inputEmail4" placeholder="بقسم تراخيص" />

            </div>
            <div className="col">

            <input type="date" className="form-control" id="inputEmail4" placeholder="بقسم تراخيص" />

            </div>

          </div>

          <div className="row">
            <div className="col mt-3">
            <input type="text" className="form-control" id="inputEmail4" placeholder="اعطي لها الرقم التالي" />

            </div>
            <div className="col ">

            <label>لاستعمالها</label>
            <select className="form-control">
              <option></option>
              <option>خاصة</option>
              <option>نقل</option>

            </select>
            </div>

          </div>


          <div className="row">
            <div className="col mt-3">
              <input className="form-control" placeholder="اسم المالك" />
              </div>

              <div className="col mt-3">
              <input className="form-control" placeholder="رقم بطاقة الشخصية" />
              </div>

              <div className="col ">

<label>الاصدار</label>
<select className="form-control">
  <option></option>
  <option>طرابلس</option>
  <option>بنغازي</option>
  <option>سبها</option>
  <option>مصراته</option>

</select>
</div>

              </div>



          </div>
        </div>
      </Box>
    </>
  )
}

export default AddNewJomrocCard
