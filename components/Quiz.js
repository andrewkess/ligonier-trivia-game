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
        <div className="flex flex-col items-center border border-black min-h-screen min-w-screen justify-evenly px-16 bg-gray-100">

            <p className="font-bold text-lg">{questions[curQuestion].category}</p>

            <div className=" border rounded-lg border-gray-400 p-16 bg-white h-[50vh] sm:w-[70vw] flex flex-col items-stretch">
                <div className="grow text-xl flex flex-col justify-center">
   {cleanQuestion(questions[curQuestion].question)}
   </div>

                <div className="flex justify-between">
                    <button
                        type="button"
                        className=" grow px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none text-center"
                        onClick={answerTrue}
                    >
                        True
                    </button>
                    <div className="flex-none w-14"></div>
                    <button
                        type="button"
                        className="grow text-center items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                        onClick={answerFalse}
                    >
                        False
                    </button>

                </div>

            </div>




            <p className="text-center mx-4">{curQuestion + 1} of {questions.length}</p>





        </div>
    );
};

export default Quiz;