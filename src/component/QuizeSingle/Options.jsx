import React from 'react';

const Options = ({optios, mcqHandeler}) => {
    return (
        <div onClick={() => mcqHandeler(optios)} className='border cursor-pointer flex justify-center items-center'>
             <button className='block p-3'>{optios}</button>
        </div>
    );
};

export default Options;