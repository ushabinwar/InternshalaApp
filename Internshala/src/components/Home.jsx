import React from 'react'
import Navbar from './Nav/Navbar'

const Home = () => {
  return (
    <div className=' min-h-screen w-full '>
     <Navbar/>
     <h1 className='text-4xl font-semibold flex text-center  lg:justify-center mt-12'>Make your dream career a reality</h1>
     <h3 className='text-2xl font-semibold flex justify-center mt-7 '>Trending on Internshala</h3>
     <div className='lg:flex lg:justify-center lg:gap-14 mt-20 px-3'>
      <div className='h-[50vh]  w-[90vw] lg:h-[37vh] lg:w-[24vw]  rounded-3xl'>
        <img className='h-full w-full' src="https://internshala-uploads.internshala.com/banner-images/home_new/tally-student.png.webp" alt="" />
      </div>
      <div className='h-[50vh]  w-[90vw] lg:h-[37vh] lg:w-[24vw] rounded-3xl'>
        <img className='h-full w-full' src="https://internshala-uploads.internshala.com/banner-images/home_new/monsoon_july24_launch-student.png.webp" alt="" />
      </div>
      <div className='h-[50vh]  w-[90vw] lg:h-[37vh] lg:w-[24vw]  rounded-3xl'>
        <img className='h-full w-full' src="https://internshala.com/static/images/tgs/homepage_trending/pgc/full_stack_development_course.png" alt="" />
      </div>
     </div>
    </div>
  )
}

export default Home