import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className=' md:mx-10' >
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm' >
        
        {/* ------------------- Left Section ------------------- */}
        <div >
          <img 
          className='mb-5 w-40 ' src={assets.logo} alt="Logo"  />
          <p className='w-full md:w-2/3 text-gray-600 leading-6 '>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, 
            doloribus animi. Fuga ut provident dolore, veritatis qui ducimus 
            voluptatem laudantium quis ea eum animi dignissimos, iste iure 
            eveniet assumenda delectus ullam quas asperior.
          </p>
        </div>

        {/* ------------------- Center Section ------------------- */}
        <div>
          <p className='text-xl font-medium mb-5 ' >COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600 ' >
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        {/* ------------------- Right Section ------------------- */}
        <div>
          <p className='text-xl font-medium mb-5 ' >GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600 ' >
            <li>216-94-099-925</li>
            <li>haffasalhi@gmail.com</li>
          </ul>
        </div>  
      </div>

      {/* ------------------- Copy Rights ------------------- */}
      <div >
        <hr  />
        <p className='py-5 test-sm text-center '>© 2024 pingucoder - All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
