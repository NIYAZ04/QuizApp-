// import React from 'react';
// import './Report.css';

//
import React from 'react';
import './Report.css';

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
          <div
            key={index}
            className={`question-summary ${answer === correctAnswers[index] ? 'correct' : 'incorrect'}`}
          >
            <p>
              <strong>Q{index + 1}:</strong> Your Answer: {answer || 'Not Attempted'}
              {answer === correctAnswers[index] ? (
                <span> (Correct)</span>
              ) : (
                <span>
                  {' '}
                  (Incorrect) <br />
                  Correct Answer: {correctAnswers[index]}
                </span>
              )}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Report;
