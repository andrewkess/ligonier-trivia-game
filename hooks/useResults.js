import { useState, useEffect } from 'react';

// answers and questions arrays are passed as props from state
const useResults = ({ answers, questions }) => {
  //save total score in state
  const [score, setScore] = useState(0);
  //save full graded quiz in state
  const [results, setResults] = useState([]);

  //useEffect hook to be called once on page load to grade user quiz and save full graded quiz in state
  useEffect(() => {
    //for each answer provided by the user...
    for (let i = 0; i < answers.length; i++) {
      //if the user's provided answer is correct
      if (answers[i] === questions[i].correct_answer) {
        //increment score by one point
        setScore(++score);
        //save result (answeredCorrectly, answerDesc, question) in results array
        setResults((results) => [...results, { answeredCorrectly: true, answerDesc: `This statement is ${questions[i].correct_answer.toLowerCase()}. You answered correctly.`, question: questions[i].question }])
      }
      //else if the user's provided answer is incorrect
      else {
        //save result (answeredCorrectly, answerDesc, question) in results array
        setResults((results) => [...results, { answeredCorrectly: false, answerDesc: `This statement is ${questions[i].correct_answer.toLowerCase()}. You answered ${answers[i].toLowerCase()}.`, question: questions[i].question }])
      }
    }
  }, [])

  return {
    score,
    results
  };
};

export default useResults;