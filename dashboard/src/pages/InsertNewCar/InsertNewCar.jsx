import React, { useState } from "react";
import { Box } from "@mui/material";
import { url } from "../../constent/url";
import axios from "axios";
function InsertNewCar() {
  const [car_id, setCarId] = useState("");
  const [license_section, setLicenceSection] = useState("");
  const [vehicle_number, setVehicleNumber] = useState("");
  const [usable_for, setUserbleFor] = useState("");
  const [examiners_name, setExaminersName] = useState("");
  const [examination_date, setExamiationDate] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(url + "/createLicenceDepartment", {
        car_id,
        license_section,
        vehicle_number,
        usable_for,
        examiners_name,
        examination_date,
      });

      console.log(response);

      // Handle response or perform additional actions
    } catch (error) {
      // Handle error
    }
  };

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
          <div className="p-lg-5" style={{ float: "right", width: "100%" }}>
            <div className="max-w-100 mx-auto" dir="rtl">
              <h2 className="text-2xl font-bold mb-4">بيانات السيارة</h2>

              <div className="grid grid-cols-2 gap-4">
                <div className="mb-4">
                  <label className="block text-lg mb-2">
                      الرقم التسلسلي للسيارة

                  </label>
                  <input
                    onChange={(e) => setCarId(e.target.value)}
                    className="form-control"
                    type="number"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-lg mb-2"> قسم الترخيص</label>
                  <input
                    onChange={(e) => setLicenceSection(e.target.value)}
                    className="form-control"
                    type="text"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-lg mb-2">رقم المركبة</label>
                  <input
                    onChange={(e) => setVehicleNumber(e.target.value)}
                    className="form-control"
                    type="number"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-lg mb-2">صالج للاستعمال لمدة</label>
                  <input
                    onChange={(e) => setUserbleFor(e.target.value)}
                    className="form-control"
                    type="text"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-lg mb-2">
                      اسم الفاحص
                  </label>
                  <input
                    onChange={(e) => setExaminersName(e.target.value)}
                    className="form-control"
                    type="text"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-lg mb-2">
                      التاريخ
                  </label>
                  <input
                    onChange={(e) => setExamiationDate(e.target.value)}
                    className="form-control"
                    type="date"
                  />
                </div>

           
              </div>

              <button
                onClick={(e) => {
                  handleSubmit(e);
                }}
                className="bg-green-600 w-64  text-white p-2"
              >
                حفظ
              </button>
            </div>
          </div>
        </div>
      </Box>
    </>
  );
}

export default InsertNewCar;
