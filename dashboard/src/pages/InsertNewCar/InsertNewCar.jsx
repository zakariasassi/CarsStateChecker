import React from "react";
import { Box } from "@mui/material";
function InsertNewCar() {
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
  <h2 className="text-2xl font-bold mb-4">بيانات السيارة</h2>

  <div className="grid grid-cols-2 gap-4">
    <div className="mb-4">
      <label className="block text-lg mb-2">رقم اللوحة المعدنية:</label>
      <input className="form-control" type="text" />
    </div>

    <div className="mb-4">
      <label className="block text-lg mb-2">بلد الصنع:</label>
      <input className="form-control" type="text" />
    </div>

    <div className="mb-4">
      <label className="block text-lg mb-2">سنة الصنع:</label>
      <input className="form-control" type="text" />
    </div>

    <div className="mb-4">
      <label className="block text-lg mb-2">رقم الهيكل:</label>
      <input className="form-control" type="text" />
    </div>

    <div className="mb-4">
      <label className="block text-lg mb-2">قوة المحرك بالحصان:</label>
      <input className="form-control" type="text" />
    </div>

    <div className="mb-4">
      <label className="block text-lg mb-2">عدد الركاب المصرح بهم بخلاف السائق:</label>
      <input className="form-control" type="text" />
    </div>

    <div className="mb-4">
      <label className="block text-lg mb-2">الحمولة بالطن:</label>
      <input className="form-control" type="text" />
    </div>

    <div className="mb-4">
      <label className="block text-lg mb-2">الغرض من ترخيص السيارة:</label>
      <input className="form-control" type="text" />
    </div>

    <div className="mb-4">
      <label className="block text-lg mb-2">الجهة المقيد بها:</label>
      <input className="form-control" type="text" />
    </div>

    <div className="mb-4">
      <label className="block text-lg mb-2">النوع:</label>
      <input className="form-control" type="text" />
    </div>

    <div className="mb-4">
      <label className="block text-lg mb-2">اللون:</label>
      <input className="form-control" type="text" />
    </div>

    <div className="mb-4">
      <label className="block text-lg mb-2">رقم المحرك:</label>
      <input className="form-control" type="text" />
    </div>

    <button
      className='bg-green-600 w-64  text-white p-2'
    >
      حفظ
    </button>
  </div>
</div>





          </div>
        </div>
      </Box>
    </>
  );
}

export default InsertNewCar;
