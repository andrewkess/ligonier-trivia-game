import { useState, useEffect } from 'react';
//helper function to clean HTML characters in question data
import cleanQuestion from "../lib/helper";

const useQuiz = () => {

  //save all questions in state
  const [questions, setQuestions] = useState([]);
  //save user answers in state 
  const [answers, setAnswers] = useState([]);
  //save current question in state
  const [curQuestion, setCurQuestion] = useState(0);
  //track if component is still loading data
  const [isLoading, setLoading] = useState(true)

  //function that adds "True" answer to the answer list on "True" button click
  const answerTrue = () => {
    //makes a copy of existing answers, since you shouldn't directly modify an array in state
    setAnswers((answers) => [...answers, "True"])

    //increments curQuestion to proceed with the next question
    setCurQuestion(++curQuestion);
  }

  //function that adds "False" answer to the answer list on "False" button click
  const answerFalse = () => {
    //makes a copy of existing answers, since you shouldn't directly modify an array in state
    setAnswers((answers) => [...answers, "False"])

    //increments curQuestion to proceed with the next question
    setCurQuestion(++curQuestion);
  }

  //useEffect hook to be called once on page load to fetch question data and save it to state
  useEffect(() => {
    setLoading(true)
    fetch('https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean')
      .then((res) => res.json())
      .then((data) => {
        //map through returned question data to only save required fields, and to clean question data with helper function
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