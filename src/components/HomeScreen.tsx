import React, { useState } from 'react';
import './HomeScreen.css'
interface HomeScreenProps {
  onSubmitEmail: (email: string) => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ onSubmitEmail }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    onSubmitEmail(email);
  };

  return (
    <div className="home-screen">
      <h1>Enter Your Email</h1>
      <input
        type="email"
        placeholder="Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button onClick={handleSubmit}>Start Quiz</button>
    </div>
  );
};

export default HomeScreen;
