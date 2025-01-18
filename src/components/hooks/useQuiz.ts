import { useState, useEffect } from 'react';
import { fetchQuestions } from '../services/api';

const useQuiz = () => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState<string[]>([]);
  const [visitedQuestions, setVisitedQuestions] = useState<boolean[]>([]);
  const [attemptedQuestions, setAttemptedQuestions] = useState<boolean[]>([]);
  const [timerExpired, setTimerExpired] = useState(false);

  useEffect(() => {
    const fetchQuizData = async () => {
      const fetchedQuestions = await fetchQuestions();
      setQuestions(fetchedQuestions);
      setAnswers(Array(fetchedQuestions.length).fill(''));
      setVisitedQuestions(Array(fetchedQuestions.length).fill(false));
      setAttemptedQuestions(Array(fetchedQuestions.length).fill(false));
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
  };

  const onTimeUp = () => {
    setTimerExpired(true);
  };

  return {
    questions,
    answers,
    visitedQuestions,
    attemptedQuestions,
    timerExpired,
    onAnswerSelect,
    onNavigate,
    onTimeUp
  };
};

export default useQuiz;
