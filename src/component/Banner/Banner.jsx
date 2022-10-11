import React from 'react';
import banner from '../../images/banner.jpg'

const Banner = () => {
  return (
    <div className='text-center border-b-2 py-36 bg-[#E6425E]' style={{ backgroundImage: `url(${banner})`}}>
      <h2 className='text-center font-bold uppercase text-3xl text-black'>DPI quiz contest 2022</h2>
    </div>
  );
};

export default Banner;