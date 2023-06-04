import {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
function Login() {
const navigate = useNavigate()





  const loginUser =  () => {
    navigate('/home')
  }

    
  return (
    <div>
        

        <div className='container ' style={{alignItems:'center' , display:'flex' , justifyContent:'center'}}>
          <div className='w-25' style={{
      
            
          }}>
            <div className='' style={{alignItems:'center' , display:'flex' , flexDirection:'column' , justifyContent:'center' , marginTop:300}}>
              <h3>Login</h3>
              <input type='text' className='form-control m-2' style={{textAlign:'right'}} placeholder='اسم المستخدم' />
              <input type='password' className='form-control m-2'  style={{textAlign:'right'}} placeholder='كلمة المرور' />
              <button onClick={loginUser} type='submit' className='btn btn-primary' >دخول الي النظام</  button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Login
