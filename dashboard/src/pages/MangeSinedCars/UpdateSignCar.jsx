import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { url } from "../../constent/url";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useLocation } from "react-router-dom";



function UpdateSignCar() {
    const location = useLocation()

  const notifyerr = (msg) => toast.error(msg);
  const notifyok = (msg) => toast.success(msg);



  const [license_section, setLicenceSection] = useState(location.state.license_section);
  const [vehicle_number, setVehicleNumber] = useState(location.state.vehicle_number);
  const [usable_for, setUserbleFor] = useState(location.state.usable_for);
  const [examiners_name, setExaminersName] = useState(location.state.examiners_name);
  const [examination_date, setExamiationDate] = useState(location.state.examination_date);



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
        const response = await axios.put(url + `/updateLicenceDepartment/${location.state.id}/${location.state.Car.carId}`, {
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


  useEffect(() => {console.log(location.state)} , [])
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


                <div className="mb-4">
                  <label className="block text-lg mb-2"> قسم الترخيص</label>
                  <input
                    onChange={(e) => setLicenceSection(e.target.value)}
                    className="form-control"
                    type="text"
                    value={license_section}
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-lg mb-2">رقم المركبة</label>
                  <input
                    onChange={(e) => setVehicleNumber(e.target.value)}
                    className="form-control"
                    type="number"
                    value={vehicle_number}
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-lg mb-2">صالج للاستعمال لمدة</label>
                  <input
                    onChange={(e) => setUserbleFor(e.target.value)}
                    className="form-control"
                    type="text"
                    value={usable_for}
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
                    value={examiners_name}
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
                    value={examination_date}
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
                    type="number"
                    required
                    value={chassisNumber}
                  />
                </div>

                <div>
                  <label className="block text-lg mb-2"> رقم المركبة </label>
                  <input
                    onChange={(e) => setVehicleId(e.target.value)}
                    className="form-control"
                    type="number"
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
                    value={vehicleId}
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
                    type="number"
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
                    type="number"
                    required
                    value={horsePower}
                  />
                </div>

                <div>
                  <label className="block text-lg mb-2"> الحمولة </label>
                  <input
                    onChange={(e) => setCarLoad(e.target.value)}
                    className="form-control"
                    type="number"
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
                    type="number"
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
  )
}

export default UpdateSignCar