import React from 'react'
import myImg1 from '../../images/1.jpg'
import myImg2 from '../../images/2.jpg'
const Home = () => {
  return (
    <div>
          <div className='  h-[50vh] overflow-hidden'>
      <img src={myImg2} className='object-cover	 w-[100%] h-[100%]' alt="" />
    </div>
    <div className='text-[3rem] font-bold flex flex-col gap-2'>
      <p>Prepared By:</p>
      <div className='flex flex-wrap gap-12'>
        <span>Sobhi Mohamed</span>
        <span>Amr Yasser</span>
        <span>Karim Ali</span>
        <span>Toqa Ashraf</span>
        <span>Ossama  Mohamed</span>

      </div>
    </div>
    </div>
  )
}

export default Home