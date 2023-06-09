import React , { useState , useContext} from 'react'
import  axios  from 'axios';
import { url } from '../../../../dashboard/src/constent/url';
import { AuthContext } from '../../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';


function Lgoin() {
    const { login ,  setLogin} = useContext(AuthContext)
    const notify = (msg) => toast(msg);

    const navigate = useNavigate()

    const [username , setusername] = useState('');
    const [password , setPassword] = useState('')



    const Lginguser = async (e) => {
            e.preventDefault();
            await axios.post(url + '/loginemployee' , {username , password }).then((res) => {
                if(res.data.state === 1 ) {
                    console.log(res.data)
                    window.localStorage.setItem('user' , JSON.stringify(res.data.user))
                    window.localStorage.setItem('isLogin' , true)
                    setLogin(true)
                    navigate('/home')
                    console.log(login)

                }else{
                    console.log(res.data)
                    notify(res.data.msg)

                }
            }).catch( err => {
                console.log(err)
            })
    }
    
  return (
    <>
    <Toaster 
            position='top-right'
     />
 
    <div className='bg-blue-950 h-screen w-full'>
    <section className="bg-blue-950 dark:bg-gray-900" dir='rtl'>
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-white dark:text-white">
         
          موقـــــع استعلام السيـــــارات    
      </a>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  قم بالدخول للموقع
              </h1>
              <form className="space-y-4 md:space-y-6" >
                  <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">اسم المستخدم</label>
                      <input onChange={e => setusername(e.target.value)} type="text" name="text" id="text" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="اسم المستخدم" required="" />
                  </div>
                  <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">كلمة المرور</label>
                      <input onChange={e => setPassword(e.target.value)} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                  </div>
                  <div className="flex items-center justify-between">
                      <div className="flex items-start">
                          <div className="flex items-center h-5">
                            {/* <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" /> */}
                          </div>
                          {/* <div className="ml-3 text-sm">
                            <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                          </div> */}
                      </div>
                      {/* <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a> */}
                  </div>
                  <button onClick={(e) => {Lginguser(e)}} type="submit" className="w-full bg-red-400 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">دخول </button>
                  {/* <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don’t have an account yet? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                  </p> */}
              </form>
          </div>
      </div>
  </div>
</section>
    </div>




    </>
  )
}

export default Lgoin