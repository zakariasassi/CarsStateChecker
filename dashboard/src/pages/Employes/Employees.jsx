import React , {useEffect , useState} from 'react'
import axios  from 'axios';
import { url } from '../../constent/url';
import { FaTrash, FaEdit, FaStopCircle } from 'react-icons/fa';

function Employees() {
    const [emplyees, setEmployees] = useState([]);

    const getallEmployees =  async () => {
      await axios.get(url +'/getallemployes').then(response => {
        setEmployees(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
    } 

    const deleteuser = async ( e , id) => {
        e.preventDefault();
        await  axios.delete( url + `/deleteEmploy/${id}`).then((response) => {
          console.log(response)
        
         })
         getallEmployees()
      }
    
    const restrictuser = async (e , id) => {
      e.preventDefault();
      await  axios.put( url + `/restrictEmploy/${id}`).then((response) => {
        console.log(response)
      
       })
       getallEmployees()
      }
    
    const activeuser = async (e , id) => {
      e.preventDefault();
      await  axios.put( url + `/activeEmploy/${id}`).then((response) => {
        console.log(response)
       
       })
       getallEmployees()
    }
    

    useEffect(() => {
        getallEmployees()
    },[])
    
  return (
    <>

<div className="overflow-x-auto w-full m-5" dir='rtl'>
<div className="toast toast-start">
  <div className="alert alert-info">
    <span>New mail arrived.</span>
  </div>
  <div className="alert alert-success">
    <span>Message sent successfully.</span>
  </div>
</div>
  <table className="table table-xs" dir='rtl'>
    <thead>
      <tr>
        <th className='text-center'>#</th> 
        <th className='text-center' >اسم المستخدم</th> 
        <th className='text-center'>الاسم الثلاثي</th> 
        <th className='text-center' >البريد الالكتروني</th> 
        <th className='text-center' >مكان العمل</th> 
        <th className='text-center' >Last Login</th> 
        <th className='text-center'>اجراء</th>
      </tr>
    </thead> 
    <tbody>
    {emplyees.map((admin, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td className="text-center">{admin.fullname}</td>
                  <td className="text-center">{admin.username}</td>
                  <td className="text-center">{admin.email}</td>
                  <td className="text-center">Superuser</td>
                  <td className="text-center">
                    <span className="badge bg-success text-white">{admin.state ?  "مفعل" : "غير مفعل"}</span>
                  </td>
                  <td className="flex justify-center items-center">
                    <button onClick={(e) => {deleteuser(e , admin.id)}} type="button" className="btn btn-outline-danger btn-circle btn-lg btn-circle m-2">
                      <FaTrash />
                    </button>
                    <button type="button" className="btn btn-outline-warning btn-circle btn-lg btn-circle m-2">
                      <FaEdit />
                    </button>
                    <button type="button" onClick={ e =>  restrictuser( e , admin.id)} className="btn  bg-red-500 text-white btn-circle btn-lg btn-circle ml-2 hover:bg-red-700 text-white">
                      <FaStopCircle />
                    </button>
                    <button type="button" onClick={ e =>  activeuser( e , admin.id)} className="btn  bg-green-500 text-white btn-circle btn-lg btn-circle ml-2 hover:bg-green-700 text-white">
                      <FaStopCircle />
                    </button>

                    
                  </td>
                </tr>
              ))}

    </tbody> 

  </table>
</div>


    </>
  )
}

export default Employees