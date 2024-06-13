import axios from 'axios';

const solveEquation = async (equation) => {
  try {
    const response = await axios.get(`https://api.mathjs.org/v4/?expr=${encodeURIComponent(equation)}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to solve equation');
  }
};

export { solveEquation };
