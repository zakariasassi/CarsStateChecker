import React from "react";

function Licence() {
  return (
    <>
      <div className="flex flex-col " dir="rtl">
      <h1 className='text-right text-5xl p-5 m-5'>استعلام عن  بيانات الترخيص </h1>

        <form dir="rtl" className="w-full p-20">
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
              <input
                className="px-2 py-2 w-52 rounded-lg m-3"
                placeholder="رقم اللوحة"
              />
            </div>

            <div>
              <input className="px-2 py-2 w-52 m-3 " placeholder="رقم الهيكل" />
            </div>

    
            <div >
            <button className="bg-blue-700 h-25 w-60 mt-3 py-2 text-white  duration-300 rounded-lg hover:bg-blue-500 ">
              بحث
            </button>
          </div>
          </div>


          <div className="bg-slate-50 h-full w-full"></div>
        </form>

        
      </div>

      <div dir="rtl" className="w-4/6 m-auto ">
            <div class="grid gap-6 mb-6 md:grid-cols-2">
        <div>
            <label for="first_name" class="block mb-2 text-sm font-bold text-gray-900">رقم اللوحة المعدنية </label>
            {3456893746}
        </div>
        <div>
            <label for="last_name" class="block mb-2 text-sm font-bold text-gray-900"> بلد الصنع
 </label>
                {"كوريا"}
        </div>
        <div>
            <label for="company" class="block mb-2 text-sm font-bold text-gray-900">   سنة الصنع:
  </label>

  {2020}
   
        </div>  
        <div>
            <label for="phone" class="block mb-2 text-sm font-bold text-gray-900">  رقم الهيكل:
   </label>
        {"KJDSHG984UE8D9S5"}
        </div>
        <div>
            <label for="website" class="block mb-2 text-sm font-bold text-gray-900">   قوة المحرك بالحصان:
  </label>
  {34}

        </div>
        <div>
            <label for="visitors" class="block mb-2 text-sm font-bold text-gray-900"> عدد الركاب المصرح بهم بخلاف السائق:
  </label>
  {4}

        </div>

    <div >
        <label for="confirm_password" class="block mb-2 text-sm font-bold text-gray-900">  اللون
</label>
{"اسود"}
    </div> 

    <div >
        <label for="confirm_password" class="block mb-2 text-sm font-bold text-gray-900">  رقم المحرك
</label>
    {89476834}
    </div> 

    <div >
        <label for="confirm_password" class="block mb-2 text-sm font-bold text-gray-900">  النوع
</label>
    {"هونداي "}
    </div> 


    </div>
    <div class="mb-6">
        <label for="email" class="block mb-2 text-sm font-bold text-gray-900">الحمولة بالطن:
</label>
    {46}

    </div> 
    <div class="mb-6">
        <label for="password" class="block mb-2 text-sm font-bold text-gray-900 ">الغرض من ترخيص السيارة:
</label>
    {"ركوبة"}

    </div> 
    <div class="mb-6">
        <label for="confirm_password" class="block mb-2 text-sm font-bold text-gray-900 ">الجهة المقيد بها:
</label>
      {"تراخيص طرابلس"}

    </div> 




      </div>

  
    </>
  );
}

export default Licence;
