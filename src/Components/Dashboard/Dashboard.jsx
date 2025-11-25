import React from 'react'
import StaticGrid from './StaticGrid'
import ChartSection from './ChartSection'


const Dashboard = () => {
  return (
    <div className='space-y-6'>
        {/*static grid component */}
        <StaticGrid /> 
        {/*chart section component */}
        <ChartSection />
        



    </div>
  )
}

export default Dashboard