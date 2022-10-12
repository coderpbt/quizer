import React from 'react';
import { toast } from 'react-toastify';
import Options from './Options';

const QuizeSingleTemplate = ({quzItem,index,subject}) => {
    const mcqHandeler = (optios) => {
        if (quzItem.correctAnswer === optios) {
            return toast.success('Correct Answer', { autoClose: 500 })
        }
        return toast.error('Wrong Answer', { autoClose: 1000 })
    }
    const correctAnsHandeler = () => {
        toast.success(`${quzItem.correctAnswer}`, { autoClose: 500 })
    }
 
    return (
        <div className='my-4'>
            <div className='flex'>
                <h3 className='text-white font-bold text-2xl'>{index + 1}.</h3>
                <h2 className='text-2xl font-bold mb-5 text-white'>{quzItem.question}</h2>
            </div>
            <button className='flex justify-end w-full relative top-[-20px]' onClick={correctAnsHandeler}><i className="fa-regular fa-eye text-white text-2xl"></i></button>
            <div className='grid grid-cols-2 gap-3'>
                {
                    quzItem.options.map((optios, index) => <Options key={index} optios={optios} mcqHandeler={mcqHandeler} />)
                }
            </div>
        </div>
    );
};

export default QuizeSingleTemplate;