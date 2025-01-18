export const fetchQuestions = async () => {
    const response = await fetch('https://opentdb.com/api.php?amount=15');
    const data = await response.json();
    return data.results.map((item: any) => ({
      question: item.question,
      options: [...item.incorrect_answers, item.correct_answer],
      correctAnswer: item.correct_answer,
    }));
  };
  