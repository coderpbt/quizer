import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import QuizeSingleTemplate from "./QuizeSingleTemplate";

const QuizeSingle = () => {
  const loadQuize = useLoaderData();

  const [mistake, setMistake] = useState(0);
  const [correct, setCorrect] = useState(0);

  
  return (
    <div className="lg:w-[700px] mx-auto w-[90%]">
      <div className="flex mt-4">
        <h3 className="text-white font-bold text-2xl mr-4">Mistake : {mistake}</h3>
        <h3 className="text-white font-bold text-2xl">Correct : {correct}</h3>
      </div>
      <h2 className='text-white font-bold text-2xl pt-5'>Quize of {loadQuize.data.name}</h2>
        {
            loadQuize.data.questions.map((quzItem, index) => (
            <QuizeSingleTemplate
             key={quzItem.id} 
             quzItem={quzItem} 
             index={index} 
             mistake={mistake}
             setMistake={setMistake}
             correct={correct}
             setCorrect={setCorrect}
             />
            ))
        }
    </div>
  );
};

export default QuizeSingle;
