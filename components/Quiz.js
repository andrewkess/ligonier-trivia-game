import useQuiz from "./useQuiz";
import Results from '../components/Results'
import cleanQuestion from "../components/helper";


const Quiz = () => {
    const { count, questions, answers, curQuestion, isLoading, answerTrue, answerFalse } = useQuiz();

    if (isLoading) return <p>Loading...</p>
    if (!questions) return <p>No profile data</p>

    // console.log(questions[0].category)

    if (curQuestion >= questions.length) return <Results answers={answers} questions={questions} />


    return (
        <div className="flex flex-col items-center border border-black min-h-screen min-w-screen justify-around p-16 bg-gray-200">

            <div>
                <p className="font-bold">{questions[curQuestion].category}</p>
                <br />
                <div className=" border border-black p-16 bg-white">
             <div className="min-h-[30vh] w-full">   {cleanQuestion(questions[curQuestion].question)}</div>
             <br />

                <div className="flex">
                    <button
                        type="button"
                        className=" grow inline-flex items-center px-4 py-2 mx-4 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none"
                        onClick={answerTrue}
                    >
                        True
                    </button>
                    <button
                        type="button"
                        className="grow inline-flex items-center px-4 py-2 mx-4 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none"
                        onClick={answerFalse}
                    >
                        False
                    </button>

                </div>

                </div>

                <br />



                <p className="text-center mx-4">{curQuestion + 1} of {questions.length}</p>





            </div>
        </div>
    );
};

export default Quiz;