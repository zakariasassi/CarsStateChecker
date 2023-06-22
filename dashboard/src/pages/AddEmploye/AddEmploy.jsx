import React, { useState } from 'react'
import axios from 'axios'
import { url } from '../../constent/url';

function AddEmploy() {

    const [username , setusername] = useState('')
    const [password , setpassword ] = useState('')
    const [email , setemail] = useState('')
    const [fullname , setFullname] = useState('')



    const  addnewemplye = async (e) => {
        e.preventDefault()
    await axios.post(url + '/createnewemploy' , {
                username , password , email , fullname
    })
    }
  return (
    <>


<div className='flex flex-col items-center m-10 p-5  w-full' dir='rtl'>
<div  className='flex flex-col  mt-2 w-full'> 
    <p className='text-5xl font-bold'>اضافة موظف </p>
    <p className='text-2xl mt-2 mb-5'> من هنا يتم اضافة موظف ليقوم بالاستعلام عن بيانات السيارات </p>

    </div>
<form className='w-100 bg-slate-100 h-auto flex-col flex p-5 items-center rounded-lg' >
<input onChange={e => setFullname(e.target.value)} type="text" placeholder="اسم الموظف الثلاثي" className="input w-full max-w-5xl mt-2" />
<input onChange={e => setusername(e.target.value)}  type="text" placeholder="اسم المستخدم" className="input w-full max-w-5xl mt-2" />
<input onChange={e => setemail(e.target.value)}  type="text" placeholder="البريد الالكتروني" className="input w-full max-w-5xl mt-2" />
<input onChange={e => setpassword(e.target.value)}  type="text" placeholder="كلمة المرور" className="input w-full max-w-5xl mt-2" />

<button onClick={e => addnewemplye(e)} className="btn btn-outline btn-success mt-2 float-right self-start mr-14">اضافة</button>

</form>

</div>







    </>
  )
}

export default AddEmploy