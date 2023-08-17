import React from 'react'
import { Outlet } from 'react-router-dom'

const CareersLayout = () => {
  return (
    <div className='careers-layout'>
     <h2>Careers</h2>   
     <p>Lorem Ipsum, dolor sit amet consectetur adipisicing elit</p>
    <Outlet/>

    </div>

  )
}

export default CareersLayout