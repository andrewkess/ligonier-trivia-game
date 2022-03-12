//import { useContext } from 'react';
import useResults from "./useResults";

import Link from 'next/link'
// import cleanQuestion from "../components/helper";
import { AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai';


const Results = (props) => {

    const { answers, questions } = props;

    const { score, results } = useResults(props);



    console.log('Passed answers: ', answers)
    if (!answers) return <p>No answers provided yet!</p>

    return (



        <div className="flex flex-col items-center border border-black min-h-screen min-w-screen justify-around p-10">
            <p className="text-bold">You scored</p>
            <p>{score} / {answers.length}</p>



            <div className="text-xs ">
                {results.map((result, index) => (
                    <div key={`question_${index}`} className="flex border border-black" >
                        <div className="flex-none p-2">
                            {(result.answer === 'Correct') ?
                                <AiFillCheckCircle className="text-green-500 text-2xl" />
                                : <AiFillCloseCircle className="text-red-500 text-2xl" />}
                        </div>
                        <div className="flex-1 p-2">
                            {result.question}
                        </div>
                    </div>
                ))}
            </div>


            <Link href="/" passHref>
                <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none"
                >
                    PLAY AGAIN?
                </button>
            </Link>



        </div>
    );
};

export default Results;