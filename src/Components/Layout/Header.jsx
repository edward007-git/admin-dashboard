import { Filter, Menu, Plus, Search, Sun } from 'lucide-react'
import React from 'react'

const Header = () => {
  return (
    <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b
   border-slate-200/50 dark:border-slate-700/50 px-6 py-4 ">
    <div className='flex items-center justify-between'>
      
        {/* Left side - could include a search bar or navigation links */}

    <div className='flex items-center space-x-4'> 
        <button className='p-2 rounded-lg text-slate-600 dark:text-slate-300
         hover:bg-slate-100 dark:hover:bg-slate-800  transition-colors'>
            <Menu className='w-5 h-5 '/>
            
            </button>  
         <div className='hidden md:block'>
            <h1 className='text-2xl font-bold text-slate-800 dark:text-white'>
                DashBoard

            </h1>
            <p>Welcome back,Edward! here's what's happening today</p>

         </div>
    </div>
     {/*center - could include a search bar or navigation links */}
     <div className='flex-1 max-w-md mx-8'>
        <div className='relative '>
            <Search className='w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400'/>
            <input type='text' placeholder='Search...' className='w-full pl-10 pr-4  rounded-lg
           py-2.5 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-200
            text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent transition-all'
             />
             <button className='absolute right-2 top-1/2  transform -translate-y-1/2 p-1.5 
             text-slate-400 dark:text-slate-600 hover:bg-slate-600 dark:hover:bg-slate-300'>
            <Filter />
             </button>





        </div>


     </div>
     {/* Right side - could include user profile or settings */}
     <div className='flex items-center space-x-3'>
      {/* User Avatar */}
      <div className='hidden lg:flex items-center space-x-2 py-2 px-4 bg-gradient-to-r from-blue-500 to-purple-600
      text-white rounded-xl hover:shadow-lg transition-shadow cursor-pointer'>
        <Plus className='w-4 h-4'/>
        <span className='text-sm font-medium'>New</span>
        {/* toggle`r icon */}
        <button className='p-2.5 rounded-lg text-slate-600 dark:text-slate-300
         hover:bg-slate-100 dark:hover:bg-slate-800  transition-colors'>
            <Sun className='w-5 h-5 '/>
            </button>
            {/*notification icon */}
            <button className='realative p-2.5 rounded-lg text-slate-600 dark:text-slate-300
            hover:bg-slate-100 dark:hover:bg-slate-800  transition-colors'>
                 <Bell className='w-5 h-5'/>
                 <span classsName='absolute -top-1 w-5 h-5 bg-red-500 text-white text-xs
                 rounde-full flex items-center justify-center'>3</span>



            </button>
      </div>

     </div>
   
   
   
   
   
   
   
    </div>





   </div>
  )
}

export default Header