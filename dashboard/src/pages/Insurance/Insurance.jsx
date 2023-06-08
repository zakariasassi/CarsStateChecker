import React from 'react'
import { FaCar, FaCalendarAlt, FaIdCard, FaUser, FaPhone, FaEnvelope, FaLocationArrow, FaCheckCircle } from 'react-icons/fa';
import { Box } from '@mui/material';

function Insurance() {
  return (
   

<>


<Box style={{display:"flex" , flexDirection:"coulmn" , justifyContent:'center' , alignItems: "center" , padding: 20 , width:'100%' }}>

<div className="w-full mx-auto p-8 bg-white rounded shadow-md" dir='rtl'>
    <h2 className="text-2xl font-bold mb-6">تعبئة تأمين السيارة</h2>
    <form className="space-y-4">
      <div>
        <label htmlFor="carModel" className="block text-gray-700 mb-2">
          نوع السيارة
        </label>
        <div className="relative">
          <select
            id="carModel"
            className="appearance-none w-full border border-gray-300 rounded py-2 px-3 leading-tight focus:outline-none focus:border-indigo-500"
          >
            <option value="">اختر نوع السيارة</option>
            <option value="sedan">سيدان</option>
            <option value="suv">سيارة رياضية متعددة الاستخدامات</option>
            <option value="hatchback">هاتشباك</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <FaCar />
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="manufactureDate" className="block text-gray-700 mb-2">
          سنة التصنيع
        </label>
        <div className="relative">
          <input
            type="text"
            id="manufactureDate"
            className="appearance-none w-full p-10 border border-gray-300 rounded py-2 px-3 leading-tight focus:outline-none focus:border-indigo-500"
            placeholder="مثال: 2020"
          />
          <div className="pointer-events-none absolute inset-y-0 right-0 rtl: flex items-center py-2 text-gray-700">
            <FaCalendarAlt />
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="ownerID" className="block text-gray-700 mb-2">
          رقم هوية المالك
        </label>
        <div className="relative">
          <input
            type="text"
            id="ownerID"
            className="appearance-none w-full border border-gray-300 rounded py-2 px-3 leading-tight focus:outline-none focus:border-indigo-500"
            placeholder="ادخل رقم الهوية"
          />
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <FaIdCard />
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="ownerName" className="block text-gray-700 mb-2">
          اسم المالك
        </label>
        <div className="relative">
          <input
            type="text"
            id="ownerName"
            className="appearance-none w-full border border-gray-300 rounded py-2 px-3 leading-tight focus:outline-none focus:border-indigo-500"
            placeholder="ادخل اسم المالك"
          />
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <FaUser />
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="ownerPhone" className="block text-gray-700 mb-2">
          رقم الهاتف
        </label>
        <div className="relative">
          <input
            type="text"
            id="ownerPhone"
            className="appearance-none w-full border border-gray-300 rounded py-2 px-3 leading-tight focus:outline-none focus:border-indigo-500"
            placeholder="ادخل رقم الهاتف"
          />
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <FaPhone />
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="ownerEmail" className="block text-gray-700 mb-2">
          البريد الإلكتروني
        </label>
        <div className="relative">
          <input
            type="email"
            id="ownerEmail"
            className="appearance-none w-full border border-gray-300 rounded py-2 px-3 leading-tight focus:outline-none focus:border-indigo-500"
            placeholder="ادخل البريد الإلكتروني"
          />
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <FaEnvelope />
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="ownerAddress" className="block text-gray-700 mb-2">
          العنوان
        </label>
        <div className="relative">
          <input
            type="text"
            id="ownerAddress"
            className="appearance-none w-full border border-gray-300 rounded py-2 px-3 leading-tight focus:outline-none focus:border-indigo-500"
            placeholder="ادخل العنوان"
          />
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <FaLocationArrow />
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="terms" className="flex items-center">
          <input
            type="checkbox"
            id="terms"
            className="form-checkbox border-gray-300 rounded text-indigo-500 focus:outline-none focus:border-indigo-500"
          />
          <span className="ml-2 text-gray-700">
            قرأت ووافقت على الشروط والأحكام
          </span>
        </label>
      </div>

      <div>
        <button
          type="submit"
          className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          إرسال الطلب
        </button>
      </div>
    </form>
  </div>
</Box>


</>
  )
}

export default Insurance
