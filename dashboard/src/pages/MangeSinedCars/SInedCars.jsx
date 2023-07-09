import React   , {useState , useEffect} from 'react'
import { Box } from '@mui/material';
import { url } from '../../constent/url';
import axios from 'axios';
function SInedCars() {
  const [carsData, setCarsData] = useState([]);

  const getdata  = async () => {
    
    await  axios.get( url + '/getLicenceDepartments')
        .then(response => {
          setCarsData(response.data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
  }


  const showCarDetails =  (e , car) => {
    console.log(car)
  }
  const deletecarsData = async (e , id) => {
    e.preventDefault();
      await axios.delete( url + `/deleteLicenceDepartment/${id}`).then((res) => {
        console.log(res)
        getdata()
      })
  }
  useEffect(() => {
    getdata()
  }, []);

  return (
    <div className="flex flex-col items-center p-5 w-full">
      <div className="w-full overflow-x-auto w-full">
        <table className="table m-5 p-lg-5" dir="rtl">
          <thead>
            <tr>
              <th scope="col" style={{ textAlign: 'center' }}>الرقم التسلسلي</th>
              <th scope="col" style={{ textAlign: 'center' }}>قسم ترخيص</th>
              <th scope="col" style={{ textAlign: 'center' }}> رقم المركبة</th>
              <th scope="col" style={{ textAlign: 'center' }}> صالحة للاستعمال لمدة</th>
              <th scope="col" style={{ textAlign: 'center' }}>اسم الفاحص</th>
              <th scope="col" style={{ textAlign: 'center' }}>التاريخ</th>
              <th scope="col" style={{ textAlign: 'center' }}>بيانات السيارة</th>
              <th scope="col" style={{ textAlign: 'center' }}>عمليات</th>
            </tr>
          </thead>
          <tbody>
            {carsData.map((car, index) => (
              <tr key={index}>
                <td style={{ textAlign: 'center' }}>{car.id}</td>
                <td style={{ textAlign: 'center' }}>{car.license_section}</td>
                <td style={{ textAlign: 'center' }}>{car.vehicle_number}</td>
                <td style={{ textAlign: 'center' }}>{car.usable_for}</td>
                <td style={{ textAlign: 'center' }}>{car.examiners_name}</td>
                <td style={{ textAlign: 'center' }}>{car.createdAt}</td>
                <td style={{ textAlign: 'center' }}>
                <button onClick={(e) => showCarDetails(e , car)}  className='btn btn-outline-success btn-circle btn-lg btn-circle m-2'>
                <i class="fa-solid fa-magnifying-glass"></i>
                </button></td>
                <td style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <button onClick={(e) => {deletecarsData(e , car.id)}} type="button" className="btn btn-outline-danger btn-circle btn-lg btn-circle m-2">
                    <i className="fa fa-trash"></i>
                  </button>
                  <button type="button" className="btn btn-outline-warning btn-circle btn-lg btn-circle m-2">
                    <i className="fa fa-pen"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SInedCars
