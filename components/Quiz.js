import useQuiz from "./useQuiz";
import Results from '../components/Results'


const Quiz = () => {
    const { count, questions, answers, curQuestion, isLoading, answerTrue, answerFalse } = useQuiz();

    if (isLoading) return <p>Loading...</p>
    if (!questions) return <p>No profile data</p>

    // console.log(questions[0].category)

    if (curQuestion >= questions.length) return <Results />


    return (
        <div>
            <p className="font-bold">{questions[curQuestion].category}</p>
            <br />
            <p>{questions[curQuestion].question.replace(/&quot;/g, '"').replace(/&#039;/g, `'`).replace(/&ocirc;/g, `ô`)}</p>





            <div>
                <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none"
                    onClick={answerTrue}
                >
                    True
                </button>
                <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none"
                    onClick={answerFalse}
                >
                    False
                </button>

            </div>
            <br />
            <p>{curQuestion + 1} of {questions.length}</p>


            <p>Current answers: {answers.length}</p>
            <br /><br />




        </div>
    );
};

export default Quiz;