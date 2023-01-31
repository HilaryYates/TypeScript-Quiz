import React, { useState } from "react";
import "./App.css";
import QuestionCard from "./components/QuestionCard";
import { fetchQuizQuestions } from "./API";
import { QuestionsState, Difficulty } from "./API";

const App = () => {
  const TOTAL_QUESTIONS = 10;

  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionsState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<any[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  console.log(questions);

  const startQuiz = async () => {
    const newQuestions = await fetchQuizQuestions();
    // TOTAL_QUESTIONS,
    // Difficulty.MEDIUM
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};
  const nextQuestion = () => {};
  return (
    <div className='App'>
      <h1>Quiz</h1>
      <button className='start' onClick={startQuiz}>
        Start
      </button>
      <p className='score'>Score:</p>
      <p>Loading Questions..</p>
      {/* <QuestionCard
        questionNumber={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswers ? userAnswers[number] : undefined}
        callback={checkAnswer}
      /> */}
      <button className='next' onClick={nextQuestion}>
        Next Question
      </button>
    </div>
  );
};

export default App;
