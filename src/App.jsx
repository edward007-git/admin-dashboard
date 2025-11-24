import React, { useState } from 'react';
import Header from './Components/Layout/Header';
import Sidebar from './Components/Layout/Sidebar';
import Dashboard from './Components/Dashboard/Dashboard'; 

const App = () => {
  const [sideBarCollapsed, setSideBarCollapsed] = useState(false);
  const [currentPage, setCurrentPage] = useState('dashboard');

  const handleToggleSidebar = () => {
    setSideBarCollapsed(prev => !prev);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar
        collapsed={sideBarCollapsed}
        onToggle={handleToggleSidebar}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header 
          onToggle={handleToggleSidebar}   
        />
        <main className="flex-1 overflow-y-auto bg-transparent ">
          <div className="p-6 space-y-6 ">
            {currentPage === 'dashboard' && <Dashboard />}
            </div>
              </main>
          </div>
         
      
      </div>
    
  );
};

export default App;
