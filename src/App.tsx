import React, { useState, useEffect } from 'react';
import HomeScreen from './HomeScreen';
import QuestionCard from './QuestionCard';
import Timer from './Timer';
import Report from './Report';
import useQuiz from './hooks/useQuiz';

const App: React.FC = () => {
  const [email, setEmail] = useState<string | null>(null);
  const {
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
  } = useQuiz();

  const handleSubmitEmail = (email: string) => {
    setEmail(email);
  };

  if (!email) {
    return <HomeScreen onSubmitEmail={handleSubmitEmail} />;
  }

  return (
    <div className="quiz-app">
      <h1>Welcome, {email}</h1>
      <Timer duration={1800} onTimeUp={onTimeUp} />
      {!timerExpired && (
        <QuestionCard
          question={questions[currentQuestionIndex]?.question || ''}
          options={questions[currentQuestionIndex]?.options || []}
          selectedAnswer={answers[currentQuestionIndex]}
          onSelectAnswer={(answer) => onAnswerSelect(currentQuestionIndex, answer)}
          onNext={onNext}
          onPrev={onPrev}
        />
      )}
      {timerExpired && <Report score={calculateScore()} totalQuestions={questions.length} answers={answers} correctAnswers={correctAnswers} />}
    </div>
  );
};

export default App;
