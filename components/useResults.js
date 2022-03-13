import { useState, useEffect } from 'react';
//import numberWithCommas from "./helper";
import cleanQuestion from "../components/helper";

const useResults = (props) => {
    const { answers, questions } = props;
    const [score, setScore] = useState(0);

    //My code

    // const [questions, setQuestions] = useState(null);
    // const [answers, setAnswers] = useState([]);
    // const [curQuestion, setCurQuestion] = useState(0);
    // const [isLoading, setLoading] = useState(false)

    const [results, setResults] = useState([]);



    useEffect(() => {

        // setLoading(true);
        setScore(0);

        for (let i = 0; i < answers.length; i++) {
            console.log('Question: ', questions[i].question);
            console.log('Right answer: ', questions[i].correct_answer);
            console.log('Provided answer: ', answers[i]);

            if (answers[i] === questions[i].correct_answer) {
                console.log('Correct answer');
                setScore(++score);

                //adds answer result (correct, incorrect) and question to the results list
                //makes a shallow copy of existing answers, since you shouldn't directly modify an array in state
                setResults((results) => [...results, { answeredCorrectly: true, answerDesc: `This statement is ${questions[i].correct_answer}. You answered correctly.`, question: cleanQuestion(questions[i].question) }])



            }
            else {
                console.log('Incorrect answer');
                setResults((results) => [...results, { answeredCorrectly: false, answerDesc: `This statement is ${questions[i].correct_answer}. You answered ${answers[i]}.`, question: cleanQuestion(questions[i].question) }])
            }

        }

    }, [])


    return {
        score,
        results
    };
};

export default useResults;