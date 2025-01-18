import React, { useState } from 'react';
import './HomeScreen.css';
import LoadingIndicator from './LoadingIndicator'; 

interface HomeScreenProps {
  onSubmitEmail: (email: string) => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ onSubmitEmail }) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false); 

  const handleSubmit = () => {
    if (email) {
      setIsLoading(true); 
      setTimeout(() => {
        onSubmitEmail(email); 
        setIsLoading(false);
      }, 4000);
    }
  };

  return (
    <div className="quiz-app-home-container">
      
      <header className="quiz-app-hero">
        <h1 className="quiz-app-title">CausalFunnel</h1>
        <h2 className="quiz-app-subtitle">Redefine Learning Through Fun and Interactive Quizzes</h2>
      </header>

      <main className="quiz-app-main">
    
        <section className="quiz-app-intro">
          <p className="quiz-app-tagline">Unlock Knowledge. Transform Growth.</p>
          <p className="quiz-app-description">
            Take your learning to the next level with cutting-edge quiz experiences powered by AI.
          </p>
        </section>

      
        <section className="quiz-app-email-section">
          <input
            type="email"
            placeholder="Enter your email to get started"
            className="quiz-app-email-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="quiz-app-email-button" onClick={handleSubmit}>
            Start Quiz
          </button>
        </section>

        
        <section className="quiz-app-quotes">
          <div className="quiz-app-quote fade-in-left">
            <p>"Knowledge is power, and quizzes are the key to unlocking it."</p>
          </div>
          <div className="quiz-app-quote fade-in-right">
            <p>"Engage your mind, one question at a time."</p>
          </div>
          <div className="quiz-app-quote fade-in-up">
            <p>"Learning never exhausts the mind—it ignites it."</p>
          </div>
        </section>
      </main>

      {isLoading && <LoadingIndicator />}
    </div>
  );
};

export default HomeScreen;
