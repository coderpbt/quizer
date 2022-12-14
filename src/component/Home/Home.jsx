import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import SingleQuize from './SingleQuize';

const Home = () => {
  const quizes = useLoaderData();
  return (
    <>
      <Banner />
        <div className='lg:w-[1200px] mx-auto w-[90%]'>
        <div className="flex justify-between flex-wrap">
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 pt-24'>
            {
              quizes.data.map(item => <SingleQuize key={item.id} item={item} />)
            }
            </div>
        </div>
      </div>
    </>
  );
};

export default Home;
