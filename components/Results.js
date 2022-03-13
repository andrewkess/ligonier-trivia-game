//import next.js link component
import Link from 'next/link'
//import business logic to grade quiz and return results
import useResults from "./useResults";
//import icons
import { AiOutlineClose, AiOutlineCheck } from 'react-icons/ai';

const Results = ({ answers, questions }) => {
  //useResults business logic is called, passing in answers and questions array as props from state
  //the returned score and graded quiz results are saved into state
  const { score, results } = useResults({ answers, questions });

  return (
    <div className="flex flex-col items-center bg-white justify-between p-5 sm:p-12 sm:text-xl">
 
      {/* display total score */}
      <p className="font-bold mt-8">You scored</p>
      <p className="font-bold mb-8">{score} / {answers.length}</p>

      {/* display graded quiz */}
      <div className="text-sm sm:text-lg bg-white">
        {/* map through results array to display graded quiz elements */}
        {results.map((result, index) => (
          <div key={`question_${index}`} className="flex items-center border-b-2 border-gray-200 py-2  min-w-screen" >
            {/* if the current question was answered correctly, display a check icon, otherwise display a X icon */}
            <div className="flex-none">{(result.answeredCorrectly) ? <AiOutlineCheck className="text-green-700 text-2xl font-bold m-2" /> : <AiOutlineClose className="text-red-900 text-2xl font-bold m-2" />}</div>
            <div className="m-2">{result.question}<br /><div className="text-slate-500"> {result.answerDesc}</div></div>
          </div>
        ))}
      </div>

      {/* display 'play again' button */}
      <div className="m-12">
        <Link href="/" passHref>
        <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none text-center text-lg sm:text-xl">PLAY AGAIN?</button>
        </Link>
      </div>

    </div>
  );
};

export default Results;