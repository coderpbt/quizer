import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizeSingleTemplate from "./QuizeSingleTemplate";

const QuizeSingle = () => {
  const loadQuize = useLoaderData();

  
  return (
    <div className="lg:w-[700px] mx-auto w-[90%]">
        {
            loadQuize.data.questions.map((quzItem, index) => (
            <QuizeSingleTemplate key={quzItem.id} quzItem={quzItem} index={index} />
            ))
        }
    </div>
  );
};

export default QuizeSingle;
