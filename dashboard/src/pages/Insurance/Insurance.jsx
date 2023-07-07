import React, { useState } from "react";
import {
  FaCar,
  FaCalendarAlt,
  FaIdCard,
  FaUser,
  FaPhone,
  FaEnvelope,
  FaLocationArrow,
  FaCheckCircle,
} from "react-icons/fa";

import { Box } from "@mui/material";
import axios from "axios";
import { url } from "../../constent/url";

function Insurance() {
  const [companyName, setCompanyName] = useState("");
  const [car_id, setCarID] = useState("");
  const [insuranceType, setInsuranceType] = useState("");
  const [documentNumber, setDocumentNumber] = useState("");
  const [issuingBranch, setIssuingBranch] = useState("");
  const [insuranceStartDate, setInsuranceStartDate] = useState("");
  const [insuranceEndDate, setInsuranceEndDate] = useState("");
  const [customerNumber, setCustomerNumber] = useState("");
  const [insuredName, setInsuredName] = useState("");
  const [insuredAddress, setInsuredAddress] = useState("");
  const [Value_of_installment, setValueIfInstallment] = useState("");
  const [Tax, setTax] = useState("");
  const [Entry_fee, setEntryfee] = useState("");
  const [Stamp, setStamp] = useState("");
  const [Issuance_exp, setIssuanceExp] = useState("");
  const [Total, setTotal] = useState("");

  //car details

  const [boardNumber, setBoardNumber] = useState("");
  const [chassisNumber, setChassisNumber] = useState("");
  const [vehicleId, setVehicleId] = useState("");
  const [typeOfCar, setTypeOfCar] = useState("");
  const [carClass, setCarClass] = useState("");
  const [carColour, setCarColor] = useState("");
  const [yearMade, setYearMade] = useState("");
  const [countryOfManufacture, setCounterOfManufacture] = useState("");
  const [carStatus, setCarStatus] = useState("");
  const [horsePower, setHorsePower] = useState("");
  const [carLoad, setCarLoad] = useState("");
  const [fuelType, setFuelType] = useState("");
  const [typeOfJob, setJopType] = useState("");
  const [numberOfPassengers, setNUmberOfPassengers] = useState("");
  const [placeOfRegistration, setPlaceOfRegestration] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("zakaria");
    const formData = {
      car_id,
      companyName,
      insuranceType,
      documentNumber,
      issuingBranch,
      insuranceStartDate,
      insuranceEndDate,
      customerNumber,
      insuredName,
      insuredAddress,
      Value_of_installment,
      Tax,
      Entry_fee,
      Stamp,
      Issuance_exp,
      Total,
    };

    try {
      const response = await axios
        .post(url + "/createInsuranceDocument", formData)
        .then((res) => {
          if (res.data.success === true) {
            // setCompanyName('');
            // setInsuranceType('');
            // setDocumentNumber('');
            // setIssuingBranch('');
            // setInsuranceStartDate('');
            // setInsuranceEndDate('');
            // setCustomerNumber('');
            // setInsuredName('');
            // setInsuredAddress('');
          } else {
            // setCompanyName('');
            // setInsuranceType('');
            // setDocumentNumber('');
            // setIssuingBranch('');
            // setInsuranceStartDate('');
            // setInsuranceEndDate('');
            // setCustomerNumber('');
            // setInsuredName('');
            // setInsuredAddress('');
          }
        });
      // Reset the form after successful submission
    } catch (error) {
      console.error(error);
    }
  };

  const handelcarsubbmit = (e) => {};

  return (
    <>
      <Box
        style={{
          display: "flex",
          flexDirection: "coulmn",
          justifyContent: "center",
          alignItems: "center",
          padding: 20,
          width: "100%",
        }}
      >
        <div
          className="w-full mx-auto p-8 bg-white rounded shadow-md"
          dir="rtl"
        >
          <h2 className="text-2xl font-bold mb-6">تعبئة تأمين السيارة</h2>
          <div className="max-w-100 mx-auto">
            <h2 className="text-2xl font-bold mb-4">بيانات التأمين</h2>

            <form className="w-100">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-lg mb-2">اسم الشركة:</label>
                  <input
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="form-control"
                    type="text"
                    required
                  />
                </div>

                <div>
                  <label className="block text-lg mb-2">نوع التأمين:</label>
                  <input
                    onChange={(e) => setInsuranceType(e.target.value)}
                    className="form-control"
                    type="text"
                    required
                  />
                </div>

                <div>
                  <label className="block text-lg mb-2">رقم الوثيقة:</label>
                  <input
                    onChange={(e) => setDocumentNumber(e.target.value)}
                    className="form-control"
                    type="text"
                    required
                  />
                </div>

                <div>
                  <label className="block text-lg mb-2">
                    اسم الفرع أو المكتب الذي أصدر الوثيقة:
                  </label>
                  <input
                    onChange={(e) => setIssuingBranch(e.target.value)}
                    className="form-control"
                    type="text"
                    required
                  />
                </div>

                <div>
                  <label className="block text-lg mb-2">
                    مدة التأمين من ظهر يوم:
                  </label>
                  <input
                    onChange={(e) => setInsuranceStartDate(e.target.value)}
                    className="form-control"
                    type="date"
                    required
                  />
                </div>

                <div>
                  <label className="block text-lg mb-2">الى ظهر يوم:</label>
                  <input
                    onChange={(e) => setInsuranceEndDate(e.target.value)}
                    className="form-control"
                    type="date"
                    required
                  />
                </div>

                <div>
                  <label className="block text-lg mb-2">رقم الزبون:</label>
                  <input
                    onChange={(e) => setCustomerNumber(e.target.value)}
                    className="form-control"
                    type="text"
                    required
                  />
                </div>

                <div>
                  <label className="block text-lg mb-2">اسم المؤمن له:</label>
                  <input
                    onChange={(e) => setInsuredName(e.target.value)}
                    className="form-control"
                    type="text"
                    required
                  />
                </div>

                <div>
                  <label className="block text-lg mb-2">عنوان المؤمن له:</label>
                  <input
                    onChange={(e) => setInsuredAddress(e.target.value)}
                    className="form-control"
                    type="text"
                    required
                  />
                </div>

                <div>
                  <label className="block text-lg mb-2"> قيمة القسط </label>
                  <input
                    onChange={(e) => setValueIfInstallment(e.target.value)}
                    className="form-control"
                    type="text"
                    required
                  />
                </div>

                <div>
                  <label className="block text-lg mb-2"> الضريبة </label>
                  <input
                    onChange={(e) => setTax(e.target.value)}
                    className="form-control"
                    type="text"
                    required
                  />
                </div>

                <div>
                  <label className="block text-lg mb-2"> رسوم الاشتراك </label>
                  <input
                    onChange={(e) => setEntryfee(e.target.value)}
                    className="form-control"
                    type="text"
                    required
                  />
                </div>

                <div>
                  <label className="block text-lg mb-2"> الدمغة</label>
                  <input
                    onChange={(e) => setIssuanceExp(e.target.value)}
                    className="form-control"
                    type="text"
                    required
                  />
                </div>

                <div>
                  <label className="block text-lg mb-2"> الاجمالي</label>
                  <input className="form-control" type="text" required />
                </div>

                <span className="text-2xl font-bold mb-4 ">بيانات السيارة</span>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4" dir="rtl">
                {/* car details data */}

                <div>
                  <label className="block text-lg mb-2"> رقم اللوحة</label>
                  <input
                    onChange={(e) => setBoardNumber(e.target.value)}
                    className="form-control"
                    type="text"
                    required
                  />
                </div>

                <div>
                  <label className="block text-lg mb-2">
                    {" "}
                    رقم هيكل السيارة{" "}
                  </label>
                  <input
                    onChange={(e) => setChassisNumber(e.target.value)}
                    className="form-control"
                    type="text"
                    required
                  />
                </div>

                <div>
                  <label className="block text-lg mb-2"> رقم المركبة </label>
                  <input
                    onChange={(e) => setVehicleId(e.target.value)}
                    className="form-control"
                    type="text"
                    required
                  />
                </div>

                <div>
                  <label className="block text-lg mb-2"> نوع السيارة </label>
                  <input
                    onChange={(e) => setTypeOfCar(e.target.value)}
                    className="form-control"
                    type="text"
                    required
                  />
                </div>

                <div>
                  <label className="block text-lg mb-2"> صنف السيارة</label>
                  <input
                    onChange={(e) => setCarClass(e.target.value)}
                    className="form-control"
                    type="text"
                    required
                  />
                </div>

                <div>
                  <label className="block text-lg mb-2"> لون السيارة</label>
                  <input
                    onChange={(e) => setCarColor(e.target.value)}
                    className="form-control"
                    type="text"
                    required
                  />
                </div>

                <div>
                  <label className="block text-lg mb-2"> سنة صنع السيارة</label>
                  <input
                    onChange={(e) => setYearMade(e.target.value)}
                    className="form-control"
                    type="text"
                    required
                  />
                </div>

                <div>
                  <label className="block text-lg mb-2">بلد الصنع</label>
                  <input
                    onChange={(e) => setCounterOfManufacture(e.target.value)}
                    className="form-control"
                    type="text"
                    required
                  />
                </div>

                <div>
                  <label className="block text-lg mb-2"> حالة السيارة</label>
                  <input
                    onChange={(e) => setCarStatus(e.target.value)}
                    className="form-control"
                    type="text"
                    required
                  />
                </div>

                <div>
                  <label className="block text-lg mb-2">
                    {" "}
                    قوة السيارة بالحصان
                  </label>
                  <input
                    onChange={(e) => setHorsePower(e.target.value)}
                    className="form-control"
                    type="text"
                    required
                  />
                </div>

                <div>
                  <label className="block text-lg mb-2"> الحمولة </label>
                  <input
                    onChange={(e) => setCarLoad(e.target.value)}
                    className="form-control"
                    type="text"
                    required
                  />
                </div>

                <div>
                  <label className="block text-lg mb-2"> نوع الوقود </label>
                  <input
                    onChange={(e) => setFuelType(e.target.value)}
                    className="form-control"
                    type="text"
                    required
                  />
                </div>

                <div>
                  <label className="block text-lg mb-2"> نوع العمل </label>
                  <input
                    onChange={(e) => setJopType(e.target.value)}
                    className="form-control"
                    type="text"
                    required
                  />
                </div>

                <div>
                  <label className="block text-lg mb-2"> عدد الركاب </label>
                  <input
                    onChange={(e) => setNUmberOfPassengers(e.target.value)}
                    className="form-control"
                    type="text"
                    required
                  />
                </div>

                <div>
                  <label className="block text-lg mb-2">
                    {" "}
                    مكان تسجيل السيارة
                  </label>
                  <input
                    onChange={(e) => setPlaceOfRegestration(e.target.value)}
                    className="form-control"
                    type="text"
                    required
                  />
                </div>
              </div>
              <div className="text-right">
                <button
                  onClick={(e) => {
                    handleSubmit(e);
                  }}
                  className="btn hover:bg-green-900 text-white  bg-green-500 w-full"
                >
                  حفظ
                </button>
              </div>
            </form>
          </div>
        </div>
      </Box>
    </>
  );
}

export default Insurance;
