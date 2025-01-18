import React from 'react';

interface ReportProps {
  score: number;
  totalQuestions: number;
  answers: string[];
  correctAnswers: string[];
}

const Report: React.FC<ReportProps> = ({ score, totalQuestions, answers, correctAnswers }) => {
  return (
    <div className="report-page">
      <h2>Your Quiz Report</h2>
      <p>Score: {score} / {totalQuestions}</p>
      <div className="questions-summary">
        {answers.map((answer, index) => (
          <div key={index} className={`question-summary ${answer === correctAnswers[index] ? 'correct' : 'incorrect'}`}>
            <p>Q{index + 1}: {answer} <span>{answer === correctAnswers[index] ? '(Correct)' : '(Incorrect)'}</span></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Report;
