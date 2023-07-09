import React, { useState } from "react";
import { Box } from "@mui/material";
import axios from "axios";
import { url } from "../../constent/url";
function AddNewJomrocCard() {
  const [releasePermitNumber, setReleasePermitNumber] = useState("");
  const [releasedGoods, setReleasedGoods] = useState("");
  const [shipName, setShipName] = useState("");
  const [arrivalDate, setArrivalDate] = useState("");
  const [importerName, setImporterName] = useState("");
  const [customsDeclarationNumber, setCustomsDeclarationNumber] = useState("");
  const [customsReceiptNumber, setCustomsReceiptNumber] = useState("");
  const [goodsStorageLocation, setGoodsStorageLocation] = useState("");
  const [warehouseNumber, setWarehouseNumber] = useState("");
  const [parcelsCount, setParcelsCount] = useState(0);
  const [parcelsDetails, setParcelsDetails] = useState("");
  const [totalAmount, setTotalAmount] = useState(0);
  const [shippingPolicy, setShippingPolicy] = useState("");
  const [agentName, setAgentName] = useState("");
  const [date, setDate] = useState("");
  const [goodsDescription, setGoodsDescription] = useState("");







  //car_details 
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
  
    
      


  const handleSubmit = (e) => {
    e.preventDefault();
    // Create an object with the field values
    const data = {
      release_permit_number: releasePermitNumber,
      Place_of_customs_possession: releasedGoods,
      ship_name: shipName,
      arrival_date: arrivalDate,
      importer_name: importerName,
      customs_declaration_number: customsDeclarationNumber,
      customs_receipt_number: customsReceiptNumber,
      goods_storage_location: goodsStorageLocation,
      warehouse_number: warehouseNumber,
      parcels_count: parcelsCount,
      parcels_details: parcelsDetails,
      total_amount: totalAmount,
      shipping_policy: shippingPolicy,
      agent_name: agentName,
      date: date,
      goods_description: goodsDescription,


      //cardetails
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

    // Make a POST request to your server
    axios
      .post(url + '/createJomrok', data)
      .then((response) => {
        // Handle the response
        console.log(response.data);
        // Reset the form or perform any other actions
      })
      .catch((error) => {
        // Handle the error
        console.error(error);
        // Display an error message or perform any other error handling
      });
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
              <h2 className="text-2xl font-bold mb-4">بيانات الجمارك </h2>

              <div className="grid grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="block text-lg mb-2">
                    رقم إذن الإفراج الجمركي:
                  </label>
                  <input onChange={e => setReleasePermitNumber(e.target.value)} className="form-control" type="text" />
                </div>


          

                <div>
                  <label className="block text-lg mb-2">
                    يفرج عن البضاعة الموضحة أدناه من الحيازة الجمركية:
                  </label>
                  <input onChange={e => setReleasedGoods(e.target.value)}  className="form-control" type="text" />
                </div>

                <div>
                  <label className="block text-lg mb-2">اسم السفينة:</label>
                  <input onChange={e => setShipName(e.target.value)}  className="form-control" type="text" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-lg mb-2">تاريخ وصولها:</label>
                  <input onChange={e => setArrivalDate(e.target.value)}   className="form-control" type="date" />
                </div>

                <div>
                  <label className="block text-lg mb-2">اسم المستورد:</label>
                  <input onChange={e => setImporterName(e.target.value)}  className="form-control" type="text" />
                </div>

                <div>
                  <label className="block text-lg mb-2">
                    رقم الإقرار الجمركي:
                  </label>
                  <input onChange={e => setCustomsDeclarationNumber(e.target.value)}  className="form-control" type="text" />
                </div>

                <div>
                  <label className="block text-lg mb-2">
                    رقم الإيصال الجمركي:
                  </label>
                  <input onChange={e => setCustomsReceiptNumber(e.target.value)}   className="form-control" type="text" />
                </div>

                <div>
                  <label className="block text-lg mb-2">
                    مكان تخزين البضاعة:
                  </label>
                  <input onChange={e => setGoodsStorageLocation(e.target.value)}   className="form-control" type="text" />
                </div>

                <div>
                  <label className="block text-lg mb-2">رقم المخزن:</label>
                  <input onChange={e => setWarehouseNumber(e.target.value)}  className="form-control" type="text" />
                </div>

                <div>
                  <label className="block text-lg mb-2">عدد الطرود:</label>
                  <input onChange={e => setParcelsCount(e.target.value)}  className="form-control" type="text" />
                </div>

                <div>
                  <label className="block text-lg mb-2">
                    أرقام ووصف الطرود:
                  </label>
                  <input onChange={e => setParcelsDetails(e.target.value)}  className="form-control" type="text" />
                </div>

                <div>
                  <label className="block text-lg mb-2">المبلغ الإجمالي:</label>
                  <input onChange={e => setTotalAmount(e.target.value)}  className="form-control" type="text" />
                </div>

                <div>
                  <label className="block text-lg mb-2">بوليصة الشحن:</label>
                  <input onChange={e => setShippingPolicy(e.target.value)}  className="form-control" type="text" />
                </div>

                <div>
                  <label className="block text-lg mb-2">اسم الوكيل:</label>
                  <input onChange={e => setAgentName(e.target.value)}  className="form-control" type="text" />
                </div>

                <div>
                  <label className="block text-lg mb-2">تاريخه:</label>
                  <input  onChange={e => setDate(e.target.value)}  className="form-control" type="date" />
                </div>

                <div>
                  <label className="block text-lg mb-2">وصف البضائع:</label>
                  <input onChange={e => setGoodsDescription(e.target.value)}  className="form-control" type="text" />
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

export default AddNewJomrocCard;
