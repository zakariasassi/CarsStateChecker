import React from 'react'

function Jomrok() {
  return (
    <>

<div className="flex flex-col " dir="rtl">
<h1 className='text-right text-5xl p-5 m-5'>استعلام عن  بيانات جمركية</h1>

        <form dir="rtl" className="w-full p-20">
          <div className="flex flex-row justify-start">


            <div>
              <input
                className="px-2 py-2 w-52 rounded-lg m-3"
                placeholder="رقم الإقرار الجمركي "
              />
            </div>

    

            <div>
              <input
                className="px-2 py-2 w-52 m-3 "
                placeholder="رقم الإيصال الجمركي"
              />
            </div>


            <div>
            <button className="bg-blue-700 h-25 w-60 py-2 text-white  duration-300 rounded-lg mt-3 hover:bg-blue-500 ">
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

export default Jomrok