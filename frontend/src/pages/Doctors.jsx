import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext.jsx';

const Doctors = () => {
  const navigate = useNavigate();
  const {speciality} = useParams();
  const [filterDoc, setfilterDoc] = useState ([]);
  const {doctors} = useContext (AppContext);

  const [ShowFilter, setShowFilter] = useState (false);

const applyFilter = () => {
  if (speciality) {
    setfilterDoc(doctors.filter((doc)=>doc.speciality === speciality ));
  } else {
    setfilterDoc(doctors);  
  }  
};

useEffect (() => {
  applyFilter();
}, [doctors,speciality])

  return (
    <div>
      <p className='text-gray-600 '>Browse through the doctors specialist</p> 
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5 '>
       <button className={`py-1 px-3 border rounded  text-sm transition-all ${ShowFilter ? 'bg-primary text-white ' : ''} `} onClick={() => setShowFilter (prev => !prev)}>Filters</button>
        <div className={` flex-col  gap-4 text-sm  text-gray-600 ${ShowFilter ? 'flex' : 'hidden sm:flex'}`}>
          <p onClick={()=>speciality ==='General physician' ? navigate('/doctors') : navigate('/doctors/General physician')} 
          className={`${speciality === 'General physician' ? 'bg-indigo-100 text-black': ''} w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer`}>
            General physician</p>

          <p onClick={()=>speciality ==='Gynecologist' ? navigate('/doctors') : navigate('/doctors/Gynecologist')} 
          className={`${speciality === 'Gynecologist' ? 'bg-indigo-100 text-black': ''} w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer`}>
            Gynecologist</p>

          <p onClick={()=>speciality ==='Dermatologist' ? navigate('/doctors') : navigate('/doctors/Dermatologist')} 
          className={`${speciality === 'Dermatologist' ? 'bg-indigo-100 text-black': ''} w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer`}>
            Dermatologist</p>

          <p onClick={()=>speciality ==='Pediatricians' ? navigate('/doctors') : navigate('/doctors/Pediatricians')} 
          className={`${speciality === 'Pediatricians' ? 'bg-indigo-100 text-black': ''} w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer`}>
            Pediatricians</p>

          <p onClick={()=>speciality ==='Neurologist' ? navigate('/doctors') : navigate('/doctors/Neurologist')} 
          className={`${speciality === 'Neurologist' ? 'bg-indigo-100 text-black': ''} w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer`}>
            Neurologist</p>

          <p onClick={()=>speciality ==='Gastroenterologist' ? navigate('/doctors') : navigate('/doctors/Gastroenterologist')} 
          className={`${speciality === 'Gastroenterologist' ? 'bg-indigo-100 text-black': ''} w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer`}>
            Gastroenterologist</p>

        </div>
        <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
          {filterDoc.map((item,index) => (
          <div 
          onClick={() => navigate(`/appointment/${item._id}`)}
          className='border border-blue-200 rounded-xl overflow-hiden cursor-pointer 
          hover:translate-y-[-10px] transition-all duration-500 ' key={index}>
            <img src={item.image} alt="" className='bg-blue-50'/>
            <div className='p-4'>
              <div className='flex items-center gap-2 text-center text-sm text-green-500'>
              <p className='w-2 h-2 bg-green-500 rounded-full'></p>
              <p>Available</p>
                 </div>
            <p className='text-gary-900 text-lg font-medium '>{item.name}</p>
            <p>{item.speciality}</p>
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  )
}

export default Doctors