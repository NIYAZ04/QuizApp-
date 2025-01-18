import React from 'react';

interface OverviewPanelProps {
  visitedQuestions: boolean[];
  attemptedQuestions: boolean[];
  onNavigate: (index: number) => void;
}

const OverviewPanel: React.FC<OverviewPanelProps> = ({ visitedQuestions, attemptedQuestions, onNavigate }) => {
  return (
    <div className="overview-panel">
      {visitedQuestions.map((visited, index) => (
        <div key={index} className={`question-summary ${attemptedQuestions[index] ? 'attempted' : ''}`} onClick={() => onNavigate(index)}>
          {visited ? `Q${index + 1}` : 'Not Visited'}
        </div>
      ))}
    </div>
  );
};

export default OverviewPanel;
