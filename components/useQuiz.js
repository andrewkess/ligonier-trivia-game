import { useState, useEffect } from 'react';
import numberWithCommas from "./helper";

const useQuiz = () => {
    const [count, setCount] = useState(9999);

    //My code

    const [questions, setQuestions] = useState(null);
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
                setQuestions(data.results)
                setLoading(false)
            })
    }, [])


    return {
        count: numberWithCommas(count),
        questions,
        answers,
        curQuestion,
        isLoading,
        answerTrue,
        answerFalse
    };
};

export default useQuiz;