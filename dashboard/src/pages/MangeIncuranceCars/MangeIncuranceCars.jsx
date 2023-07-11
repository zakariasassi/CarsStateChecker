import axios from 'axios'
import React  , {useEffect , useState}  from 'react'
import { url } from '../../constent/url'

function MangeIncuranceCars() {
    const [cardetails, setCarDetails] = useState({});

    const [incuranceData , setIncuranceData ] = useState([])
    const [showModal, setShowModal] = useState(false);

    const showCarDetails = (e, car) => {
        setCarDetails(car);
        console.log(cardetails);
        setShowModal(true);
      };
      
        const getallincurance = async () => {
            await axios.get(url + "/getAllInsuranceDocuments").then( res => {
                setIncuranceData(res.data.data)
                console.log(res.data)
            })
        }



    useEffect(() => {
        getallincurance()
    },[])
  return (
    <>
        <div className="container  py-8 m-3   bg-gray-100 rounded-2xl" dir='rtl'>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 m-4">
      {incuranceData.map((item) => (
        <div key={item.id} className="bg-white rounded-lg shadow-md p-4">
          <h3 className="text-lg font-bold mb-2 text-green-500">الاسم المؤمن عليه:</h3>
          <p className="text-gray-600 mb-2">شركة التأمين: {item.companyName}</p>
          <p className="text-gray-600 mb-2">رقم الوثيقة: {item.documentNumber}</p>
          <p className="text-gray-600 mb-2">نوع التأمين: {item.insuranceType}</p>
          {item.Car && (
            <div>
              <h4 className="text-md font-bold mt-4 mb-2 text-green-500">معلومات السيارة:</h4>
              <p className="text-gray-600 mb-2">رقم اللوحة: {item.Car.boardNumber}</p>
              <p className="text-gray-600 mb-2">رقم الشاسيه: {item.Car.chassisNumber}</p>
              <p className="text-gray-600 mb-2">رقم المركبة: {item.Car.vehicleId}</p>
              <button onClick={(e) => showCarDetails(e, item.Car)}  className='bg-green-500  text-white text-xs p-2 border-0 shadow-md '>عرض كل البيانات</button>
            </div>
          )}
          <div className="flex justify-between flex-col items-center mt-4">
            <span className="text-sm text-gray-600" dir='rtl'>تاريخ بدء التأمين:{item.insuranceStartDate}</span>
            <span className="text-sm text-gray-600" dir='rtl'>تاريخ انتهاء التأمين:{item.insuranceEndDate}</span>
          </div>
        </div>
      ))}
    </div>
      


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



    </>
  )
}

export default MangeIncuranceCars