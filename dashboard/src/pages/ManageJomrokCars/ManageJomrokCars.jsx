import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box } from '@mui/material';
import { url } from '../../constent/url';

function ManageJomrokCars() {
  const [carsData, setCarsData] = useState([]);

  const [showModal, setShowModal] = useState(false);

const getdata = async () => {
  await axios.get( url +  '/getAllJomrok')
  .then(response => {
    setCarsData(response.data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
}
const [cardetails, setCarDetails] = useState({});

const showCarDetails = (e, car) => {
  setCarDetails(car);
  console.log(cardetails);
  setShowModal(true);
};


  const deleteJomrok = async (e , id ) => {
    console.log(id)
    e.preventDefault();
    await axios.delete( url + `/deleteJomrok/${id}`).then((res) => {
        console.log(res)
    })
    getdata();
  }
 

  useEffect(() => {
    // Fetch data from the server
    getdata()

  }, []);

  return (
    <div className="flex flex-col items-center p-5 w-full">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-5 my-10">
  {carsData.map((car, index) => (
    <div key={index} className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-xl font-bold mb-4">#{index + 1}</h2>
      <p><span className="font-semibold">الإفراج الجمركي:</span> {car.release_permit_number}</p>
      <p><span className="font-semibold">الحيازة الجمركية:</span> {car.Place_of_customs_possession}</p>
      <p><span className="font-semibold">اسم السفينة:</span> {car.ship_name}</p>
      <p><span className="font-semibold">تاريخ وصولها:</span> {car.arrival_date}</p>
      <p><span className="font-semibold">اسم المستورد:</span> {car.importer_name}</p>
      <p><span className="font-semibold">رقم الإقرار الجمركي:</span> {car.customs_declaration_number}</p>
      <p><span className="font-semibold">رقم الإيصال الجمركي:</span> {car.customs_receipt_number}</p>
      <p><span className="font-semibold">مكان تخزين البضاعة:</span> {car.goods_storage_location}</p>
      <p><span className="font-semibold">رقم المخزن:</span> {car.warehouse_number}</p>
      <p><span className="font-semibold">عدد الطرود:</span> {car.parcels_count}</p>
      <p><span className="font-semibold">أرقام ووصف الطرود:</span> {car.parcels_details}</p>
      <p><span className="font-semibold">المبلغ الإجمالي:</span> {car.total_amount}</p>
      <p><span className="font-semibold">بوليصة الشحن:</span> {car.shipping_policy}</p>
      <p><span className="font-semibold">اسم الوكيل:</span> {car.agent_name}</p>
      <p><span className="font-semibold">تاريخه:</span> {car.date}</p>
      <p><span className="font-semibold">وصف البضائع:</span> {car.goods_description}</p>
      <div className="flex justify-center items-center mt-4">
        <button onClick={(e) => deleteJomrok(e, car.id)} type="button" className="btn btn-outline-danger btn-circle btn-lg btn-circle m-2">
          <i className="fa-sharp fa-solid fa-trash"></i>
        </button>
        <button onClick={(e) => showCarDetails(e, car.Car)} className="btn btn-outline-success btn-circle btn-lg btn-circle m-2">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
        <button type="button" className="btn btn-outline-warning btn-circle btn-lg btn-circle m-2">
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
      </div>
    </div>
  ))}
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

export default ManageJomrokCars;
