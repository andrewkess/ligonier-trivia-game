import useQuiz from "./useQuiz";
import Link from 'next/link'

const Results = () => {
    const { questions, answers } = useQuiz();

    if (!answers) return <p>No answers provided yet!</p>

    return (
        <div>




            <p>Current answers: {answers.length}</p>
            <br /><br />
            <Link href="/index" passHref>
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