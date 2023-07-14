import React, { useEffect, useState } from "react";
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
import { useLocation } from "react-router-dom";



function UpdateIncurance() {

    const location = useLocation()

    const [companyName, setCompanyName] = useState(location.state.companyName);
    const [car_id, setCarID] = useState("");
    const [insuranceType, setInsuranceType] = useState(location.state.insuranceType);
    const [documentNumber, setDocumentNumber] = useState(location.state.documentNumber);
    const [issuingBranch, setIssuingBranch] = useState(location.state.issuingBranch);
    const [insuranceStartDate, setInsuranceStartDate] = useState(location.state.insuranceStartDate);
    const [insuranceEndDate, setInsuranceEndDate] = useState(location.state.insuranceEndDate);
    const [customerNumber, setCustomerNumber] = useState(location.state.customerNumber);
    const [insuredName, setInsuredName] = useState(location.state.insuredName);
    const [insuredAddress, setInsuredAddress] = useState(location.state.insuredAddress);
    const [Value_of_installment, setValueIfInstallment] = useState(location.state.Value_of_installment);
    const [Tax, setTax] = useState(location.state.Tax);
    const [Entry_fee, setEntryfee] = useState(location.state.Entry_fee);
    const [Stamp, setStamp] = useState(location.state.Stamp);
    const [Issuance_exp, setIssuanceExp] = useState(location.state.Issuance_exp);
    const [Total, setTotal] = useState(location.state.Total);
  
    //car details
  
    const [boardNumber, setBoardNumber] = useState(location.state.Car.boardNumber);
    const [chassisNumber, setChassisNumber] = useState(location.state.Car.chassisNumber);
    const [vehicleId, setVehicleId] = useState(location.state.Car.vehicleId);
    const [typeOfCar, setTypeOfCar] = useState(location.state.Car.typeOfCar);
    const [carClass, setCarClass] = useState(location.state.Car.carClass);
    const [carColour, setCarColor] = useState(location.state.Car.carColour);
    const [yearMade, setYearMade] = useState(location.state.Car.yearMade);
    const [countryOfManufacture, setCounterOfManufacture] = useState(location.state.Car.countryOfManufacture);
    const [carStatus, setCarStatus] = useState(location.state.Car.carStatus);
    const [horsePower, setHorsePower] = useState(location.state.Car.horsePower);
    const [carLoad, setCarLoad] = useState(location.state.Car.carLoad);
    const [fuelType, setFuelType] = useState(location.state.Car.fuelType);
    const [typeOfJob, setJopType] = useState(location.state.Car.typeOfJob);
    const [numberOfPassengers, setNUmberOfPassengers] = useState(location.state.Car.numberOfPassengers);
    const [placeOfRegistration, setPlaceOfRegestration] = useState(location.state.Car.placeOfRegistration);
  
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
          
      boardNumber, 
      chassisNumber, 
      vehicleId, 
      typeOfCar, 
      carClass, 
      carColour, 
      yearMade, 
      countryOfManufacture, 
      carStatus, 
      horsePower, 
      carLoad, 
      fuelType, 
      typeOfJob, 
      numberOfPassengers, 
      placeOfRegistration
        };
  
      try {
        const response = await axios
          .put(url + `/updateInsuranceDocument/${location.state.id}/${location.state.Car.carId}`, formData)
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

    useEffect(() => {
        console.log(location.state);
    },[])
  
    const handelcarsubbmit = (e) => {};

    
  return (
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
          <h2 className="text-2xl font-bold mb-6">تعديل تأمين السيارة</h2>
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
                    value={companyName}
                  />
                </div>

                <div>
                  <label className="block text-lg mb-2">نوع التأمين:</label>
                  <input
                    onChange={(e) => setInsuranceType(e.target.value)}
                    className="form-control"
                    type="text"
                    required
                    value={insuranceType}

                  />
                </div>

                <div>
                  <label className="block text-lg mb-2">رقم الوثيقة:</label>
                  <input
                    onChange={(e) => setDocumentNumber(e.target.value)}
                    className="form-control"
                    type="text"
                    required
                    value={documentNumber}

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
                    value={issuingBranch}

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
                    value={insuranceStartDate}

                  />
                </div>

                <div>
                  <label className="block text-lg mb-2">الى ظهر يوم:</label>
                  <input
                    onChange={(e) => setInsuranceEndDate(e.target.value)}
                    className="form-control"
                    type="date"
                    required
                    value={insuranceEndDate}

                  />
                </div>

                <div>
                  <label className="block text-lg mb-2">رقم الزبون:</label>
                  <input
                    onChange={(e) => setCustomerNumber(e.target.value)}
                    className="form-control"
                    type="text"
                    required
                    value={customerNumber}

                  />
                </div>

                <div>
                  <label className="block text-lg mb-2">اسم المؤمن له:</label>
                  <input
                    onChange={(e) => setInsuredName(e.target.value)}
                    className="form-control"
                    type="text"
                    required
                    value={insuredName}

                  />
                </div>

                <div>
                  <label className="block text-lg mb-2">عنوان المؤمن له:</label>
                  <input
                    onChange={(e) => setInsuredAddress(e.target.value)}
                    className="form-control"
                    type="text"
                    required
                    value={insuredAddress}

                  />
                </div>

                <div>
                  <label className="block text-lg mb-2"> قيمة القسط </label>
                  <input
                    onChange={(e) => setValueIfInstallment(e.target.value)}
                    className="form-control"
                    type="text"
                    required
                    value={Value_of_installment}
                  />
                </div>

                <div>
                  <label className="block text-lg mb-2"> الضريبة </label>
                  <input
                    onChange={(e) => setTax(e.target.value)}
                    className="form-control"
                    type="text"
                    required
                    value={Tax}

                  />
                </div>

                <div>
                  <label className="block text-lg mb-2"> رسوم الاشتراك </label>
                  <input
                    onChange={(e) => setEntryfee(e.target.value)}
                    className="form-control"
                    type="text"
                    required
                    value={Entry_fee}

                  />
                </div>

                <div>
                  <label className="block text-lg mb-2"> مصاريف الاصدار  </label>
                  <input
                    onChange={(e) => setIssuanceExp(e.target.value)}
                    className="form-control"
                    type="text"
                    required
                    value={Issuance_exp}

                  />
                </div>

                <div>
                  <label className="block text-lg mb-2"> الدمغة</label>
                  <input
                    onChange={(e) => setStamp(e.target.value)}
                    className="form-control"
                    type="text"
                    required
                    value={Stamp}

                  />
                </div>

                <div>
                  <label className="block text-lg mb-2"> الاجمالي</label>
                  <input value={Total} onChange={ (e) => setTotal(e.target.value)} className="form-control" type="text" required />
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
                    value={boardNumber}

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
                    value={chassisNumber}

                  />
                </div>

                <div>
                  <label className="block text-lg mb-2"> رقم المركبة </label>
                  <input
                    onChange={(e) => setVehicleId(e.target.value)}
                    className="form-control"
                    type="text"
                    required
                    value={vehicleId}

                  />
                </div>

                <div>
                  <label className="block text-lg mb-2"> نوع السيارة </label>
                  <input
                    onChange={(e) => setTypeOfCar(e.target.value)}
                    className="form-control"
                    type="text"
                    required
                    value={typeOfCar}

                  />
                </div>

                <div>
                  <label className="block text-lg mb-2"> صنف السيارة</label>
                  <input
                    onChange={(e) => setCarClass(e.target.value)}
                    className="form-control"
                    type="text"
                    required
                    value={carClass}

                  />
                </div>

                <div>
                  <label className="block text-lg mb-2"> لون السيارة</label>
                  <input
                    onChange={(e) => setCarColor(e.target.value)}
                    className="form-control"
                    type="text"
                    required
                    value={carColour}

                  />
                </div>

                <div>
                  <label className="block text-lg mb-2"> سنة صنع السيارة</label>
                  <input
                    onChange={(e) => setYearMade(e.target.value)}
                    className="form-control"
                    type="text"
                    required
                    value={yearMade}

                  />
                </div>

                <div>
                  <label className="block text-lg mb-2">بلد الصنع</label>
                  <input
                    onChange={(e) => setCounterOfManufacture(e.target.value)}
                    className="form-control"
                    type="text"
                    required
                    value={countryOfManufacture}

                  />
                </div>

                <div>
                  <label className="block text-lg mb-2"> حالة السيارة</label>
                  <input
                    onChange={(e) => setCarStatus(e.target.value)}
                    className="form-control"
                    type="text"
                    required
                    value={carStatus}

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
                    value={horsePower}

                  />
                </div>

                <div>
                  <label className="block text-lg mb-2"> الحمولة </label>
                  <input
                    onChange={(e) => setCarLoad(e.target.value)}
                    className="form-control"
                    type="text"
                    required
                    value={carLoad}

                  />
                </div>

                <div>
                  <label className="block text-lg mb-2"> نوع الوقود </label>
                  <input
                    onChange={(e) => setFuelType(e.target.value)}
                    className="form-control"
                    type="text"
                    required
                    value={fuelType}

                  />
                </div>

                <div>
                  <label className="block text-lg mb-2"> نوع العمل </label>
                  <input
                    onChange={(e) => setJopType(e.target.value)}
                    className="form-control"
                    type="text"
                    required
                    value={typeOfJob}

                  />
                </div>

                <div>
                  <label className="block text-lg mb-2"> عدد الركاب </label>
                  <input
                    onChange={(e) => setNUmberOfPassengers(e.target.value)}
                    className="form-control"
                    type="text"
                    required
                    value={numberOfPassengers}

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
                    value={placeOfRegistration}

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
  )
}

export default UpdateIncurance