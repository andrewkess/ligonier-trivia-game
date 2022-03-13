import { useState, useEffect } from 'react';
import cleanQuestion from "../lib/helper";

const useQuiz = () => {

    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState([]);
    const [curQuestion, setCurQuestion] = useState(0);
    const [isLoading, setLoading] = useState(false)

    const answerTrue = () => {

        //adds "True" answer to the answer list
        //makes a shallow copy of existing answers, since you shouldn't directly modify an array in state
        setAnswers((answers) => [...answers, "True"])

        //increments curQuestion to proceed with the next question
        setCurQuestion(++curQuestion);
    }

    const answerFalse = () => {
        //adds "False" answer to the answer list
        //makes a shallow copy of existing answers, since you shouldn't directly modify an array in state
        setAnswers((answers) => [...answers, "False"])

        //increments curQuestion to proceed with the next question
        setCurQuestion(++curQuestion);
    }


    useEffect(() => {
        setLoading(true)
        fetch('https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean')
            .then((res) => res.json())
            .then((data) => {

                // setQuestions(data.results)

                // {"category":"History","type":"boolean","difficulty":"hard","question":"The Kingdom of Prussia briefly held land in Estonia.","correct_answer":"False","incorrect_answers":["True"]}

                // const tempQuestions = [];
                data.results.map((question) => {
                    setQuestions((questions) => [...questions, { category: question.category, question: cleanQuestion(question.question), correct_answer: question.correct_answer }])
                })

                setLoading(false)
            })
    }, [])


    return {
        questions,
        answers,
        curQuestion,
        isLoading,
        answerTrue,
        answerFalse
    };
};

export default useQuiz;