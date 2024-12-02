import React from 'react';
import { assets } from '../assets/assets';

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500 '>
        <p>About <span className='text-gray-700 font-medium'>US</span></p>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px] ' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600 '>
          <p>Lorem, ipsum dolor
             sit amet consectetur adipisicing elit. Molestias est perspiciatis
              commodi modi nemo, optio in a cum maxime, atque libero enim iusto mollitia illum reiciendis tenetur minus dolorem quae.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Nisi, enim laudantium odit eaque aut perspiciatis qui?
             Dolore est dicta unde vel atque id, non quia. Impedit consequatur odit reiciendis facilis neque! Repudiandae inventore quas quasi necessitatibus
             nesciunt exercitationem cumque sequi?</p>
          <b className='text-gray-800'>Lorem, ipsum.</b>
          <p>Lorem ipsum dolor, sit amet consectetur 
            adipisicing elit. Nam, eligendi? Cum quod tenetur quis 
            reiciendis facilis nemo natus, 
            labore ipsa?</p>
        </div>
      </div>
      <div className='text-xl my-4 '>
        <p>WHY <span className='text-gray-700 font-semibold'> CHOOSE US</span> </p>
      </div>
    <div className='flex flex-col md:flex-row mb-20'>
      <div className='border px-10 md:px-6 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover: bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
        <b>EFFICIENCY :</b>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, quaerat?</p>
      </div>
      <div className='border px-10 md:px-6 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover: bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'><b> CONVENIENCE:</b>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima, labore!</p></div>
      <div className='border px-10 md:px-6 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover: bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'><b>PERSONALIZATION :</b>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, nesciunt.</p></div>
    </div>
    </div>
  )
}

export default About