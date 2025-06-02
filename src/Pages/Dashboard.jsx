import React from 'react'
import Intro from '../Components/Intro'
import Projectdash from '../Components/Projectdash'
import Service from '../Components/Service'
import { motion } from 'framer-motion'
import Expertarea from '../Components/Expertarea'
import Work from '../Components/Work'
import Adv from '../Components/Adv'
import Footer from '../Components/footer'

const Dashboard = () => {
  return (
   
      
      <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className='flex justify-between flex-wrap mt-4'
    >


      <div className='min-w-[400px] d5xl:w-[600px] d4xl:w-[570px] d3xl:w-[540px] d2xl:w-[510px] dxl:w-[480px] dlg:w-[450px] dmd:w-[630px] ds:w-[590px] dxs:w-[550px] dxxs:w-[510px] dxxxs:w-full'>
      <Intro/>
      </div>

      <div className='min-w-[400px] d5xl:w-[600px] d4xl:w-[570px] d3xl:w-[540px] d2xl:w-[510px] dxl:w-[480px] dlg:w-[450px] dmd:w-[630px] ds:w-[590px] dxs:w-[550px] dxxs:w-[510px] dxxxs:w-full dxxs:mt-0 mt-5 '>
      <Projectdash/>
      </div>

      <div className='min-w-[400px] d5xl:w-[600px] d4xl:w-[570px] d3xl:w-[540px] d2xl:w-[510px] dxl:w-[480px] dlg:w-[450px] dmd:w-[630px] ds:w-[590px] dxs:w-[550px] dxxs:w-[510px] dxxxs:w-full dlg:mt-0 mt-5'>
      <Service/>
      </div>

      <div className='min-w-[400px] d5xl:w-[600px] d4xl:w-[570px] d3xl:w-[540px] d2xl:w-[510px] dxl:w-[480px] dlg:w-[450px] dmd:w-[630px] ds:w-[590px] dxs:w-[550px] dxxs:w-[510px] dxxxs:w-full dxss:mt-0 mt-5'>
      <Expertarea/>
      </div>

      <div className='min-w-[400px] d5xl:w-[600px] d4xl:w-[570px] d3xl:w-[540px] d2xl:w-[510px] dxl:w-[480px] dlg:w-[450px] dmd:w-[630px] ds:w-[590px] dxs:w-[550px] dxxs:w-[510px] dxxxs:w-full dxss:mt-0 mt-5'>
      <Work/>
      </div>

      <div className='min-w-[400px] d5xl:w-[600px] d4xl:w-[570px] d3xl:w-[540px] d2xl:w-[510px] dxl:w-[480px] dlg:w-[450px] dmd:w-[630px] ds:w-[590px] dxs:w-[550px] dxxs:w-[510px] dxxxs:w-full dxss:mt-0 mt-5'>
        <Adv/>
      </div>
      
      <Footer/>

      </motion.div>
  
  )
}

export default Dashboard
