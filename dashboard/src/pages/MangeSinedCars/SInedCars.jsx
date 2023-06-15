import React   , {useState , useEffect} from 'react'
import { Box } from '@mui/material';
import { url } from '../../constent/url';
import axios from 'axios';
function SInedCars() {
  const [carsData, setCarsData] = useState([]);

  useEffect(() => {
    // Fetch data from the server
    axios.get( url + '/getLicenceDepartments')
      .then(response => {
        setCarsData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="flex flex-col items-center p-5 w-full">
      <div className="w-full overflow-x-auto w-full">
        <table className="table m-5 p-lg-5" dir="rtl">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col" style={{ textAlign: 'center' }}>رقم الوحة</th>
              <th scope="col" style={{ textAlign: 'center' }}>الدولة</th>
              <th scope="col" style={{ textAlign: 'center' }}>سنة الصنع</th>
              <th scope="col" style={{ textAlign: 'center' }}>رقم الهيكل</th>
              <th scope="col" style={{ textAlign: 'center' }}>قوة المحرك</th>
              <th scope="col" style={{ textAlign: 'center' }}>عدد الركاب</th>
              <th scope="col" style={{ textAlign: 'center' }}>الوزن</th>
              <th scope="col" style={{ textAlign: 'center' }}>نوع الترخيص</th>
              <th scope="col" style={{ textAlign: 'center' }}>المكان المرتبط</th>
              <th scope="col" style={{ textAlign: 'center' }}>النوع</th>
              <th scope="col" style={{ textAlign: 'center' }}>لون السيارة</th>
              <th scope="col" style={{ textAlign: 'center' }}>رقم المحرك</th>
              <th scope="col" style={{ textAlign: 'center' }}>عمليات</th>
            </tr>
          </thead>
          <tbody>
            {carsData.map((car, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td style={{ textAlign: 'center' }}>{car.bord_number}</td>
                <td style={{ textAlign: 'center' }}>{car.counrty}</td>
                <td style={{ textAlign: 'center' }}>{car.year_made}</td>
                <td style={{ textAlign: 'center' }}>{car.body_number}</td>
                <td style={{ textAlign: 'center' }}>{car.engine_power}</td>
                <td style={{ textAlign: 'center' }}>{car.passngers_number}</td>
                <td style={{ textAlign: 'center' }}>{car.wighet}</td>
                <td style={{ textAlign: 'center' }}>{car.type_of_licence}</td>
                <td style={{ textAlign: 'center' }}>{car.place_linked}</td>
                <td style={{ textAlign: 'center' }}>{car.type}</td>
                <td style={{ textAlign: 'center' }}>{car.car_color}</td>
                <td style={{ textAlign: 'center' }}>{car.engine_number}</td>
                <td style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <button type="button" className="btn btn-outline-danger btn-circle btn-lg btn-circle m-2">
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
