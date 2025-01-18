import React from 'react';
import QuestionCard from './QuestionCard';

interface QuestionListProps {
  questions: { question: string; options: string[]; correctAnswer: string }[];
  answers: string[];
  onAnswerSelect: (index: number, answer: string) => void;
}

const QuestionList: React.FC<QuestionListProps> = ({ questions, answers, onAnswerSelect }) => {
  return (
    <div className="question-list">
      {questions.map((q, index) => (
        <QuestionCard
          key={index}
          question={q.question}
          options={q.options}
          selectedAnswer={answers[index]}
          onSelectAnswer={(answer) => onAnswerSelect(index, answer)}
        />
      ))}
    </div>
  );
};

export default QuestionList;
