import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'


const Dashboard = () => 
{

  const location = useLocation()
  const urlActual = location.pathname

  return (
    <div className='md:flex md:min-h-screen'>
      <div className="flex flex-col md:w-1/4 h-screen px-5 py-10 bg-white border-r dark:bg-gray-900 dark:border-gray-700">
    <h2 className="text-3xl font-semibold text-gray-800 dark:text-white">APP SHOT</h2>

    <div className="flex flex-col justify-between flex-1 mt-6">
        <nav>
            <Link to='/licores' className={`${urlActual === '/licores' ? ' dark:bg-gray-800': 'text-gray-700'} flex items-center px-4 py-2 rounded-md dark:hover:bg-gray-700   dark:text-gray-200 `} href="#">
            <svg className='w-5 h-5' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.7799 3.62C21.896 3.47365 21.9688 3.29773 21.99 3.11215C22.0112 2.92657 21.98 2.73876 21.8999 2.57C21.8189 2.39983 21.6914 2.25603 21.5321 2.15518C21.3729 2.05433 21.1884 2.00053 20.9999 2H2.99992C2.81144 2.00053 2.62694 2.05433 2.4677 2.15518C2.30847 2.25603 2.18097 2.39983 2.09992 2.57C2.01987 2.73876 1.98868 2.92657 2.00989 3.11215C2.03109 3.29773 2.10386 3.47365 2.21992 3.62L10.9999 14.6V20H5.24992C4.98471 20 4.73035 20.1054 4.54282 20.2929C4.35528 20.4804 4.24992 20.7348 4.24992 21C4.24992 21.2652 4.35528 21.5196 4.54282 21.7071C4.73035 21.8946 4.98471 22 5.24992 22H18.7499C19.0151 22 19.2695 21.8946 19.457 21.7071C19.6446 21.5196 19.7499 21.2652 19.7499 21C19.7499 20.7348 19.6446 20.4804 19.457 20.2929C19.2695 20.1054 19.0151 20 18.7499 20H12.9999V14.6L21.7799 3.62ZM5.07992 4H18.9199L16.5199 7H7.51992L5.07992 4ZM11.9999 12.65L9.07992 9H14.9199L11.9999 12.65Z" fill="white"/>
            </svg>
                <span className="mx-4 font-medium">Licores</span>
            </Link>

            <Link to='/licores/nuevo'className={`${urlActual === '/licores/nuevo' ? ' dark:bg-gray-800': 'text-gray-700'} flex items-center px-4 mt-5 py-2 rounded-md dark:hover:bg-gray-700   dark:text-gray-200 `} href="#">
            <svg className='w-5 h-5 ' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 13H11V15C11 15.2652 11.1054 15.5196 11.2929 15.7071C11.4804 15.8946 11.7348 16 12 16C12.2652 16 12.5196 15.8946 12.7071 15.7071C12.8946 15.5196 13 15.2652 13 15V13H15C15.2652 13 15.5196 12.8946 15.7071 12.7071C15.8946 12.5196 16 12.2652 16 12C16 11.7348 15.8946 11.4804 15.7071 11.2929C15.5196 11.1054 15.2652 11 15 11H13V9C13 8.73478 12.8946 8.48043 12.7071 8.29289C12.5196 8.10536 12.2652 8 12 8C11.7348 8 11.4804 8.10536 11.2929 8.29289C11.1054 8.48043 11 8.73478 11 9V11H9C8.73478 11 8.48043 11.1054 8.29289 11.2929C8.10536 11.4804 8 11.7348 8 12C8 12.2652 8.10536 12.5196 8.29289 12.7071C8.48043 12.8946 8.73478 13 9 13ZM21 2H3C2.73478 2 2.48043 2.10536 2.29289 2.29289C2.10536 2.48043 2 2.73478 2 3V21C2 21.2652 2.10536 21.5196 2.29289 21.7071C2.48043 21.8946 2.73478 22 3 22H21C21.2652 22 21.5196 21.8946 21.7071 21.7071C21.8946 21.5196 22 21.2652 22 21V3C22 2.73478 21.8946 2.48043 21.7071 2.29289C21.5196 2.10536 21.2652 2 21 2ZM20 20H4V4H20V20Z" fill="white"/>
            </svg>
                <span className="mx-4 font-medium">Nuevo Licor</span>
            </Link>

            <Link  to='/' className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700" href="#">
            <svg className='w-5 h-5' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 12C20 11.7348 19.8946 11.4804 19.7071 11.2929C19.5196 11.1054 19.2652 11 19 11H11.41L13.71 8.71C13.8032 8.61676 13.8772 8.50607 13.9277 8.38425C13.9781 8.26243 14.0041 8.13186 14.0041 8C14.0041 7.86814 13.9781 7.73757 13.9277 7.61575C13.8772 7.49393 13.8032 7.38324 13.71 7.29C13.6168 7.19676 13.5061 7.1228 13.3842 7.07234C13.2624 7.02188 13.1319 6.99591 13 6.99591C12.8681 6.99591 12.7376 7.02188 12.6158 7.07234C12.4939 7.1228 12.3832 7.19676 12.29 7.29L8.29 11.29C8.19896 11.3851 8.12759 11.4972 8.08 11.62C7.97998 11.8635 7.97998 12.1365 8.08 12.38C8.12759 12.5028 8.19896 12.6149 8.29 12.71L12.29 16.71C12.383 16.8037 12.4936 16.8781 12.6154 16.9289C12.7373 16.9797 12.868 17.0058 13 17.0058C13.132 17.0058 13.2627 16.9797 13.3846 16.9289C13.5064 16.8781 13.617 16.8037 13.71 16.71C13.8037 16.617 13.8781 16.5064 13.9289 16.3846C13.9797 16.2627 14.0058 16.132 14.0058 16C14.0058 15.868 13.9797 15.7373 13.9289 15.6154C13.8781 15.4936 13.8037 15.383 13.71 15.29L11.41 13H19C19.2652 13 19.5196 12.8946 19.7071 12.7071C19.8946 12.5196 20 12.2652 20 12ZM17 2H7C6.20435 2 5.44129 2.31607 4.87868 2.87868C4.31607 3.44129 4 4.20435 4 5V19C4 19.7956 4.31607 20.5587 4.87868 21.1213C5.44129 21.6839 6.20435 22 7 22H17C17.7956 22 18.5587 21.6839 19.1213 21.1213C19.6839 20.5587 20 19.7956 20 19V16C20 15.7348 19.8946 15.4804 19.7071 15.2929C19.5196 15.1054 19.2652 15 19 15C18.7348 15 18.4804 15.1054 18.2929 15.2929C18.1054 15.4804 18 15.7348 18 16V19C18 19.2652 17.8946 19.5196 17.7071 19.7071C17.5196 19.8946 17.2652 20 17 20H7C6.73478 20 6.48043 19.8946 6.29289 19.7071C6.10536 19.5196 6 19.2652 6 19V5C6 4.73478 6.10536 4.48043 6.29289 4.29289C6.48043 4.10536 6.73478 4 7 4H17C17.2652 4 17.5196 4.10536 17.7071 4.29289C17.8946 4.48043 18 4.73478 18 5V8C18 8.26522 18.1054 8.51957 18.2929 8.70711C18.4804 8.89464 18.7348 9 19 9C19.2652 9 19.5196 8.89464 19.7071 8.70711C19.8946 8.51957 20 8.26522 20 8V5C20 4.20435 19.6839 3.44129 19.1213 2.87868C18.5587 2.31607 17.7956 2 17 2Z" fill="white"/>
            </svg>
                <span className="mx-4 font-medium">Salir</span>
            </Link>
        </nav>
    </div>
</div>


      <div className='md:w-3/4 p-10 md:h-screen overflow-y-scroll'>

        <Outlet/>

      </div>

    </div>
  )
}

export default Dashboard