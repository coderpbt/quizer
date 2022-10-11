import React from 'react';
import { toast } from 'react-toastify';
import Options from './Options';

const QuizeSingleTemplate = ({quzItem,index}) => {
    const mcqHandeler = (optios) => {
        if (quzItem.correctAnswer === optios) {
            return toast.success(`Correct Answer is - ${quzItem.correctAnswer}`, { autoClose: 500 })
        }
        return toast.error('Wrong Answer', { autoClose: 1000 })
    }
    const correctAnsHandeler = () => {
        toast.success(`${quzItem.correctAnswer}`, { autoClose: 500 })
    }
 
    return (
        <div className='my-4'>
            <button onClick={correctAnsHandeler}><i className="fa-regular fa-eye"></i></button>
            <h3>{index + 1}</h3>
            <h2 className='text-2xl font-bold mb-5'>{quzItem.question}</h2>
            <div className='grid grid-cols-2 gap-3'>
                {
                    quzItem.options.map((optios, index) => <Options key={index} optios={optios} mcqHandeler={mcqHandeler} />)
                }
            </div>
        </div>
    );
};

export default QuizeSingleTemplate;