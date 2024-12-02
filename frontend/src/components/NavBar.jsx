import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets.js'; // Assurez-vous que le chemin est correct

const NavBar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(false);

return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
      <img
      onClick={()=> navigate ('/') }
       src={assets.logo} alt="Logo" className='w-44 cursor-pointer' />
      <ul className='hidden md:flex items-start gap-5 font-medium'> 
        <NavLink  to='/' >   
          <li className='py-1'>Home</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/doctors'> 
              <li  className='py-1'>ALL DOCTORS</li>       
             <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' /> 
        </NavLink>
        <NavLink to='/about'>
          <li  className='py-1'>ABOUT</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/contact' >
        <li className='py-1'>CONTACT</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
      </ul>
      <div>
        {token ? (
          <div className='flex items-center gap-2 cursor-pointer group relative'>
            <img src={assets.profile_pic} alt="Profile Picture" className='w-8 rounded-full'/>
            <img src={assets.dropdown_icon} alt="Dropdown Icon" className='w-2.5' />
            <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 
            hidden group-hover:block' >
              <div className='min-w-48 bg-stone-100 rounded-flex flex-col gap-4 p-4'>
                <p className='hover:text-black cursor pointer ' onClick={() => navigate('my-profile')
                
                } >My Profile</p>
                <p className='hover:text-black cursor pointer 'onClick={() => navigate('my-appointments')
                  
                
                } >My Appointments</p>
                <p className='hover:text-black cursor pointer 'onClick={() => setToken (false)
                  
                
                } >Logout</p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate('/login')}
            className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block'
          >
            Create account
          </button>
        )}
        <img onClick={() => setShowMenu(true)} className='w-6 md:hidden ' src={assets.menu_icon} alt="" />
     {/* -----------------mobile menu-------------- */}
     <div className={`${showMenu ? 'fixed w-full ' : 'h-0 w-0'}
     md:hidden right-0 top-0 z-20 overflow-hidden bg-white transition-all`}>
      <div className='flex items-center justify-between px-5 py-6 '>
        <img className='w-36 ' src={assets.logo} alt="" />
        <img className='w-7' onClick={() => setShowMenu(false)} src={assets.cross_icon} alt="" />
      </div >
      <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium '>
        <NavLink   onClick={() => setShowMenu(false)}  to='/'><p className='px-4 py-2 rounded '>Home</p></NavLink>
        <NavLink   onClick={() => setShowMenu(false)}   to='/doctors'><p className='px-4 py-2 rounded '>ALL DOCTORS</p></NavLink>
        <NavLink   onClick={() => setShowMenu(false)}  to='/about'><p className='px-4 py-2 rounded '>ABOUT</p></NavLink>
        <NavLink   onClick={() => setShowMenu(false)} to='/contact'><p className='px-4 py-2 rounded '>CONTACT</p></NavLink>

      </ul>
     </div>
      </div>
    </div>
  );
};

export default NavBar;