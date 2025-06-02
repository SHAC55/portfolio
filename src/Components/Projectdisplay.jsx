import React from 'react'

const Projectdisplay = () => {
  const feature = [
    { logo: "https://cdn-icons-png.flaticon.com/128/1087/1087840.png", title: '20+', subtitle: 'Projects Built' },
    { logo: "https://cdn-icons-png.flaticon.com/128/6404/6404558.png", title: '11*', subtitle: 'Leetcode Problems Solved' },
    { logo: "https://cdn-icons-png.flaticon.com/128/3242/3242257.png", title: '2+', subtitle: 'Years of Learning & Practice' },
  ]

  return (
    <div className='bg-[#252525] py-8  rounded-xl mt-4 5xl:w-full  '>
      <div className='max-w-4xl mx-auto flex justify-around text-white text-center'>
        {feature.map((item, index) => (
          <div key={index} className='flex p-4'>

            {/* <div className='bg-[#3a3a3a] w-fit p-2 rounded-full mr-2'>
            <img src={item.logo} className='w-8' alt="" srcset="" />
            </div> */}

            <div className=''>
            <h2 className='text-2xl font-bold text-blue-400'>{item.title}</h2>
            <p className='text-sm mt-1'>{item.subtitle}</p>
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}

export default Projectdisplay
