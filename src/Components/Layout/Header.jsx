import { Filter, Menu, Plus, Search, Sun, Bell, Settings, ChevronDown } from 'lucide-react'
import React from 'react'

const Header = ({onToggle}) => {
  return (
    <div className="bg-white text-slate-800 border-b border-slate-200 px-4 sm:px-6 py-4 backdrop-blur-xl">
      <div className="flex items-center justify-between">

        {/* Left side */}
        <div className="flex items-center space-x-4">
          <button
            onClick={onToggle}
            className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
          >
            <Menu className="w-5 h-5" />
          </button>

          <div className="hidden md:block">
            <h1 className="text-2xl font-semibold text-slate-800">
              Dashboard
            </h1>
            <p className="text-sm text-slate-500">
              Welcome back, Steven! Here's what's happening today
            </p>
          </div>
        </div>

        {/* Center - Search */}
        <div className="flex-1 max-w-lg sm:max-w-md mx-4 sm:mx-8">
          <div className="relative">

            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />

            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-12 rounded-lg py-2.5 
              bg-slate-100 border border-slate-200 
              text-slate-700 placeholder:text-slate-400
              focus:outline-none focus:ring-2 focus:ring-slate-300 focus:border-transparent transition-all"
            />

            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 
              text-slate-500 hover:bg-slate-100 rounded hidden sm:block"
            >
              <Filter />
            </button>
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-3">

          {/* New button */}
          <div
            className="hidden lg:flex items-center space-x-2 py-2 px-4 
            bg-slate-800 text-white rounded-xl hover:bg-slate-700 
            transition-shadow cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span className="text-sm font-medium">New</span>
          </div>

          {/* Theme toggle */}
          <button className="p-2.5 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors">
            <Sun className="w-5 h-5" />
          </button>

          {/* Notification bell */}
          <button className="relative p-2.5 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors">
            <Bell className="w-5 h-5" />
            <span
              className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs
              rounded-full flex items-center justify-center"
            >
              3
            </span>
          </button>

          {/* Settings */}
          <button className="relative p-2.5 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors">
            <Settings className="w-5 h-5" />
          </button>

          {/* Avatar */}
          <div className="flex items-center space-x-3 pl-3 border-l border-slate-200">
            <img
              src=""
              alt="User Avatar"
              className="w-8 h-8 rounded-full ring-2 ring-slate-200"
            />

            <div className="hidden md:block">
              <p className="text-sm font-medium text-slate-800">
                steven mark
              </p>
              <p className="text-xs text-slate-500">
                Admin
              </p>
            </div>

            <ChevronDown className="w-4 h-4 text-slate-400" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
