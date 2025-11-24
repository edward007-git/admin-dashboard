import { Filter, Menu, Plus, Search, Sun, Bell, Settings, ChevronDown } from 'lucide-react'
import React from 'react'

const Header = ({onToggle}) => {
  return (
    <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b
    border-slate-200/50 dark:border-slate-700/50 px-4 sm:px-6 py-4">
      <div className="flex items-center justify-between">

        {/* Left side */}
        <div className="flex items-center space-x-4">
          <button
            onClick={onToggle}
           className="p-2 rounded-lg text-slate-600 dark:text-slate-300
            hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <Menu className="w-5 h-5" />
          </button>
          <div className="hidden md:block">
            <h1 className="text-2xl font-bold text-slate-800 dark:text-white">
              Dashboard
            </h1>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Welcome back, Steven! Here's what's happening today
            </p>
          </div>
        </div>

        {/* Center - Search */}
        <div className="flex-1 max-w-lg sm:max-w-md mx-4 sm:mx-8">
          <div className="relative">
            {/* Search Icon */}
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />

            {/* Search Input */}
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-12 rounded-lg py-2.5 bg-slate-100 dark:bg-slate-800 
              border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 
              focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent transition-all"
            />

            {/* Filter Button (hidden on very small screens) */}
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1.5 
              text-slate-400 dark:text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 
              rounded hidden sm:block">
              <Filter />
            </button>
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-3">
          {/* New button */}
          <div className="hidden lg:flex items-center space-x-2 py-2 px-4 bg-gradient-to-r from-[#9D4BFF] to-[#FF4D8C]

            text-white rounded-xl hover:shadow-lg transition-shadow cursor-pointer">
            <Plus className="w-4 h-4" />
            <span className="text-sm font-medium">New</span>
          </div>

          {/* Theme toggle */}
          <button className="p-2.5 rounded-lg text-slate-600 dark:text-slate-300
            hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <Sun className="w-5 h-5" />
          </button>

          {/* Notification bell */}
          <button className="relative p-2.5 rounded-lg text-slate-600 dark:text-slate-300
            hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <Bell className="w-5 h-5" />
            <span
              className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs
              rounded-full flex items-center justify-center">
              3
            </span>
          </button>

          {/* Settings */}
          <button className='relative p-2.5 rounded-lg text-slate-600 dark:text-slate-300
            hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors'>
              <Settings className='w-5 h-5'/>
          </button>

          {/* Avatar */}
          <div className='flex items-center space-x-3 pl-3 border-l border-slate-200
          dark:border-slate-700'>
            <img src='' alt='User Avatar' className='w-8 h-8 rounded-full ring-2 ring-blue-500'  />
            
            <div className='hidden md:block'>
               <p className='text-sm font-medium text-slate-500 dark:text-slate-400'>
                 steven mark
               </p>
               <p className='text-xs text-slate-400 dark:text-slate-500'>
                 Admin
               </p>
            </div>
            <ChevronDown className='w-4 h-4 text-slate-400'/>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Header
