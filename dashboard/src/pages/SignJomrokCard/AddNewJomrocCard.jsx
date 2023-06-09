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

       
            <div className="max-w-100 mx-auto" dir='rtl'>
  <h2 className="text-2xl font-bold mb-4">بيانات الجمارك </h2>

  <div className="grid grid-cols-3 gap-4 mb-4">
    <div>
      <label className="block text-lg mb-2">رقم إذن الإفراج الجمركي:</label>
      <input className="form-control" type="text" />
    </div>

    <div>
      <label className="block text-lg mb-2">يفرج عن البضاعة الموضحة أدناه من الحيازة الجمركية:</label>
      <input className="form-control" type="text" />
    </div>

    <div>
      <label className="block text-lg mb-2">اسم السفينة:</label>
      <input className="form-control" type="text" />
    </div>
  </div>

  <div className="grid grid-cols-2 gap-4">
    <div>
      <label className="block text-lg mb-2">تاريخ وصولها:</label>
      <input className="form-control" type="text" />
    </div>

    <div>
      <label className="block text-lg mb-2">اسم المستورد:</label>
      <input className="form-control" type="text" />
    </div>

    <div>
      <label className="block text-lg mb-2">رقم الإقرار الجمركي:</label>
      <input className="form-control" type="text" />
    </div>

    <div>
      <label className="block text-lg mb-2">رقم الإيصال الجمركي:</label>
      <input className="form-control" type="text" />
    </div>

    <div>
      <label className="block text-lg mb-2">مكان تخزين البضاعة:</label>
      <input className="form-control" type="text" />
    </div>

    <div>
      <label className="block text-lg mb-2">رقم المخزن:</label>
      <input className="form-control" type="text" />
    </div>

    <div>
      <label className="block text-lg mb-2">عدد الطرود:</label>
      <input className="form-control" type="text" />
    </div>

    <div>
      <label className="block text-lg mb-2">أرقام ووصف الطرود:</label>
      <input className="form-control" type="text" />
    </div>

    <div>
      <label className="block text-lg mb-2">المبلغ الإجمالي:</label>
      <input className="form-control" type="text" />
    </div>

    <div>
      <label className="block text-lg mb-2">بوليصة الشحن:</label>
      <input className="form-control" type="text" />
    </div>

    <div>
      <label className="block text-lg mb-2">اسم الوكيل:</label>
      <input className="form-control" type="text" />
    </div>

    <div>
      <label className="block text-lg mb-2">تاريخه:</label>
      <input className="form-control" type="text" />
    </div>

    <div>
      <label className="block text-lg mb-2">وصف البضائع:</label>
      <input className="form-control" type="text" />
    </div>
  </div>
</div>



          </div>
        </div>
      </Box>
    </>
  )
}

export default AddNewJomrocCard
