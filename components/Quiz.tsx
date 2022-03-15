import useQuiz from "../hooks/useQuiz";
import Results from '../components/Results'

const Quiz = () => {
  //returned results are saved into state
  const { questions, answers, curQuestion, isLoading, answerTrue, answerFalse } = useQuiz();
  
  //if fetch is still loading data, display 'loading' div
  if (isLoading) return <p className="flex mx-auto text-center justify-center items-center min-h-screen bg-gray-100 text-1xl">Loading...</p>

  //if user has answered all questions, display Results component
  if (curQuestion >= questions.length) return <Results answers={answers} questions={questions} />

  return (
    <div className="flex flex-col items-center min-h-screen min-w-screen justify-evenly px-6 sm:px-16 bg-gray-100">
      
      {/* display current question category */}
      <p className="font-bold sm:text-lg md:text-xl font-proza">{questions[curQuestion].category}</p>
      
      {/* display current question text */}
      <div className="border rounded-lg border-gray-400 px-8 sm:px-16 bg-white h-[55vh] sm:h-[55vh] w-full sm:w-[70vw] flex flex-col bg-gradient-to-r from-gray-200/10 to-gray-300/10" >
        <div className="grow text-xl text-center sm:text-2xl flex flex-col justify-center ">{questions[curQuestion].question}</div>
          <div className="flex flex-none justify-between mb-8 sm:mb-12">
          <button type="button" className="grow px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600/80 hover:bg-blue-700 focus:outline-none text-center text-lg sm:text-xl" onClick={answerTrue}>True</button>
          <div className="flex-none w-6 sm:w-14"></div>
          <button type="button" className="grow text-center items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600/80 hover:bg-blue-700 focus:outline-none text-lg sm:text-xl" onClick={answerFalse}>False</button>
        </div>
      </div>

      {/* display current question number */}
      <p className="text-center mx-4">{curQuestion + 1} of {questions.length}</p>
    </div>
  );
};

export default Quiz;