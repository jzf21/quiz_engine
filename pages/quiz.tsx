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
      console.log(data)
    };
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  if (!data) return <div>Loading...</div>;
  return (
    <ul>
        <div className="flex flex-col items-start w-full">
  <h4 className="mt-10 text-xl text-white/60">Question 1 of 5</h4>
  <div className="mt-4 text-2xl text-white">
    What type of framework is Next.js?
  </div>
</div>
<div className="flex flex-col w-full">
  {data.map((options, index) => (
    <div
      key={index}
      className="flex items-center w-full py-4 pl-5 m-2 ml-0 space-x-2 border-2 cursor-pointer bg-white/5 border-white/10 rounded-xl"
    >
      <input type="radio" className="w-6 h-6 bg-black" />
      <p className="ml-6 text-white">{options}</p>
    </div>
  ))}
</div>
 {data.map((post) => {
          return <h1 key={post.q_id}>{post.question}</h1>
        })}
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
    </ul>
    
  );
};

export default Quiz;
