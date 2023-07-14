import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { url } from "../../constent/url";
import axios from "axios";
import { useNavigate } from "react-router-dom";



function SInedCars() {

  const navigate = useNavigate()

  const [carsData, setCarsData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [cardetails, setCarDetails] = useState({});
  const getdata = async () => {
    await axios
      .get(url + "/getLicenceDepartments")
      .then((response) => {
        setCarsData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const showCarDetails = (e, car) => {
    setCarDetails(car);
    console.log(cardetails);
    setShowModal(true);
  };
  const deletecarsData = async (e, id) => {
    e.preventDefault();
    await axios.delete(url + `/deleteLicenceDepartment/${id}`).then((res) => {
      console.log(res);
      getdata();
    });
  };


  const gotoupdate = async (e , car) => {
    e.preventDefault();

      navigate('/updatesignedcar' , {state : car})
  }

  useEffect(() => {}, []);
  useEffect(() => {
    getdata();
  }, []);

  return (
    <div className="flex flex-col items-center p-5 w-full">
      <div className="w-full overflow-x-auto w-full">
        <table className="table m-5 p-lg-5" dir="rtl">
          <thead>
            <tr>
              <th scope="col" style={{ textAlign: "center" }}>
                الرقم التسلسلي
              </th>
              <th scope="col" style={{ textAlign: "center" }}>
                قسم ترخيص
              </th>
              <th scope="col" style={{ textAlign: "center" }}>
                {" "}
                رقم المركبة
              </th>
              <th scope="col" style={{ textAlign: "center" }}>
                {" "}
                صالحة للاستعمال لمدة
              </th>
              <th scope="col" style={{ textAlign: "center" }}>
                اسم الفاحص
              </th>
              <th scope="col" style={{ textAlign: "center" }}>
                التاريخ
              </th>
              <th scope="col" style={{ textAlign: "center" }}>
                بيانات السيارة
              </th>
              <th scope="col" style={{ textAlign: "center" }}>
                عمليات
              </th>
            </tr>
          </thead>
          <tbody>
            {carsData.map((car, index) => (
              <tr key={index}>
                <td style={{ textAlign: "center" }}>{car.id}</td>
                <td style={{ textAlign: "center" }}>{car.license_section}</td>
                <td style={{ textAlign: "center" }}>{car.vehicle_number}</td>
                <td style={{ textAlign: "center" }}>{car.usable_for}</td>
                <td style={{ textAlign: "center" }}>{car.examiners_name}</td>
                <td style={{ textAlign: "center" }}>{car.createdAt}</td>
                <td style={{ textAlign: "center" }}>
                  <button
                    onClick={(e) => showCarDetails(e, car.Car)}
                    className="btn btn-outline-success btn-circle btn-lg btn-circle m-2"
                  >
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </button>
                </td>
                <td
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <button
                    onClick={(e) => {
                      deletecarsData(e, car.id);
                    }}
                    type="button"
                    className="btn btn-outline-danger btn-circle btn-lg btn-circle m-2"
                  >
                    <i className="fa fa-trash"></i>
                  </button>
                  <button
                    onClick={e => gotoupdate(e , car)}
                    type="button"
                    className="btn btn-outline-warning btn-circle btn-lg btn-circle m-2"
                  >
                    <i className="fa fa-pen"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            dir="rtl"
          >
            <div className="relative w-full my-6 mx-auto max-w-6xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold text-center float-right">
                    بيانات السيارة
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}

                <div className="flex flex-row justify-around p-2">
                  <div className="flex-1">
                    <p>رقم اللوحة</p>
                    {cardetails.boardNumber}
                  </div>

                  <div className="flex-1">
                    <p>حالة السيارة</p>
                    {cardetails.carStatus}

                    
                  </div>
                  <div className="flex-1">
                    <p>رقم الهيكل</p>

                    {cardetails.chassisNumber}
                  </div>
                  <div className="flex-1">
                    <p> بلد الصنع</p>
                    {cardetails.countryOfManufacture}
                  </div>
                  <div className="flex-1">
                    <p> نوع الوقود </p>
                    {cardetails.fuelType}
                  </div>
                  <div className="flex-1">
                    <p> القوة بالحصان </p>
                    {cardetails.horsePower}

                  </div>

                  <div className="flex-1">
                    <p> عدد الركاب </p>
                    {cardetails.numberOfPassengers}
                  </div>
                  <div className="flex-1">
                    <p> مكان تسجيل السيارة </p>
                    {cardetails.placeOfRegistration}

                  </div>
                  <div className="flex-1">
                    <p> نوع السيارة </p>
                    {cardetails.typeOfCar}

                  </div>
                  <div className="flex-1">
                    <p> نوع عمل السيارة </p>
                    {cardetails.typeOfJob}

                  </div>
                  <div className="flex-1">
                    <p> رقم المركبة </p>
                    {cardetails.vehicleId}

                  </div>
                  <div className="flex-1">
                    <p> سنة الصنع </p>
                    {cardetails.yearMade}

                  </div>
                </div>

                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    خروج
                  </button>
                  {/* <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button> */}
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
}

export default SInedCars;
