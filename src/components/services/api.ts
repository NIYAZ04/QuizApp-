import { decodeHtmlEntities } from './utils';

export const fetchQuestions = async (retries: number = 3): Promise<any[]> => {
  try {
    const response = await fetch('https://opentdb.com/api.php?amount=15');
    const data = await response.json();

    if (data.response_code === 0) {
      return data.results.map((item: any) => ({
        question: decodeHtmlEntities(item.question), // Decode here
        options: [...item.incorrect_answers.map(decodeHtmlEntities), decodeHtmlEntities(item.correct_answer)], // Decode options
        correctAnswer: decodeHtmlEntities(item.correct_answer), // Decode the correct answer
      }));
    } else {
      throw new Error('Failed to fetch questions');
    }
  } catch (error) {
    console.error('Error fetching questions:', error);

    if (retries > 0) {
      console.log(`Retrying... attempts remaining: ${retries}`);
      await new Promise(resolve => setTimeout(resolve, 2000)); // Delay of 2 seconds before retry
      return fetchQuestions(retries - 1); // Retry fetching the questions
    }

    throw new Error('Failed to load quiz questions after multiple attempts');
  }
};
