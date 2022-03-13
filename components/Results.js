//import { useContext } from 'react';
import useResults from "./useResults";

import Link from 'next/link'
// import cleanQuestion from "../components/helper";
import { AiOutlineClose, AiOutlineCheck } from 'react-icons/ai';


const Results = (props) => {

    const { answers, questions } = props;

    const { score, results } = useResults(props);



    console.log('Passed answers: ', answers)
    if (!answers) return <p>No answers provided yet!</p>

    return (



        <div className="flex flex-col items-center bg-white justify-between p-2 sm:p-12">
            <p className="font-bold mt-8">You scored</p>
            <p className="font-bold mb-2">
                {score} / {answers.length}
            </p>



            <div className="text-sm bg-white">
                {results.map((result, index) => (
                    <div key={`question_${index}`} className="flex items-center border-b-2 border-gray-200 py-2  min-w-screen" >
                        <div className="flex-none">
                            {(result.answeredCorrectly) ?
                                <AiOutlineCheck className="text-green-700 text-2xl m-2" />
                                : <AiOutlineClose className="text-red-900 text-2xl m-2" />}
                        </div>
                        <div className="m-2">
                            {result.question}
                            <br />
                           <div className="text-slate-500"> {result.answerDesc}</div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="m-12">
                <Link href="/" passHref>
                    <button
                        type="button"
                        className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none text-center text-lg sm:text-xl"
                    >
                        PLAY AGAIN?
                    </button>
                </Link>

            </div>

        </div>
    );
};

export default Results;