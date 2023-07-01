import React  , {useContext }from 'react'
import { Link } from 'react-router-dom'
import { SideMenuContext } from '../Layout/Layout'

function Sidebar() {
    const {isopen , setOpen} = useContext(SideMenuContext)
    const lists = [
        {
            id:1,
            title:'الرئيسية',
            link : '/home',
            icon:<svg  className="w-4 ml-2 mb-2  h-4 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"  ariaHidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
          </svg>

        },
        {
            id:2,
            title:'قسم التراخيص',
            link : '/licence',
            icon:<svg  className="w-4 ml-2 mb-2  h-4 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"  ariaHidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
            <path d="M16 0H4a2 2 0 0 0-2 2v1H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM13.929 17H7.071a.5.5 0 0 1-.5-.5 3.935 3.935 0 1 1 7.858 0 .5.5 0 0 1-.5.5Z"/>
          </svg>
        },
     
        {
            id:3,
            title:'قسم الجمارك',
            link:'/jomrok',
            icon:<svg className="w-4 ml-2 mb-2  h-4 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" ariaHidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 21">
            <path d="M6.167 9.833a3 3 0 0 1 1.946-2.809L13 5.191a3 3 0 0 1 2.107 0l.893.334V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h8.641A14.03 14.03 0 0 1 6.167 9.833Z"/>
            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Zm14.3 3.9-4.893-1.837a1.009 1.009 0 0 0-.7 0L8.815 8.9a1 1 0 0 0-.648.936 12.263 12.263 0 0 0 5.359 10.015 1 1 0 0 0 1.06 0 12.265 12.265 0 0 0 5.358-10.015A1 1 0 0 0 19.3 8.9Zm-5.236 8.866V9.068l3.866 1.45a10.241 10.241 0 0 1-3.871 7.245l.005.003Z"/>
          </svg>

        },
        {
            id:4,
            title:'قسم التأمين',
            link : '/incurance',
            icon : <svg  className="w-4 ml-2 mb-2  h-4 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" ariaHidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 5h1v12a2 2 0 0 1-2 2m0 0a2 2 0 0 1-2-2V2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v15a2 2 0 0 0 2 2h14ZM10 4h2m-2 3h2m-8 3h8m-8 3h8m-8 3h8M4 4h3v3H4V4Z"/>
          </svg>      
       

        },
        
     
    ]
  return (
 
    
<>
  {isopen  && (
      <aside id="logo-sidebar" className="fixed top-0 right-0 z-40 w-64 h-screen pt-20  bg-white border-r duration-700 border-gray-200 sm:translate-x-0  dark:bg-gray-800 dark:border-gray-700 " aria-label="Sidebar" dir='rtl'>

            <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
       <ul className="space-y-2 font-medium">
           {
            lists.map((data , key) => {
                return (
                    <li key={key}>
             <Link to={data.link} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    {data.icon}
                <span className="ml-3">{data.title}</span>
             </Link>


          </li>
                )
            })
           }
       </ul>
    </div>
    </aside>
        )
    }


</>

  

 
  )
}

export default Sidebar