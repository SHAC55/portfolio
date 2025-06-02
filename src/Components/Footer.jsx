import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-between w-full bg-[#1e1e1e] p-3 rounded-2xl mt-4 border border-[#050505] shadow-lg min-w-[400px]'>
        <h1>
            Portfolio.
        </h1>
        <h1 className='flex items-center'>
            <img src="https://cdn-icons-png.flaticon.com/128/106/106852.png" className='w-4 mr-2' alt="" srcset="" />
            <p>Portfolio, Designed by SHAC</p>
        </h1>
    </div>
  )
}

export default Footer