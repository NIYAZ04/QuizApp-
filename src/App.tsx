import React, { useState } from 'react';
import HomeScreen from './components/HomeScreen';
import QuestionCard from './components/QuestionCard';
import Timer from './components/Timer';
import Report from './components/Report';
import useQuiz from './components/hooks/useQuiz';

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
    calculateScore,
  } = useQuiz();

  const handleSubmitEmail = (email: string) => {
    setEmail(email);
  };

  if (!email) {
    return <HomeScreen onSubmitEmail={handleSubmitEmail} />;
  }

  // Handle the transition to the report page after 10 questions or timer expiry
  if (questions.length > 0 && currentQuestionIndex >= 9 || timerExpired) {
    return <Report score={calculateScore()} totalQuestions={questions.length} answers={answers} correctAnswers={questions.map(q => q.correctAnswer)} />;
  }

  return (
    <div className="quiz-app">
      <h1>Welcome, {email}</h1>
      <Timer duration={1800} onTimeUp={onTimeUp} />
      <QuestionCard
        question={questions[currentQuestionIndex]?.question || ''}
        options={questions[currentQuestionIndex]?.options || []}
        selectedAnswer={answers[currentQuestionIndex]}
        onSelectAnswer={(answer) => onAnswerSelect(currentQuestionIndex, answer)}
        onNext={onNext}
        onPrev={onPrev}
      />
    </div>
  );
};

export default App;
