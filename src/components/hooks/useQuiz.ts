import { useState, useEffect } from 'react';
import { fetchQuestions } from '../services/api';

interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
}

const useQuiz = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<string[]>([]);
  const [visitedQuestions, setVisitedQuestions] = useState<boolean[]>([]);
  const [attemptedQuestions, setAttemptedQuestions] = useState<boolean[]>([]);
  const [timerExpired, setTimerExpired] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  useEffect(() => {
    const fetchQuizData = async () => {
      const fetchedQuestions = await fetchQuestions();
      setQuestions(fetchedQuestions);
      setAnswers(new Array(fetchedQuestions.length).fill(''));
      setVisitedQuestions(new Array(fetchedQuestions.length).fill(false));
      setAttemptedQuestions(new Array(fetchedQuestions.length).fill(false));
    };

    fetchQuizData();
  }, []);

  const onAnswerSelect = (index: number, answer: string) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = answer;
    setAnswers(updatedAnswers);

    const updatedAttempted = [...attemptedQuestions];
    updatedAttempted[index] = true;
    setAttemptedQuestions(updatedAttempted);
  };

  const onNavigate = (index: number) => {
    const updatedVisited = [...visitedQuestions];
    updatedVisited[index] = true;
    setVisitedQuestions(updatedVisited);
    setCurrentQuestionIndex(index);
  };

  const onNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const onPrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const onTimeUp = () => {
    setTimerExpired(true);
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach((q, index) => {
      if (answers[index] === q.correctAnswer) {
        score++;
      }
    });
    return score;
  };

  return {
    questions,
    answers,
    visitedQuestions,
    attemptedQuestions,
    timerExpired,
    currentQuestionIndex,
    onAnswerSelect,
    onNavigate,
    onNext,
    onPrev,
    onTimeUp,
    calculateScore,
  };
};

export default useQuiz;
