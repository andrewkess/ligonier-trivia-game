//import next.js link component
import Link from 'next/link'
//import business logic to grade quiz and return results
import useResults from "../hooks/useResults";
//import icons
import { AiOutlineClose, AiOutlineCheck } from 'react-icons/ai';

const Results = ({ answers, questions }) => {
  //returned score and graded quiz results are saved into state
  //useResults business logic is called, passing in answers and questions array as props from state
  const { score, results } = useResults({ answers, questions });

  return (
    <div className="flex flex-col items-center bg-white justify-between p-5 sm:p-12 sm:text-xl">
 
      {/* display total score */}
      <p className="mt-8 font-yellowtail text-5xl text-gray-700">You scored</p>
      <p className="font-bold mb-8 text-xl">{score} / {answers.length}</p>

      {/* display graded quiz */}
      <div className="text-sm sm:text-lg max-w-3xl">
        {/* map through results array to display graded quiz elements */}
        {results.map((result, index) => (
          <div key={`question_${index}`} className="flex items-center border-b border-gray-200 py-1" >
            {/* if the current question was answered correctly, display a check icon, otherwise display a X icon */}
            <div className="flex-none">{(result.answeredCorrectly) ? <AiOutlineCheck className="text-green-700/60 text-4xl font-bold m-4" /> : <AiOutlineClose className="text-red-900/60 text-4xl font-bold m-4" />}</div>
            <div className="m-6">{result.question}<br /><div className="text-slate-500"> {result.answerDesc}</div></div>
          </div>
        ))}
      </div>

      {/* display 'play again' button */}
      <div className="m-12">
        <Link href="/" passHref>
        <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600/80 hover:bg-blue-700 focus:outline-none text-center text-lg sm:text-xl">PLAY AGAIN?</button>
        </Link>
      </div>

    </div>
  );
};

export default Results;