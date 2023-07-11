import React, { useState } from "react";
import { Box } from "@mui/material";
import { url } from "../../constent/url";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

function InsertNewCar() {

  const notifyerr = (msg) => toast.error(msg);
  const notifyok = (msg) => toast.success(msg);



  const [license_section, setLicenceSection] = useState("");
  const [vehicle_number, setVehicleNumber] = useState("");
  const [usable_for, setUserbleFor] = useState("");
  const [examiners_name, setExaminersName] = useState("");
  const [examination_date, setExamiationDate] = useState("");



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

    if (
      license_section === ""  ||
      vehicle_number === ""  ||
      usable_for === ""  ||
      examiners_name === ""  ||
      examination_date === ""  ||




      //create car 
      boardNumber === ""  || 
      chassisNumber === ""  || 
      vehicleId === ""  || 
      typeOfCar === ""  || 
      carClass === ""  || 
      carColour === ""  || 
      yearMade === ""  || 
      countryOfManufacture === ""  || 
      carStatus === ""  || 
      horsePower === ""  || 
      carLoad === ""  || 
      fuelType === ""  || 
      typeOfJob === ""  || 
      numberOfPassengers === ""  || 
      placeOfRegistration === "" 
    ){
      notifyerr("الرجاء تعبئة كل الحقول")
    }else{
      try {
        const response = await axios.post(url + "/createLicenceDepartment", {
          license_section,
          vehicle_number,
          usable_for,
          examiners_name,
          examination_date,
  
  
  
  
          //create car 
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
  
  
        });
  
        console.log(response)
        if(response.data.success === true){
          notifyok("تمت عملية الاضافة بنجاح")
        }else{
          notifyerr("هناك مشكلة في عملية الاضافة")
        }
  
        // Handle response or perform additional actions
      } catch (error) {
        console.log(error)
      }
    }



  };

  return (
    <>
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          padding: 20,
          width: "100%",
        }}
      >
  <Toaster />
      
        <div className="w-100" >
          <div className="p-lg-5" >
            <div className="max-w-100 mx-auto" dir="rtl">
              <h2 className="text-2xl font-bold mb-4">بيانات السيارة</h2>

              <div className="grid grid-cols-2 gap-4">
                {/* <div className="mb-4">
                  <label className="block text-lg mb-2">
                      الرقم التسلسلي للسيارة

                  </label>
                  <input
                    onChange={(e) => setCarId(e.target.value)}
                    className="form-control"
                    type="number"
                  />
                </div> */}

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
                  required
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

                  <div className="mt-2  p-3 border-4 border-green-500">
                  <p className="text-2xl font-bold  text-center ">بيانات السيارة</p>

                  </div>
              <div className="grid grid-cols-2 gap-4 mb-4 w-full mt-10" dir="rtl">
                {/* car details data */}

                <div>
                  <label className="block text-lg mb-2"> رقم اللوحة</label>
                  <input
                    onChange={(e) => setBoardNumber(e.target.value)}
                    className="form-control"
                    type="number"
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
                    type="number"
                    required
                  />
                </div>

                <div>
                  <label className="block text-lg mb-2"> رقم المركبة </label>
                  <input
                    onChange={(e) => setVehicleId(e.target.value)}
                    className="form-control"
                    type="number"
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
                    type="number"
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
                    type="number"
                    required
                  />
                </div>

                <div>
                  <label className="block text-lg mb-2"> الحمولة </label>
                  <input
                    onChange={(e) => setCarLoad(e.target.value)}
                    className="form-control"
                    type="number"
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
                    type="number"
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
