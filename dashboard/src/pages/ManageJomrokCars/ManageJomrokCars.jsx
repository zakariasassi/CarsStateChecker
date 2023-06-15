import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box } from '@mui/material';
import { url } from '../../constent/url';

function ManageJomrokCars() {
  const [carsData, setCarsData] = useState([]);

  useEffect(() => {
    // Fetch data from the server
    axios.get( url +  '/getAllJomrok')
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
              <th  className='w-full' scope="col" style={{ textAlign: 'center' }}>  الإفراج الجمركي</th>
              <th className='w-full'  scope="col" style={{ textAlign: 'center' }}> الحيازة الجمركية</th>
              <th className='w-full'  scope="col" style={{ textAlign: 'center' }}>اسم السفينة</th>
              <th className='w-full'  scope="col" style={{ textAlign: 'center' }}>تاريخ وصولها</th>
              <th className='w-full'  scope="col" style={{ textAlign: 'center' }}>اسم المستورد</th>
              <th className='w-full' scope="col" style={{ textAlign: 'center' }}>رقم الإقرار الجمركي</th>
              <th className='w-full' scope="col" style={{ textAlign: 'center' }}>رقم الإيصال الجمركي</th>
              <th className='w-full'  scope="col" style={{ textAlign: 'center' }}>مكان تخزين البضاعة</th>
              <th className='w-full'  scope="col" style={{ textAlign: 'center' }}>رقم المخزن</th>
              <th className='w-full'  scope="col" style={{ textAlign: 'center' }}>عدد الطرود</th>
              <th className='w-full'  scope="col" style={{ textAlign: 'center' }}>أرقام ووصف الطرود</th>
              <th className='w-full' scope="col" style={{ textAlign: 'center' }}>المبلغ الإجمالي</th>
              <th className='w-full'  scope="col" style={{ textAlign: 'center' }}>بوليصة الشحن</th>
              <th className='w-full' scope="col" style={{ textAlign: 'center' }}>اسم الوكيل</th>
              <th className='w-full' scope="col" style={{ textAlign: 'center' }}>تاريخه</th>
              <th className='w-full' scope="col" style={{ textAlign: 'center' }}>وصف البضائع</th>
              <th className='w-full' scope="col" style={{ textAlign: 'center' }}>عمليات</th>
            </tr>
          </thead>
          <tbody>
            {carsData.map((car, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td style={{ textAlign: 'center' }}>{car.release_permit_number}</td>
                <td style={{ textAlign: 'center' }}>{car.released_goods}</td>
                <td style={{ textAlign: 'center' }}>{car.ship_name}</td>
                <td style={{ textAlign: 'center' }}>{car.arrival_date}</td>
                <td style={{ textAlign: 'center' }}>{car.importer_name}</td>
                <td style={{ textAlign: 'center' }}>{car.customs_declaration_number}</td>
                <td style={{ textAlign: 'center' }}>{car.customs_receipt_number}</td>
                <td style={{ textAlign: 'center' }}>{car.goods_storage_location}</td>
                <td style={{ textAlign: 'center' }}>{car.warehouse_number}</td>
                <td style={{ textAlign: 'center' }}>{car.parcels_count}</td>
                <td style={{ textAlign: 'center' }}>{car.parcels_details}</td>
                <td style={{ textAlign: 'center' }}>{car.total_amount}</td>
                <td style={{ textAlign: 'center' }}>{car.shipping_policy}</td>
                <td style={{ textAlign: 'center' }}>{car.agent_name}</td>
                <td style={{ textAlign: 'center' }}>{car.date}</td>
                <td style={{ textAlign: 'center' }}>{car.goods_description}</td>
                <td style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <button type="button" className="btn btn-outline-danger btn-circle btn-lg btn-circle m-2">
                    <i className="fa-sharp fa-solid fa-trash"></i>
                  </button>
                  <button type="button" className="btn btn-outline-warning btn-circle btn-lg btn-circle m-2">
                    <i className="fa-solid fa-pen-to-square"></i>
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

export default ManageJomrokCars;
