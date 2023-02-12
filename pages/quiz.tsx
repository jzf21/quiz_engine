import React, { useState, useEffect } from 'react';

const Quiz = () => {
  const [data, setData] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const handlePrevious = () => {
  const prevQues = currentQuestion - 1;
  prevQues >= 0 && setCurrentQuestion(prevQues);
};

const handleNext = () => {
  const nextQues = currentQuestion + 1;
  nextQues < data.length && setCurrentQuestion(nextQues);
};

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/hello');
      const json = await res.json();
      setData(json);
    };
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  if (!data || !data.length) return <div>Loading...</div>;
  return (
    <ul>
        <div className="flex flex-col items-start w-full bg-slate-600">
  <h4 className="mt-10 text-xl text-white/60">Question {currentQuestion+1} of 5</h4>
  <div className="mt-4 text-2xl text-white">
{data[currentQuestion].question}
  </div>
  {data[currentQuestion].options.map((answer)=>(
   <div
        
      className="flex items-center w-full py-4 pl-5 m-2 ml-0 space-x-2 border-2 cursor-pointer border-white/10 rounded-xl bg-white/5"
     
    >
      <input
        type="radio"
        name={answer}
        value={answer}

       
        className="w-6 h-6 bg-black text-white"
      />
      <p className="ml-6 text-white">{answer}</p>
    </div>
  ))}
</div>
 <button
    onClick={handlePrevious}
    className="w-[49%] py-3 bg-indigo-600 rounded-lg"
  >
    Previous
  </button>
  <button
    onClick={handleNext}
    className="w-[49%] py-3 bg-indigo-600 rounded-lg"
  >
    Next
  </button>
<div className="flex flex-col w-full">

</div>

        
    </ul>
    
  );
};

export default Quiz;
