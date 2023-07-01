import React from 'react'

function Incurance() {
  return (
    <>

      <div className="flex flex-col " dir="rtl">
      <h1 className='text-right text-5xl p-5 m-5'>استعلام عن تأمين سيارة</h1>

        <form dir="rtl" className="w-full pt-6">
          <div className="flex flex-row justify-start">
            {/* <div>
              <select className="px-2 py-2 w-52 rounded-lg h-10 m-3">
                <option>fklsafj</option>
                <option>fklsafj</option>
                <option>fklsafj</option>
                <option>fklsafj</option>
              </select>
            </div> */}

     

            <div>
              <input className="px-2 py-2 w-52 m-3 " placeholder="رقم الوثيقة" />
            </div>

            <div>
              <input
                className="px-2 py-2 w-52 m-3 "
                placeholder="اسم المؤمن له"
              />
            </div>

            <div>
            <button className="bg-blue-700 h-25 w-60 py-2 mt-3 text-white  duration-300 rounded-lg hover:bg-blue-500 ">
              بحث
            </button>
            </div>
          </div>



          <div className="bg-slate-50 h-full w-full"></div>
        </form>

        
      </div>




    </>
  )
}

export default Incurance