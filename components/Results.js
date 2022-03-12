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


        <div>



            <p>Current score: {score} / {answers.length}</p>
            <br /><br />


            <div className="text-xs">
                {results.map((result, index) => (
                    <div key={`question_${index}`} className="flex" >
                        <div className="flex-none p-2">
                            {(result.answer === 'Correct') ?
                                <AiFillCheckCircle className="text-green-500" />
                                : <AiFillCloseCircle className="text-red-500" />}
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