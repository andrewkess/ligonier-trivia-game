import { useState, useEffect } from 'react';
//helper function to clean HTML characters in question data
import cleanQuestion from "../lib/helper";

const useQuiz = () => {

  interface QuestionInterface {
    category: string, 
    question: string, 
    correct_answer: string 
  }

  interface InitialQuestionInterface {
    category: string,
    type: string,
    difficulty: string
    question: string, 
    correct_answer: string,
    incorrect_answers: string[],
  }

  //save all questions in state
  const [questions, setQuestions] = useState<QuestionInterface[]>([]);
  //save user answers in state 
  const [answers, setAnswers] = useState<string[]>([]);
  //save current question in state
  const [curQuestion, setCurQuestion] = useState<number>(0);
  //track if component is still loading data
  const [isLoading, setLoading] = useState<boolean>(true)

  // function useState<State>(initialState: State): [State, ...];
  //function useState<S>(initialState: S | (() => S)): [S, ...];

  // React.useEffect(() => {
  //   setCurQuestion({
  //     ...settings,
  //     ...props.settings as number
  //   })
  // }, [props.settings])

// interface Props{
//   answers: string[];
//   curQuestion: number;
//   setAnswers: Dispatch<SetStateAction<string[]>>;
//   setCurQuestion: Dispatch<SetStateAction<number>>;
// }

// const answerTrue = ({answers, curQuestion}: Props) => {
 

  //function that adds "True" answer to the answer list on "True" button click
  const answerTrue = () => {
    //makes a copy of existing answers, since you shouldn't directly modify an array in state
    setAnswers((answers) => [...answers, "True"])

    //increments curQuestion to proceed with the next question
    setCurQuestion(curQuestion + 1);
  }

  //function that adds "False" answer to the answer list on "False" button click
  const answerFalse = () => {
    //makes a copy of existing answers, since you shouldn't directly modify an array in state
    setAnswers((answers) => [...answers, "False"])

    //increments curQuestion to proceed with the next question
    setCurQuestion(curQuestion + 1);
  }

  //useEffect hook to be called once on page load to fetch question data and save it to state
  useEffect(() => {
    setLoading(true)
    fetch('https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean')
      .then((res) => res.json())
      .then((data) => {
        //map through returned question data to only save required fields, and to clean question data with helper function
        data.results.map((question:InitialQuestionInterface) => {
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